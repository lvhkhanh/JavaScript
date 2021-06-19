function add(cart, item) {
  // TODO: add item to cart
  cart.push(item);
}

function remove(cart, item) {
  // TODO: remove item from 
  cart = cart.filter(it => it !== item);
}
