import { SERVER_AGENT } from "../../utilitiies/server";

export const requestUserLogin = (email: string, password: string) => {
    return SERVER_AGENT.post('/login', { email, password });
};

export const requestLiveSessionConnection = (token: string) => {
    return SERVER_AGENT.post('/live/join', { token });

};