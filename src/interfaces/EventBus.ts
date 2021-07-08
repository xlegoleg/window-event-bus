import { ITopicEntity } from "../interfaces/Topic";

export interface IEventBusEntity {
    topics: ITopicEntity[];
    defaultTopic: ITopicEntity;
    addTopic: (name: string) => void;
    getTopic: (name: string) => ITopicEntity;
    getAllTopics: () => ITopicEntity[];
}