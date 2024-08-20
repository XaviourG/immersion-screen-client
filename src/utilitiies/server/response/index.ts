export type FailureResponse = {
    data: null,
    isSuccess: false;
    status: number;
    error: string;
}

export type SuccessResponse<T> = {
    data: T,
    isSuccess: true;
    status: number;
    error: null;
}

export type ServerResponse<T> = SuccessResponse<T> | FailureResponse;

export class ResponseFactory {
    static Failure = (status: number, error: string): FailureResponse => ({
        data: null,
        isSuccess: false,
        status,
        error
    });

    static Success = <T>(status: number, data: T): SuccessResponse<T> => ({
        data,
        isSuccess: true,
        status,
        error: null
    });
}