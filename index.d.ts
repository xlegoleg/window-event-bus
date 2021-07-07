import { TopicEventCallback } from "./src/types/Topic";
import { ITopicEntity } from "./src/interfaces/Topic";

declare module '@xlegoleg/window-event-bus' {
    export class EventBus {
        constructor();
        addTopic(name: string): void;
        getTopic(name: string): ITopicEntity | undefined;
        getAllTopics(): ITopicEntity[];
    }

    export default EventBus;
}