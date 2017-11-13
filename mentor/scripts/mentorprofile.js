// Module that manages the mentor profile database.
(function (window) {
    'use strict';
    var App = window.App || {};

    function MentorProfile() {
        this.data = {};
    }

    MentorProfile.prototype.add = function (nameID, region, rank, role, contactInfo) {
        this.data[nameID] = {nameID, region, rank, role, contactInfo};
    }

    MentorProfile.prototype.get = function(nameID) {
        return this.data[nameID];
    }

    MentorProfile.prototype.getAll = function() {
        return this.data;
    }

    MentorProfile.prototype.remove = function(nameID) {
        delete this.data[nameID];
    }

    App.MentorProfile = MentorProfile;
    window.App = App;
})(window);


// Module that allows user to add a new profile. Because this is a user profile, not a business order, once it's created, it'll always remain there.
(function (window) {
    'use strict';
    var App = window.App || {};

    function Profile() {
        this.data = {};
    }

    Profile.prototype.addNewMentor = function (nameID) {
        console.log('Adding ' + nameID + ' to database.');
        this.data.add(nameID, region, rank, role, contactInfo);
    }

    Profile.prototype.showAllMentors = function () {
        var nameIdArray = Object.keys(this.db.getAll());
        console.log('List of current mentors in the system: ');
        nameIdArray.forEach(function(id) {
            console.log(this.data.get(id));
        }.bind(this));
    }

    App.Profile = Profile;
    window.App = App;
})(window);
 