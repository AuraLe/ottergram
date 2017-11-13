## WEEK 13
*   What is AJAX and why should we use it? (not in the book, but do a little research on what Fetch does and how it compares to AJAX.)
    AJAX is a client-side script that communicate with the server/database (exchanging data) without the need to refresh the page. The best benefit of AJAX is that we can communicate important data without having the need to send the whole page (excessive, unnecessary data) to the server. It is also user-friendly and fast.

*   How does the HTTP status code help us to process AJAX call and response?
    The status code lets us know if the Ajax call and response from the server is successful or not.

*   What role does jQuery play in this server processing?
    jQuery creates and manages the XMLHttpRequest objects, manages Ajax requests, and provides a concise, backward-compatible, cross-browser API.

*   How wrote the RESTful Web Service we will use?

*   In your own words explain the table of RESTful URL and HTTP verb patterns?
    For /coffeeorders, it is a collection so the GET request will retrieve a list of all of the orders, POST will create a new order, PUT will not update the whole collection, DELETE will remove the whole collection. For /coffeeorders/a@b.com is a specific item within the collection of orders. GET will retrieve that specific record, PUT will update it while DELETE will remove it, and POST does nothing because you can't create a new record within a single record.

*   With RemoteDataStore being implemented, why keep DataStore around?
    Because there may be a situation where we want to improve the CoffeeRun. Also it allows the app to run offline.

*   What does asynchronously mean in this context?
    The user doesn't have to wait for server to respond before they can act again.

*   How is the RemoteDataStore add method different from DataStore add method?
    RemoteDataStore method communicates asynchronously with the server. 

*   How is the callback different than what we have done in the past?
*   Remove previous HTML for checklist.
*   How did it feel to get the server response?  What do you think _id represents?
    _id represents the unique ID of the email address (user ID).

*   Setup your DevTool to show console, network and response header, take a printscreen and provide link here. 
    http://prntscr.com/h8jk5k 

