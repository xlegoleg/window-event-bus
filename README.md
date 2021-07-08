## This is a basic event bus using window object to communicate with microfrontends

## Simple usage

#### _Global initialization_
```javascript 
  window.EventBus = new EventBus();
```

#### _Initialization in microfrontend/any place_
```javascript 
  export const AppEventBus = window.EventBus;
```


#### _Add topic_
```javascript 
  AppEventBus.addTopic('topic');
```

#### _Get all topics_
```javascript 
  export const AppTopics: ITopicEntity[] = AppEventBus.getAllTopics();
```

#### _Get current topic_
```javascript 
  export const EventTopic: ITopicEntity | undefined = AppEventBus.getTopic('topic');
```

#### _Listen event in current topic_
```javascript 
  EventTopic?.on('topic_event', (e: CustomEvent) => {
      const anyDataFromEvent = e.detail;
      console.log('any_action');
  });
```

#### _Handle any event_
```javascript 
  EventTopic?.onAny((e: CustomEvent) => {
    console.log('this is triggered on any topic event')
  });
```

#### _Remove listening from topic_
```javascript 
  EventTopic?.delete('topic_event');
```

#### _Trigger event in topic_
```javascript 
  EventTopic?.emit('topic_event', {
      any: 123,
      field: '123',
      here: true
  });
```