(function (window) {
    'use strict';
    var App = window.App || {};

    function Session(SessionId, db) {
        this.SessionId = SessionId;
        this.db = db;
    }

    Session.prototype.createMessage = function (msg) {
        console.log(msg.emailAddress + "'s message has been received.");
        this.db.add(msg.emailAddress, msg);
    };

    Session.prototype.answerMessage = function (senderId) {
        console.log(senderId + "'s message has been answered.");
        this.db.remove(senderId);
    };

    Session.prototype.allMessages = function () {
        var senderIdArray = Object.keys(this.db.getAll());
        console.log('Session #' + this.SessionId + ' has pending messages:');
        senderIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    };

    App.Session = Session;
    window.App = App;

}) (window);