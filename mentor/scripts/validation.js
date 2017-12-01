(function(window) {
    'use strict';
    var App = window.App || {};

    // Validating the Rank field
    var Validation = {
        isRank: function(rank) {
            // Valid conditions of the Rank field
            return /.+Bronze|Silver|Gold|Plat|Diamond|Master|Challenger+\s+[1-5]{0,1}$/.test(rank);
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
