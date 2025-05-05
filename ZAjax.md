*  AJAX stands for Asynchronous JavaScript And XML.(Blocking calls will not happening and DOM rendering will not block)
*  AJAX is not a programming language.rather, it is a set of existing technologies(Asynchronous JavaScript And XML)
*  AJAX is a technique for accessing web servers from a web page.
*  AJAX helps in fetching data Asynchronous without interfering with the existing page.
*  No page reload/refers.
*  Modern website use JSON instead or XML (human readability is less)for data transfer.
Advantages-
*  Read data from a web server - after the page has loaded
*  Update a web page without reloading the page
*  Send data to a web server - in the background.
How it works?
*  AJAX uses XMLHttpRequest object (also called xhr object) to achieve this.
*  Data can be transferred in any format and protocol. (http, https)

Steps-
---------
1. Create the object-
---------------------------
            const xhr = new XMLHttpRequest();

2. open the object  (It have three parameter. Get/Post, from where the data will come, Asynchronous (true) or synchronous )
-------------------------------------------------------------------------------------------
            xhr.open('GET', 'harry.txt', true);
            Get- only fetch the data (only provide the url )
            Post- will give the data along with the url. According to the data it will provide the response.

3.  What to do on progress (optional) When we are using the spinner
---------------------------------------------------------------------
            xhr.onload = function () {
                  console.log(this.responseText);
            }
----------------------------------------------------------------------

                  console.log('ajax tutorial');
                  let fetchBtn = document.getElementById('fetchBtn');
                  fetchBtn.addEventListener('click', buttonClickHandler);
                  function buttonClickHandler() {
                  console.log('You have click the fetchBtn');
                  // Instantiate an xhr object 
                  const xhr = new XMLHttpRequest();

                  // open the object 
                  // xhr.open('GET', 'harry.txt', true);
                  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
                  xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
                  xhr.getResponseHeader('Content-type', 'application/json')
                  // What to do on progress (optional) When we are using the spinner
                  xhr.onprogress = function () {
                        console.log('On Progress');
                  }
                  // Old function (Total ready state is 0,1,2,3,4,5)
                  // Value    State                   Description
                  // 0        UNSENT                  Client has been created.open() not called yet.
                  // 1        OPENED                  open() has been called.
                  // 2        HEADERS_RECEIVED        send() has been called, and headers and status are available.
                  // 3        LOADING Downloading;    responseText holds partial data.
                  // 4        DONE                    The operation is complete.
                  // xhr.onreadystatechange = function () {
                  //     console.log('ready state is', xhr.readyState);
                  // }

                  // What to do when response is ready  (We can check the status)
                  // if (this.status === 200) {
                  xhr.onload = function () {
                        console.log(this.responseText);
                  }
                  // }
                  // else {
                  //     console.log("Some error is occur");
                  // }

                  // send the request 
                  params = `{"name":"test","salary":"123","age":"23"}`
                  xhr.send(params);
                  console.log('We are done');
            }

            let popBtn = document.getElementById('popBtn');
            popBtn.addEventListener('click', popHandler);

            function popHandler() {
                  console.log('You have click the popHandler');
                  // Instantiate an xhr object 
                  const xhr = new XMLHttpRequest();

                  // open the object 
                  xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

                  // What to do when response is ready  (We can check the status)
                  xhr.onload = function () {
                        // if (this.status === 200) {

                        let obj = JSON.parse(this.responseText);
                        console.log(obj);
                        let list = document.getElementById(list);
                        str = "";
                        for (key in obj) {
                        str += `<li>${obj[key].employee_name}</li>`
                        }
                        list.innerHTML = str;
                        // }
                        // else {
                        //     console.log("Some error is occur");
                        // }
                  }
                  xhr.send();
                  console.log('We are done fetching employee');

            }
