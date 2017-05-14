import Messages from '/messages/collection';

Template.messageList.helpers({
  messages () {
    const messages = Messages.find().fetch();
    // console.log(messages);
    return messages;
  },
  audioUrl (message) {
    // Create blob from message audio
    const blob = new Blob([message.audio], { 'type' : 'audio/ogg; codecs=opus' });

    // Construct a url for message audio blob
    const URL = window.URL.createObjectURL(blob);
    
    return URL;
  }
});
