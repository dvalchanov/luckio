[![NPM version](https://badge.fury.io/js/luckio.svg)](https://badge.fury.io/js/luckio.svg)

# Luckio

Get lucky in a certain percentage of your tries.

## Example

If you are lucky it returns `true`, if not `false`.
On the first call you set the lucky chance, on each consequent call
it checks if the current pick is a lucky one.

```js
var luckio = require("luckio");

// 1% lucky chance & memoizing the first call
var isLucky = luckio(1);
isLucky();

// 50% lucky chance & no memoization
luckio(50)();
```
