Meteor.publish(null, function() {
    return Meteor.users.find({_id: this.userId});
});