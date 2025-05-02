
        console.log(0 == false)
        console.log(0 === false)

        O/p - true
              false

== (Double Equals)
* It checks if the values are the same, but ignores the type.
* So 0 == false becomes:
* JavaScript changes false to 0, and then compares: 0 == 0 → ✅ true

=== (Triple Equals)
* It checks if the values and types are the same.
* 0 is a number, false is a boolean.
* Since the types are different, 0 === false → ❌ false   

-----------------------------------------------------------------------------------------------------

I/p let arr = [1,3,12,19,24,29,33], 
0/p let arr = [1,9,361,841,1089]

* Selecting only odd numbers from the array.
* Squaring those numbers.
 
        const result = arr.filter(num => num % 2 !== 0).map((num)=>num*num )
        console.log(result)

* ✅ !== → Correct. Means "not equal" and checks both value and type.
* ❌ ! == → Wrong. It's invalid syntax and will cause an error.
