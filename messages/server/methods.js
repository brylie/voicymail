import Messages from '/messages/collection';

Meteor.methods({
  saveMessage: function (message) {
    // Save audio message to Messages collection
    Messages.insert({
      audio: message
    })
  }
})
