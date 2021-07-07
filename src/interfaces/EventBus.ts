import { ITopicEntity } from "../interfaces/Topic";

export interface IEventBusEntity {
    bus: HTMLElement;
    topics: ITopicEntity[];
    addTopic: (name: string) => void;
    getTopic: (name: string) => ITopicEntity | undefined;
    getAllTopics: () => ITopicEntity[];
}