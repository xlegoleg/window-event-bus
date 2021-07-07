import { TopicEventCallback } from "../types/Topic";

export interface ITopicEntity {
    eventElement: HTMLElement;
    name: string;
    events: ITopicEvent[];
    on: (eventName: string, callback: TopicEventCallback) => void;
    onAny: (callback: TopicEventCallback) => void;
    delete: (eventName: string) => void;
    emit: (eventName: string, payload: any) => void;
}

export interface ITopicEvent {
    name: string;
    listener: TopicEventCallback;
}