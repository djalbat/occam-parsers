'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../../utilities/array');

var keepFirst = arrayUtilities.keepFirst;

var TransparentThenKeepFirstNode = function () {
  function TransparentThenKeepFirstNode() {
    _classCallCheck(this, TransparentThenKeepFirstNode);
  }

  _createClass(TransparentThenKeepFirstNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = keepFirst(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepFirstNode;
}();

module.exports = TransparentThenKeepFirstNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwRmlyc3ROb2RlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsImtlZXBGaXJzdCIsIlRyYW5zcGFyZW50VGhlbktlZXBGaXJzdE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2Qjs7SUFFUUMsUyxHQUFjRixjLENBQWRFLFM7O0lBRUZDLDRCOzs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0NELGNBQVFGLFVBQVVFLEtBQVYsQ0FBUjs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCSiw0QkFBakIiLCJmaWxlIjoidHJhbnNwYXJlbnRUaGVuS2VlcEZpcnN0Tm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBrZWVwRmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5LZWVwRmlyc3ROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIG5vZGVzID0ga2VlcEZpcnN0KG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbktlZXBGaXJzdE5vZGU7XG4iXX0=