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

1. Session Storage

Data is persistent only for the particular session.
Or It stores the data only for one session. The data is deleted when the user closes the specific browser tab.

Example:
Suppose a user is visiting a web app as soon as the visiting web app session started and the data which is stored in Session Storage only be persist till the user is active in the web browser window. Once the user closes the tab or window of the browser, the data is lost in the session storage— this is how session storage works.

Unlike cookies, Session Storage data is not been send to the server by making the network request call. or we can say that Session Storage are not sent to server wit each request.