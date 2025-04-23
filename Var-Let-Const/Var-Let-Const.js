// VAR, LET & CONST Interview Questions

// =======================================================================================

// Question 1 : Variable Shadowing

//Shadowing let variable by using let 
function test() {
    let a = "Hello";
  
    if (true) {
      let a = "Hi"; // New value assigned
      console.log(a);
    }
  
    console.log(a);
  }
  
  test();
  //O/p - Hi Hello

// =======================================================================================

//Shadowing var variable by using var 
  function test() {
    var a = "Hello";

    if (true) {
    var a = "Hi"; // New value assigned
    console.log(a);
    }

    console.log(a);
}

test();
//O/p - Hi Hi

// =======================================================================================

  // Question 2 :  Illegal Shadowing

  //Legal Shadowing : We can shadow "var" variable by using "let"
  function test() {
    var a = "GeeksforGeeks";

    if (true) {
    let a = "Hi"; // Legal Shadowing
    console.log(a); 
    }
}
test();

// O/p - Hi

// =======================================================================================

// Illegal Shadowing : We can shadow "let" variable by using "var"
function test() {
    let a = "GeeksforGeeks";

    if (true) {
    var a = "Hi"; // Illegal Shadowing
    console.log(a); 
    }
}
test();

// O/p - SyntaxError: Identifier 'a' has already been declared

// =======================================================================================
  function func() {
    var a = "GeeksforGeeks";
    let b = "Namaste";
  
    if (true) {
      let a = "Hi"; // Legal Shadowing
      var b = "Bye"; // Illegal Shadowing
      console.log(a); // It will print 'GeeksforGeeks'
      console.log(b); // It will print error
    }
  }
  test();
//   O/p - SyntaxError: Identifier 'b' has already been declared

// =======================================================================================
  // Question 3 : Hoisting
  
  console.log(a);
  
  var a = 10;

// =======================================================================================

  // Question 4 : Temporal Dead Zone
  
  console.log(a, b, c);
  
  const c = 30;
  let b = 20;
  var a = 10;
  