(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

// Constructor that accepts a remote server URL and throws an error message if there's no URL.
    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }

// Adding prototype method to store customer's data on remote web service.
    RemoteDataStore.prototype.add = function(key, val) {
        $.post(this.serverUrl, val, function (serverResponse) {
            // Printing server's response after an event (mouse click, form submission).
            console.log(serverResponse);
        });
    };

// Adding prototype method to retrieve all coffee orders.
    RemoteDataStore.prototype.getAll = function (cb) {
        // Retrieving data from server using the URL.
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

// Adding method to retrieve a single coffee order by email address.
    RemoteDataStore.prototype.get = function (key, cb) {
        $.get(this.serverUrl + '/' + key, function(serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

// Adding method to remove order after it is delivered.
    RemoteDataStore.prototype.remove = function(key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };


    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);