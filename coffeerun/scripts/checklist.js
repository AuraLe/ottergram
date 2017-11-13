// Creating CheckList module using an IIFE
(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

// CheckList constructor
    function CheckList(selector) {
        if(!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

// Creating addClickHandler method to handle clicks onto the checklist
CheckList.prototype.addClickHandler = function (fn) {
    this.$element.on('click', 'input', function (event) {
        var email = event.target.value;
        this.removeRow(email);
        fn(email);
    }.bind(this));
};

// Creating Row instances via the constructor and append each instance's $element to te live DOM
CheckList.prototype.addRow = function (coffeeOrder) {
    // Remove overwritten order
    this.removeRow(coffeeOrder.emailAddress);

    // Create a new instance of a row using coffee order info
    var rowElement = new Row(coffeeOrder);

    // Add new row instance's $element property to checklist
    this.$element.append(rowElement.$element);
};


// Removing a row upon clicking checkbox 
CheckList.prototype.removeRow = function (email) {
    this.$element
        .find('[value="' + email + '"]')
        .closest('[data-coffee-order="checkbox"]')
        .remove();
};


// Row constructor; retrieve info from the order form after it's been submitted and present it in HTML format.
function Row(coffeeOrder) {
    // Creating <div></div> with properties
    var $div = $('<div></div>', {
        'data-coffee-order': 'checkbox',
        'class': 'checkbox'
    });

    // Creating <label></label>
    var $label = $('<label></label>');

    // Creating <input> with properties, value - customer's email address - is key ID associated with the coffee order.
    var $checkbox = $('<input></input>', {
        type: 'checkbox',
        value: coffeeOrder.emailAddress
    });

    // Creating string text description displayed next to checkbox
    var description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
        description += coffeeOrder.flavor + ' ';
    }
    description += coffeeOrder.coffee + ' ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    // Connecting elements together
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
}

    App.CheckList = CheckList;
    window.App = App;
})(window);
