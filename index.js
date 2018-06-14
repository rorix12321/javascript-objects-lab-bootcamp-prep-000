var recipes = {};
<<<<<<< HEAD
function updateObjectWithKeyAndValue(object,key,value) {
  var newrecipes = Object.assign({}, object, {[key]: value});
  return newrecipes;
}
=======

>>>>>>> 779b0ad1f1428f1c8674fa12bb7e9131d3bd84be
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object;
}
<<<<<<< HEAD
function deleteFromObjectByKey(object,key) {
  var newrecipes = Object.assign({}, object)
  delete newrecipes[key];
  return newrecipes;
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}
=======
>>>>>>> 779b0ad1f1428f1c8674fa12bb7e9131d3bd84be
