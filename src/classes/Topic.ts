import { ITopicEntity, ITopicEvent } from "../interfaces/Topic";
import { TopicEventCallback } from "../types/Topic";

export class Topic implements ITopicEntity{
    public eventElement: HTMLElement;
    public name: string;
    public events: ITopicEvent[];

    constructor(name: string) {
        this.name = name;
        this.eventElement = document.createElement(`eventElementTopic_${name}`);
        this.events = [];
    }

    public on(eventName: string, callback: TopicEventCallback) {
        this.events.push({
            name: eventName,
            listener: callback
        });
        this.eventElement.addEventListener(eventName, callback);
    }

    public onAny(callback: TopicEventCallback) {
        this.events.forEach(event => {
            this.eventElement.addEventListener(event.name, (e) => {
                console.log(`[EventBus]: Handler called by ${event.name} event`);
                callback(e)
            });
        });
    }

    public delete(eventName: string) {
        const event = this.events.find(event => event.name === eventName);
        if (event) {
            this.eventElement.removeEventListener(event.name, event.listener);
        }
    }

    public emit(eventName: string, payload: any) {
        this.eventElement.dispatchEvent(new CustomEvent(eventName, {
            detail: payload
        }));
    }

}