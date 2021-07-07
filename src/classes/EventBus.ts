import { ITopicEntity } from "../interfaces/Topic";
import { Topic } from "../classes/Topic";
import { IEventBusEntity } from "../interfaces/EventBus";

class EventBus implements IEventBusEntity {
    public bus: HTMLElement;
    public topics: ITopicEntity[];

    constructor() {
        this.bus = document.createElement('eventBusElement');
        this.topics = [];
    }

    public addTopic(name: string) {
        this.topics.push(new Topic(name, this.bus));
    }

    public getTopic(name: string): ITopicEntity | undefined {
        return this.topics.find(topic => topic.name === name) || undefined;
    }

    public getAllTopics(): ITopicEntity[] {
        return this.topics;
    }
}

export default EventBus;