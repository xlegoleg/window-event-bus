import { ITopicEntity } from "../interfaces/Topic";
import { Topic } from "../classes/Topic";
import { IEventBusEntity } from "../interfaces/EventBus";

class EventBus implements IEventBusEntity {
    public topics: ITopicEntity[];
    public defaultTopic: ITopicEntity;

    constructor() {
        const defaultTopic = new Topic('application')
        this.defaultTopic = defaultTopic
        this.topics = [defaultTopic];
    }

    public addTopic(name: string) {
        if (!this.topics.find(topic => topic.name === name)) {
            this.topics.push(new Topic(name));
        } else {
            console.warn(`[EventBus]: Topic with name ${name} is already exists`);
        }
    }

    public getTopic(name: string): ITopicEntity {
        const topic = this.topics.find(topic => topic.name === name) || null
        if (topic) {
            return topic;
        } else {
            console.warn(`[EventBus]: Topic with name ${name} is not exists, returned default application topic`);
            return this.defaultTopic;
        }
    }

    public getAllTopics(): ITopicEntity[] {
        return this.topics;
    }
}

export default EventBus;