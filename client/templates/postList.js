Template.postList.helpers({
  posts: function () {
    var result;
    if (Session.get('username')) {
      result = Posts.find({ author: Session.get('username') }, { sort: { createdDate: -1 } });
    }
    else
      result = Posts.find({}, { sort: { createdDate: -1 } });
    return result;
  }
});

Template.postList.events({
  'click .follow-link': function (event) {
    event.preventDefault();

    Meteor.call('follow', this)
  }
});