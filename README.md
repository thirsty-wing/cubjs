# CubJS 🐻

Manipulate the DOM with the "just right" amount of abstraction.

## Example

```JavaScript
function sayHello() {
  console.log("Hello CubJS");
}

// query selector on document
const helloButton = select(null, "#hello-button");

// add event listener
listen(helloButton, "click", sayHello);

// remove event listener
unlisten(helloButton, "click", sayHello);

const forest = select(null, "#forest");

// query selector all on forest element
const bears = selectAll(forest, ".bear");

for (let i = 0; i < bears.length; i++) {
  // add class to element
  classify(bears[i], "black");

  // remove class from element
  unclassify(bears[i], "grizzly");
}

const honeypot = select(null, ".honey-pot");

// add an attribute to an element
attribute(honeypot, "data-delicious", "yes");

// remove an attribute from the element
unattribute(honeypot, "data-for-guests");

// create element
const lid = elementCreate("div");
lid.id = "lid";

// insert the lid" before the "honeypot"
beforeBegin(honeypot, lid);

const spoon = elementCreate("div");
spoon.id = "spoon";

// insert "spoon" as first child of "honeypot"
afterBegin(honeypot, spoon);

const rock = elementCreate("div");
rock.id = "rock";

// insert the "rock" as last child of "honeypot"
beforeEnd(honeypot, rock);

const table = elementCreate("div");
table.id = "table";

// insert the "table" after the "honeypot"
afterEnd(honeypot, table);

// what's this doing here?
elementRemove(select("#rock"));
```

## About

CubJS is a love letter ❤️ to C-style imperative programming, exposing functions with familiar names for manipulating the DOM.

In the same way JQuery changes the entire experience of DOM manipulation, this library does the same in a different direction.

### Goals

In order of importance

1. Expose the minimum necessary C-style functions for DOM manipulation
2. Use full words in function names
3. Function calls should be shorter than the functions they replace
4. Use familiar names to maximize recognition

### C-style?

In C, there are no objects to which methods can be attached. Instead, structs are commonly passed as the first argument into functions that then manipulate the struct. Though this may seem backward to some, data is never hidden.

The lack of classes is something many C programmers consider the "just right" 🐻 amount of abstraction.

Although CubJS is not passing raw JavaScript objects around as a first argument, it follows the pattern instead passing elements as the first argument. If you are used to C-style programming, you'll feel right at home.

### Observations

- Since function invocations are smaller than their original counterparts, there is a potential to ship less total JavaScript to the browser if there is a large amount of DOM manipulation.
