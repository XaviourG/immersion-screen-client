import { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Env } from '../env';
import { FailureResponse, ResponseFactory, ServerResponse } from './response';
import { AnyObject } from '../global-types';

const parseFailure = (error: AxiosError | Error | unknown): FailureResponse => {
    const status =  (error as AxiosError)?.status ?? 500;
    const message = (error as AxiosError)?.message ?? 'Something went wrong..'
    return ResponseFactory.Failure(status, message);
}

const parsePotentialSuccess = <T>(response: AxiosResponse): ServerResponse<T> => {
    const status = response.status ?? 500;
    if (status < 200 || status >= 300) {
        const message = typeof response?.data?.error === 'string' ? response.data.error : `Server rejected request with status ${status}`;
        return ResponseFactory.Failure(status, message)
    }
    return ResponseFactory.Success<T>(status, response.data);
};

class ServerAgent {
    agent: Axios;

    constructor() {
        this.agent = new Axios({
            baseURL: Env.get('SERVER_URL'),
            withCredentials: true
        });
    }

    get = async <T>(route: string, config?: AxiosRequestConfig): Promise<ServerResponse<T>> => {
        try {
            const response = await this.agent.get(route, config);
            return parsePotentialSuccess(response);
        } catch (error) {
            console.error(error);
            return parseFailure(error);
        }
    }

    post = async <T>(route: string, body: AnyObject, config?: AxiosRequestConfig): Promise<ServerResponse<T>> => {
        try {
            const response = await this.agent.post(route, body, config);
            return parsePotentialSuccess(response);
        } catch (error) {
            console.error(error);
            return parseFailure(error);
        }
    }
}

export const SERVER_AGENT = new ServerAgent();