import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppConfig, AppRuntime } from './store';
import { AppError, BaseStoreState } from '../store';
export declare enum ActionType {
    APP_LOAD = "app load",
    APP_LOAD_START = "app load start",
    APP_LOAD_SUCCESS = "app load success",
    APP_LOAD_ERROR = "app load error",
    APP_SEND_MESSAGE = "app/send/message",
    APP_SET_TITLE = "app/set/title"
}
export interface AppLoadSuccess extends Action {
    type: ActionType.APP_LOAD_SUCCESS;
    config: AppConfig;
    runtime: AppRuntime;
}
export interface AppLoadError extends Action {
    type: ActionType.APP_LOAD_ERROR;
    error: AppError;
}
export interface AppSetTitle extends Action<ActionType.APP_SET_TITLE> {
    type: ActionType.APP_SET_TITLE;
    title: string;
}
export declare function appLoadSuccess(config: AppConfig, runtime: AppRuntime): AppLoadSuccess;
export declare function appLoadError(error: AppError): AppLoadError;
export declare function appSetTitle(title: string): (dispatch: ThunkDispatch<BaseStoreState, void, Action<any>>, getState: () => BaseStoreState) => Promise<void>;
export declare function appStart(): (dispatch: ThunkDispatch<BaseStoreState, void, Action<any>>, getState: () => BaseStoreState) => void;
export interface SendMessage {
    type: ActionType.APP_SEND_MESSAGE;
    messageName: string;
    payload: object;
}
export declare function sendMessage(messageName: string, payload: object): (dispatch: ThunkDispatch<BaseStoreState, void, Action<any>>, getState: () => BaseStoreState) => void;
