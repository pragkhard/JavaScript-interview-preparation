What is Babel? 🚀
===================================================================================
Babel is a JavaScript compiler that helps convert modern JavaScript (ES6+) code into older versions (ES5) so that it can run in older browsers that don’t support new features.

Imagine you write modern JavaScript code using ES6 features like let, const, arrow functions, async/await, etc. But older browsers (like Internet Explorer) don’t support / understand ES6.
So,Babel translates (transpiles) your modern code into older JavaScript (ES5) so it works everywhere.

Vite uses "esbuild" as its default JavaScript bundler and transpiler. esbuild is much faster than Babel because it is written in Go and optimized for speed.