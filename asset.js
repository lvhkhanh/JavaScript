function add(list, item) {
  list.push(item);
}

function remove(list, item) {
  list = list.filter(it => it !== item);
}
