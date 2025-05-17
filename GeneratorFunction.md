Generator function
====================

A generator function handle the async operation, it basically allows to pause and resume its execution. producing multiple values on demand.

yield: Pauses execution and returns a value.

next(): Resumes execution and returns the next yielded value.

        function* numberGenerator() {
        yield 1;
        yield 2;
        yield 3;
        }
        const gen = numberGenerator();
        console.log(gen.next().value); // 1
        console.log(gen.next().value); // 2
        console.log(gen.next().value); // 3
        console.log(gen.next().value); // undefined (no more yields)


