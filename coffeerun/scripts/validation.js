(function(window) {
    'use strict';
    var App = window.App || {};

// Create module to organize functions
    var Validation = {
        // Create method to test an email's validation
        isCompanyEmail: function(email) {
            return /.+@fresnocitycollege\.com$/.test(email);
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);