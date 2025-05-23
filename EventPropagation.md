Event Bubbling, Capturing and Stop Propagation, Immediate Propagation & Prevent Default?
------------------------------------------------------------------------------------------

Event bubbling
-----------------
Event bubbling means propagation is done from child element to ancestor(parent) elements in the DOM.

Event capturing (Event Trickling)
-----------------------------------
Event capturing means propagation of event is done from ancestor(parent) elements to child element in the DOM

![alt text](image.png)

Example - 

Event bubbling Problem Statment - 
-----------------------------------

index.html
----------
        <div>
                <button>click</button>
        </div>

script.js-
---------
        let div = document.querySelector('div');
        let button = document.querySelector('button');
        div.addEventListener('click', function () {
        console.log('div');
        });
        button.addEventListener('click', function () {
        console.log('button');
        })

console-
---------   
        button
        div


Event capturing Problem Statment -
---------------------------------

index.html
----------
        <div>
                <button>click</button>
        </div>

script.js-
---------
        let div = document.querySelector('div');
        let button = document.querySelector('button');
        div.addEventListener('click', function () {
        console.log('div');
        }, true);
        button.addEventListener('click', function () {
        console.log('button');
        }, true)

console-
---------           
        div
        button

We can stop Event bubbling and Event capturing by using stop.propogation()
---------------------------------------------------------------------------
script.js-
---------
        let div = document.querySelector('div');
        let button = document.querySelector('button');
        div.addEventListener('click', function () {
        console.log('div');
        });

        button.addEventListener('click', function (event) {
        //stop.propogation()
        event.stopPropagation();
        console.log('button');
        });

console-
---------           
        button

-------------------------------------------------------------------------------------------------

The preventDefault() –
----------------------
The preventDefault() method stops the default action of a selected element from happening by a user.
Example-
* It prevents a link from following the URL so that the browser can't go another page.
* It prevents a submit button from submitting a form.

index.html
----------
        <body>
            <a href="home.html">click here</a>
        </body>

script.js-
---------
        let a = document.querySelector('a');

        a.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button');
        });

-------------------------------------------------------------------------------------------------
Event Deligation -
-------------------
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.



