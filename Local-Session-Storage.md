Difference between Local and Session Storage?
-----------------------------------------------
Session Storage	
-----------------
* Data are persistence only for the particular session.
* It stores the data for only one session. The data is deleted when the user closes the specific browser tab.	

Local Storage
----------------
* In local storage data with no expiration date. The data will not be deleted when the browser is closed and will be available the b=next day, week or year.

------------------------------------------------------------------------------------------------------

The Web Storage API is used by the developer to store some data into the web browser, and its data is nothing but key-'value' pair of strings.

There are two mechanisms to store the data:
* Session Storage
* Local Storage

Session Storage	
-----------------

Data is persistent only for the particular session.

Or 

It stores the data only for one session. The data is deleted when the user closes the specific browser tab.

Example:
Suppose a user is visiting a web app as soon as the visiting web app session started and the data which is stored in Session Storage only be persist till the user is active in the web browser window. Once the user closes the tab or window of the browser, the data is lost in the session storage— this is how session storage works.

* Unlike cookies, Session Storage data is not been send to the server by making the network request call. or we can say that Session Storage are not sent to server wit each request.
* Session Storage has a larger capacity to hold data compared to cookies.
In cookies, we can store around 4KB of data, whereas in Session Storage, we can store up to 5MB of data.

Local Storage
----------------

In Local Storage, data is stored with no expiration date. The data will not be deleted when the browser is closed and will still be available the next day, week, or even year.

Or

It is like Session Storage; the only difference is that it does not clean itself. Even when the user closes the browser, the tab, or shuts down the system — if we come back to the same browser and visit the same website, the data will still persist in the browser. That is the power of Local Storage.

Memory Capacity Local Storage has the highest capacity compared to Session Storage and Cookies.
Memory capacity depends on the type of device and the browser we are using. But in general, Local Storage has a minimum capacity of 5MB, even if we are using the mobile phones.

Advantages:-
------------

* Big companies like Flipkart and Paytm use Local Storage.
* It stores user-specific data in the browser for future use.





