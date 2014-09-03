/**
 * @api private
 */
module.exports = function walk(el, process, done) {
  var end = done || function(){};
  var nodes

  function next(stop){
    if (nodes === undefined)
      nodes = [].slice.call(el.childNodes);
    if (stop || nodes.length === 0) {
      return end();
    }
    walk(nodes.shift(), process, next);
  }

  process(el, next);
}
