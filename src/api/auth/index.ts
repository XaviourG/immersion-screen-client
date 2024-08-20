import { SERVER_AGENT } from "../../utilitiies/server";

export const requestUserLogin = (email: string, password: string) => {
    console.log({ Lemail: email, LPassword: password })
    return SERVER_AGENT.post('/user/login', { email, password });
};

export const requestLiveSessionConnection = (token: string) => {
    return SERVER_AGENT.post('/live/join', { token });

};