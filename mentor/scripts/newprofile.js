// Module that allows user to add a new profile. Because this is a user profile, not a business order, once it's created, it'll always remain there.
(function (window) {
    'use strict';
    var App = window.App || {};

    function Profile(db) {
        this.db = db;
    }

    Profile.prototype.addNewMentor = function (newMentor) {
        console.log('Adding ' + newMentor.IGN + ' to database.');
        this.db.add(newMentor.IGN, newMentor);
    }

    Profile.prototype.showAllMentors = function () {
        var nameIdArray = Object.keys(this.db.getAll());
        console.log('List of current mentors in the system: ');
        nameIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    }

    App.Profile = Profile;
    window.App = App;
})(window);
 