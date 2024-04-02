"use strict";

// takes an array, returns random element of array
function choice(items) {
  const chosen = Math.floor(Math.random() * items.length);
  return items[chosen];
}

export default choice