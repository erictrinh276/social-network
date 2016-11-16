Posts = new Mongo.Collection('posts');

Meteor.methods({
    addPost: function (content) {
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized', 'You are not signed in');
        }

        var username = Meteor.user().username;
        Posts.insert({
            content: content,
            createdDate: new Date(),
            author: username
        });

    },

    follow: function (post) {
        var user = Meteor.user();

        if (!user) {
            throw new Meteor.Error('not-authorized', 'You are not signed in');
        }

        if (user.profile === undefined) {
            user.profile = {};
            user.profile.follow = [];
        }

        if (user.username != post.author && user.profile.follow.indexOf(post.author) == -1) {
            Meteor.users.update(
                { _id: user._id },
                {
                    $push: { 'profile.follow': post.author }
                }
            )
        }
    }
})