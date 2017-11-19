(function (window){
    'use strict';
    var App = window.App || {};

    function TSM() {
        this.data = {};
    }

    TSM.prototype.add = function (sender, question) {
        this.data[sender] = question;
    }

    TSM.prototype.get = function(sender) {
        return this.data[sender];
    };

    TSM.prototype.getAll = function() {
        return this.data;
    };

    TSM.prototype.remove = function(sender) {
        delete this.data[sender];
    }

    App.TSM = TSM;
    window.App = App;
}) (window);