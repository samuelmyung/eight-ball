"use strict";

/** Returns random element from an array */
function choice(items) {
  const chosen = Math.floor(Math.random() * items.length);
  return items[chosen];
}

export default choice