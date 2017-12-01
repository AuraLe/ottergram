(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
  
    function FormHandler(selector) {
      if (!selector) {
        throw new Error('No selector provided');
      }
  
      this.$formElement = $(selector);
      if (this.$formElement.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
      }
    }
  
    FormHandler.prototype.addSubmitHandler = function (fn) {
      console.log('Setting submit handler for form');
      this.$formElement.on('submit', function (event) {
        event.preventDefault();
  
        var data = {};
        $(this).serializeArray().forEach(function (item) {
          data[item.name] = item.value;
          console.log(item.name + ': ' + item.value);
        });
        console.log(data);
        fn(data);
        this.reset();
        this.elements[0].focus();
      });
    };

    FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="rank"]', function (event) {
      var rank = event.target.value;
      var message = '';
      if (fn(rank)) {
        event.target.setCustomValidity('');
      } else {
        message = rank + ' is not a rank!'
        event.target.setCustomValidity(message);
      }
    });
  };

  
    App.FormHandler = FormHandler;
    window.App = App;
  })(window);
  