import Messages from '/messages/collection';

Meteor.methods({
  saveMessage: function (message) {
    console.log('saving message');
    console.log(message);
    Messages.insert({
      audio: message
    })
  }
})
