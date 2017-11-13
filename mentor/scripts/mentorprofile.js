// Module that manages the mentor profile database.
(function (window) {
    'use strict';
    var App = window.App || {};

    function MentorProfile() {
        this.data = {};
    }

    MentorProfile.prototype.add = function (name, value) {
        this.data[name] = value;
    }

    MentorProfile.prototype.get = function(name) {
        return this.data[name];
    }

    MentorProfile.prototype.getAll = function() {
        return this.data;
    }

    MentorProfile.prototype.remove = function(name) {
        delete this.data[name];
    }

    App.MentorProfile = MentorProfile;
    window.App = App;
})(window);


