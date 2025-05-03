String -
==========
 Reverse string -
 ------------------

        var name = "Hello Pragati, how are you?";

        var reversedSentence   = name.split('').reverse().join('')
        var reversedWord  = name.split(' ').reverse().join(' ')
        console.log(reversedSentence )
        console.log(reversedWord )

In summary, split('') treats spaces as characters and reverses them along with the rest of the string, while split(' ') uses spaces to separate words and reverses the order of the words without affecting the spaces

Remove duplicate characters from the string -
---------------------------------------------

        var name = "Hello Pragati, how are you?";
        var uniqueChars = [...new Set(name)].join('');
        console.log(uniqueChars);

Array -
=========
