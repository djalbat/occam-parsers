'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../../utilities/array');

var keepLast = arrayUtilities.keepLast;

var TransparentThenKeepLastNode = function () {
  function TransparentThenKeepLastNode() {
    _classCallCheck(this, TransparentThenKeepLastNode);
  }

  _createClass(TransparentThenKeepLastNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = keepLast(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepLastNode;
}();

module.exports = TransparentThenKeepLastNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwTGFzdE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwia2VlcExhc3QiLCJUcmFuc3BhcmVudFRoZW5LZWVwTGFzdE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2Qjs7SUFFUUMsUSxHQUFhRixjLENBQWJFLFE7O0lBRUZDLDJCOzs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0NELGNBQVFGLFNBQVNFLEtBQVQsQ0FBUjs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCSiwyQkFBakIiLCJmaWxlIjoidHJhbnNwYXJlbnRUaGVuS2VlcExhc3ROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGtlZXBMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuS2VlcExhc3ROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIG5vZGVzID0ga2VlcExhc3Qobm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRUaGVuS2VlcExhc3ROb2RlO1xuIl19