Given the following array of user objects:

      const data = [
        { username: "jamesdevid56", password: "Admin@345", intigrity: null },
        { username: "admin", password: "secrete", intigrity: null },
        { username: "praneetkumar", password: "ABC@*73", intigrity: null },
        { username: "divyansh56", password: "D.56@shDivyansh", intigrity: null },
      ];

Update the intigrity property for each user based on the following validation rules:

Username Policy-

* Username length must be between 8 and 15 characters.
* Username must start with an alphabet.
* Username must end with a digit.

Password Policy- 

* Password length must be at least 8 characters.
* Password must contain:
* At least one uppercase letter (A-Z)
* At least one lowercase letter (a-z)
* At least one digit (0-9)
* At least one special character

Requirement-
* intigrity = false → Username and Password are valid.
* intigrity = true → Username or Password is invalid.

              const data = [
                { username: "jamesdevid56", password: "Admin@345", intigrity: null },
                { username: "admin", password: "secrete", intigrity: null },
                { username: "praneetkumar", password: "ABC@*73", intigrity: null },
                { username: "divyansh56", password: "D.56@shDivyansh", intigrity: null },
            ];
            
            const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{6,13}\d$/;
            const passwordRegex =
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
            
            
            var result = data.map((item, index) => {
            
                if (usernameRegex.test(item.username) && passwordRegex.test(item.password)) {
                    return { ...item, intigrity: true }
                }
                else {
                    return { ...item, intigrity: false }
                }
            });
            
            console.log(result);