*   Did you find the form data on the headers output?
    Yes. (I didn't see it on Firefox. I had to switch to Chrome.)

*   How many coffeeOrders do you see? Can you see yours? Where are the others coming from?
    One. It's the one that I typed into the console.

*   How does calling a callback (cb) improve .get and .getAll methods?
    It can be called inside the method.

*   How does $.get and $.post differ from $.ajax?
    $.get and $.post are a convenience provided by jQuery, while $.ajax isn't provided by jQuery.

*   What does type: 'DELETE' do?
    Providing the delete option for the 'remove' method.

*   Were you able to delete from the console?  
    Yes.

*   What makes the RemoteDataStore so easy to implement?
    Because RemoteDataStore is pretty similar to DataStore.

*   Add an order and delete it from the form! THAN add another order and REFRESH the page, does the order show up?  If not, why not! 
    Yes (using getAll to retrieve).


## WEEK 12
*   Is this a valid html input attribute - required="false"?
    Yes.
*   What happens to the form submit handler when you add the required attribute to the input element(s)?
    The field is required to be filled before user can submit the form.
*   What is a Regular Expression and how it used for form validation? Give an example of a invalid Coffee Order.
    A regular expression is a sequence of characters for pattern matching. Invalid Coffee Order: 123456.
*   Look up Constraint Api on caniuse.com, what percentage of browsers currently support it?
    All current versions of browsers, except for Opera Mini, fully support or partially support it.
*   Look up webshims and tell me what it means.
    Webshim is a polyfill library that enables you to reliably use HTML5 features across browsers, even if native support is lacking. A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. 
*   Validation module will do what function in CoffeeRun?
    The module will test the validation of the input email.
*   Where does the test method used on the regular expression come from?
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
*   Why is it too late to validate email on form submission?
    The constraint API requires that invalid fields be marked prior to submission. If there is any invalid field, the browser stops triggering the submit event.
*   What is event.target.value? Console.log(event) to review it!
    The variable takes the input email from the form as its value.
*   How is event delegation used on the addInputHandler?
    It is used to filter out events created by anything but the [name="emailAddress"] field.
*   Explain in your own words how the validity check on callback.
    When user input an email, the email will be checked to see if its domain is identical to the predefined domained. If yes then the form will be submitted normally. If not then there will be an error message popped at the email input field, stating that the email is invalid.
*   How is CoffeeRun using the contstraint api?
    It's using the API in conjunction with the validation function to trigger built-in validation behavior.
*   What is a pseudo class and how is it used CoffeeRun.
    A pseudo-class is used to define a special state of an element. The psedo-classes are added to the field when the validation process took place.


## WEEK 11
*   What function will CheckList do in the CoffeeRun?
    It receives data from the coffee order form, then adds a checklist of pending orders at the end of the page.

*   What element will JavaScript target to create Checklist function?
    [data-coffee-order="checklist"]

*   How is the selector different in CheckList vs FormHandler modules?
    The selector in CheckList needs to match with at least one element in the DOM.

*   What does $(selection) do?
    Select (selector) with jQuery.

*   How can you verify that you created the CheckList on the App global object?
    Enter "var checkList = new App.CheckList();" into the console. It'll return the error message.

*   How many methods will CheckList need and what will each one do?
    Three methods. One will create a checklist item. Second method will remove a row from the checklist. Third method will add event listener for click events so that the code knows when to remove a row.

*   Review Figure 11.3 and make sure you conceptually understand it. 
    When a form is submitted, the form data will be sent to 2 constructors: DataStore (delivered by Truck) and CheckList. It's is stored in DataStore for coffee shop to use, while in CheckList, it can be manipulated by customers. The data passed through CheckList will then be exported as a list of orders (rows) so customers can remove upon clicking on the checkbox.

*   Why can't we write the HTML for the checklist output into the index.html file?
    The data used in the checklist output needed to be filled out in the form first, so it can't be written beforehand.

*   Where in the DOM tree will be the row be created?
    Subtree of the DOM. The subtree will then be appended to the main DOM tree as a child of the [data-coffee-order="checklist"] element.

*   Write the code on the bottom of 229 into the index.html, below where you will be writing is dynamically with JS.

*   What is the difference between the jQuery property names in div vs checkbox code?
    The propery in div code is between single quotation marks. Property names that have special character (dash) need to be in quotes. 'class' needs to be in quotes to prevent the browser from mistaking it for JavaScript (it's an HTML property in this case).

*   What does "+=" do?
    Concatenating parts of a string. It combines addition and assignment into one single step.

*   Why do we need to check for coffeeOrder.flavor?
    Because the flavor is an optional choice and isn't always present in the description.

*   Is the order in which you append the elements important?
    It is important to start from the smallest, innermost elements and work your way up to ensure that nothing is missing.

*   Explain in your own words what the CheckList method addRow function?
    It retrieves info submitted from the form, create a new instance (addRow), then pass it to the checklist.

*   Explain step by step what happens after adding the anomyous function call(s) on the addSubmitHandler (VERY IMPORTANT), make sure you explain where the variable data is created and how does fn changed in this code modification. 
    The prototype method will accept the function argument fn. An event listener will handle a click event. Inside the event handler function, the local variable "email" is created and receives the customer's email address as its value. The function argument fn is then invoked inside the event handler callback and is passed the variable "email".

*   What is another to explain chained methods in jQuery?
    In jQuery, you can write multiple method calls for an object like a list of steps, and only include a semicolon at the end of the last method calls. 

*   What is scoped selection?
    Instead of searching the entire DOM, the find method only searches the descendants of the checklist that's been referenced beforehand.

*   Why do we NOT want to have duplicate orders? 
    Because we're using a simple key/value storage method for our data, any duplicate order will overwrite the pre-existing one.

*   What is event delegation?
    It is a process that allows us to attach a single event listener to a single parent element, and it will trigger for all descendants matching a selector.


## WEEK 10
*   Why use bootstrap?
    It's a template library for UI that helps reducing the time we may spend on designing what our site/application looks like.

*   Why you might not want to use bootstrap?
    Since everyone is using bootstrap, with out some customizations, your UI will look the same like everyone else's (aka lack of originality).

*   What does the container class do?
    It acts as a wrapper for all of the contents that need to adapt to the size of the viewport (responsive design).

*   What is the benefit of sections vs div?
    <div> has no semantic meaning while <section> does. <section> can divide the whole page into many sections where each can contain other pieces of the whole page's UI. 

*   What does the form-control class do?
    It provides layout and typography styling for form elements.

*   How will the name attribute be used in the module?
    It's the "key idendifier" that comes as a pair with the input value, and both will be sent to a server when the form is submitted. 

*   What does coffeeOrder do in the form-group?
    It's an id that links the label with the input box.

*   What functionality does the autofocus add to the form-group?
    As its name implies, it sets the focus to the input box as soon as the page is loaded so users won't have to click on the box to start typing.

*   Why is value="" used in the second form-group input?
    To make sure that the field is blank when the page is loaded.

*   What functionality does placeholder add to the javascript?
    It acts as a suggestion so users know what they should put in the field.

*   How are radio button marked up in bootstrap vs non-bootstrap?
    It's just the difference in styling.

*   Why use a dropdown menu vs radio buttons?
    Since there may be too many options, radio buttons will make the UI look too clustered. In this case, a dropdown menu is a better choice.

*   Why are we using button instead of input for the submit and reset?
    To take advantage of the bootstrap design.

*   How many classes are using on the submit and rest buttons and why?
    There are 2 classes, one is to define that the item is a button, the other one is to specify what kind of button it is (there are several other button designs like info, danger, etc. and each of them has a different color).

*   What is POST and how does it differ from GET?
    When browser needs to send info to server, it sends a POST request. When browser needs info from the server, it sends a GET request.

*   What does the FormHandler module serve in CoffeeRun?
    It will prevent browser from sending info of the form to a server. Instead, it'll send data to a Truck instance via the createOrder method.

*   What is jQuery? Why are we using it here? Has it changed the JS Language?
    It's a popular open-source JS library for general purpose. It provides shorthands for DOM manipulation, element creation, server communication and event handling. 

*   How are we implementing jQuery into this module and why use $?
    By using the variable $. It's used because the dollar sign is unlikely to be used in any other code in a project.

*   How is FormHandler reusable?
    The FormHandler constructor will be passed a selector matching the <form> element in index.html.

*   How does document.querySelectorAll differ from $?
    When using $, it returns a single object, and the object contains references to the selected element, instead of returning references to DOM elements.

*   Is this.formElement the same as this.$formElement?
    Yes. The use of the prefix is just a common convention.

*   What does it mean to decrease trips to the DOM?
    To make the page loads faster by reducing unnecessary requests.

*   How does jQuery implement eventListeners?
    Using the "on" method. It's similar to the old addEventListener but provides more conveniences.

*   What does serilizeArray do?
    Getting values from the form and put them into an array.

*   Explain in your own words the output of console output after submitting the form.
    After submitting the form, the data from the form will be collected and presented as an array, with each input as an object within the array.

*   What does adding the forEach and related object referencing do to the form console output?
    As each object is called back, the forEach will use the object's name and value to create a new property on data object.

*   Why pass a fn (function) to the addSubmitHandler method?
    To pass the object from form data to the Truck instance without having to create the Truck instance right there.

*   What does fn(data) do?
    The fn() function will be called whenever the Submit button is clicked. It'll then receive the data input from users who have filled out the form.

## WEEK 9
*   Why separate Truck orders method from DataStore add method?
    Because Truck orders method doesn't need to worry about storing data. It only needs to take care of dealing with orders while DataStore deals with storing data.
    
*   Why do you need to check to see if App has been created?
    To prevent the instance from being undefined.
    
*   How much of the truck module code were you able to do without looking at the example?
    Not much. I still need to go step-by-step along with the book.
    
*   What is order.emailAddress?
    It's the key data that should be unique to each order.
    
*   What does the truck module know about the datastore module?
    The truck module doesn't know, and doesn't need to know, anything about the datastore module.
    
*   Add a console.log for the a new truck instance.
    
*   Why does DataStore console.log show up before Truck?
    In main.js, DataStore is a parameter of Truck, so it is run before Truck.

*   What primative type is being passed into the createOrder method?
    A string.
    
*   Were you surprised by the console.log output from myTruck.db? How does it differ from the output of just myTruck?
    myTruck.db only includes an object, while myTruck also includes the truckId as well.
    
*   Why are we not naming the DataBase when creating a new Truck instance?
    Because there's no need to do so.
    
*   Describe in your own words what you learned from the debugging section, make sure to include the bind concept and callbacks.
    In order to debug, we must identify what has caused it. We can do so by inspecting the error (using browser's inspector tool), isolate the line with the bug, then breakdown its components into smaller parts until we can locate exactly which one property is having a problem.
    Callback function is passed to another function as a parameter and is invoked inside the other function.
    Bind() creates a new function that will have 'this' set to the first parameter passed to bind().
    
*   Why is the call back function on the customerIdArray anonymous?
    Because it is stored in a variable and is called using variable name, so it doesn't need a name for itself.
    
*   Does does instantiate mean?
    Create new instance.
    
*   In the main.js how is the myTruck instaniate different than on the dev console?
    With main.js, there's no need to include the prefixes 'Truck' or 'DataStore' with App.
    
*   Do you answering these questions feel this helps you understand?
    Yes. Although some parts aren't clear in enough in the book, I can still look up on the web to have better understanding.



## WEEK 8
*   What does ES5 not support?
    ES5 does not have a formal way to organize code into self-contained modules.

*   Do you understand the difference and similarlies between the initalize function and an IIFE?
    They are similar in the aspect that they're both function. IIFE are function expressions that are invoked as soon as the function is declared. IIFE is only used once and saves the trouble of creating extra global variables or functions.

*   What is NameSpace (in your own words)
    Namespace is like a family registration where modules (each family member) register themselves for later use. Each individual module will be uniquely identified within the namespace.
    
*   How do IIFE's except arguments?
    I don't understand this question.
    
*   READ 167 and 168 very carefully!!! Do you understand what they did there?
    As I've mentioned before, I'm using the ebook Kindle version and they don't have page numbers for it, so I'm lost on what I need to read carefully here.
    
*   Create new folder at same level as ottergram and add link into your root index.html
    
*   Using objects to organize modules and make them available to other app code.
    
*   3 steps for attaching module code to namespace?
    1. Get a reference to the namespace, if it exists.
    2. Create the module code.
    3. Attach module code to namespace.
    
*   Other languages might use a what for function constructors?
    Other languages may use a class.
    
*   What are Object factories?
    Functions can act like object factories.

*   Why is DataStore capitalized?
    DataStore is a constructor, and it is a naming convention in JavaScript (for constructors).
    
*   What does New do?
    It helps differentiating a constructor from a normal function by telling JavaScript to create a new object
    
*   What is an instance?
    Instance is an object created by a constructor.
    
*   'email' is a propery of what?
    It is a property of the two instances created by DataStore (dsOne and dsTwo).
    
*   What is a object literal?
    It is a group of data and values, stored inside curly brackets {}.
    
*   Why is it not good software design?
    Because it requires any module that wants to use an instance to be specifically coded for using it, and in a public environment, the secret of how the codes work may be revealed.
    
*   What does prototype do?
    The 'prototype' property allows other instances created by the constructor to access whatever is assigned to it.
    
*   Functions are also?
    Functions are also objects.
    
*   Why do property names need to be unique?
    They need to be unique to avoid getting overwritten when storing new values.
    
*   Take printscreen of command line work!
    http://prntscr.com/gtw7zi 
    
*   Bottom line can you explain the code you wrote in this section?
    Yes.