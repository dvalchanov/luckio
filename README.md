# Lucky

Get lucky in a certain percentage of your tries.

## Example

If you are lucky it returns `true`, if not `false`.

```js
var lucky = require("lucky");
```

On the first call you set the lucky chance, on each consequent call
it checks if the current pick is a lucky one.

```js
// 1% lucky chance & memoizing the first call
var isLucky = lucky(1);
isLucky();

// 50% lucky chance & no memoization
lucky(50)();
```
