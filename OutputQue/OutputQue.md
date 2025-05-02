
        console.log(0 == false)
        console.log(0 === false)

        O/p - true
              false

== (Double Equals)
It checks if the values are the same, but ignores the type.
So 0 == false becomes:
JavaScript changes false to 0, and then compares: 0 == 0 → ✅ true

=== (Triple Equals)
It checks if the values and types are the same.
0 is a number, false is a boolean.
Since the types are different, 0 === false → ❌ false              