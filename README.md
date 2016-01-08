[![NPM version](https://badge.fury.io/js/luckio.svg)](https://badge.fury.io/js/luckio.svg)

# Luckio

A lucky chance getter

The purpose of this library is to act like a lottery, where you have a certain
chance to get lucky. You set the chance percentage to get lucky and then receive
`false` if you are not or `true` if you are.

## Example

```js
var luckio = require("luckio");
```

`luckio` returns a lucky function when called the first time, which can then be
used on each turn.

An example of 1% chance to pick `true`:

```js
var isLucky = luckio(1);
isLucky(); // false
isLucky(); // false
.
.
.
// At some point:
isLucky(); // true
.
.
.
isLucky(); // false
```

You can also make the second call right away and not assign the function.

An example of 50% chance to pick `true`:

```js
luckio(50)(); // false
luckio(50)(); // true
```
