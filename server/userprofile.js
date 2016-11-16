Accounts.onCreateUser(function (options, user) {
    user.profile = user.profile || {};

    //initiate follow to keep track of who they follow
    user.profile.follow = [];

    return user;
});

// Accounts.onLogin(function (options, user) {
//     if (user.profile === null || user.profile === {}) {
//         user.profile.follow = [];
//     }
// });