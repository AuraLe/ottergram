## WEEK 9
*   Why separate Truck orders method from DataStore add method?
    Because Truck orders method doesn't need to worry about storing data. It only needs to take care of dealing with orders while DataStore deals with storing data.
    
*   Why do you need to check to see if App has been created?

    
*   How much of the truck module code were you able to do without looking at the example?
    Not much. I still need to go step-by-step along with the book.
    
*   What is order.emailAddress?
    It's the key data that should be unique to each order.
    
*   What does the truck module know about the datastore module?
    
*   Add a console.log for the a new truck instance.
    
*   Why does DataStore console.log show up before Truck?

*   What primative type is being passed into the createOrder method?
    
*   Were you surprised by the console.log output from myTruck.db? How does it differ from the output of just myTruck?
    
*   Why are we not naming the DataBase when creating a new Truck instance?
    
*   Describe in your own words what you learned from the debugging section, make sure to include the bind concept and callbacks.
    
*   Why is the call back function on the customerIdArray anonymous?
    
*   Does does instantiate mean?
    
*   In the main.js how is the myTruck instaniate different than on the dev console?
    
*   Do you answering these questions feel this helps you understand?




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