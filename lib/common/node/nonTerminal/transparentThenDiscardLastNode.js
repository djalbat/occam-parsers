'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../../utilities/array');

var discardLast = arrayUtilities.discardLast;

var TransparentThenDiscardLastNode = function () {
  function TransparentThenDiscardLastNode() {
    _classCallCheck(this, TransparentThenDiscardLastNode);
  }

  _createClass(TransparentThenDiscardLastNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = discardLast(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardLastNode;
}();

module.exports = TransparentThenDiscardLastNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZGlzY2FyZExhc3QiLCJUcmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2Qjs7SUFFUUMsVyxHQUFnQkYsYyxDQUFoQkUsVzs7SUFFRkMsOEI7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUMzQ0QsY0FBUUYsWUFBWUUsS0FBWixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJKLDhCQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZGlzY2FyZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgbm9kZXMgPSBkaXNjYXJkTGFzdChub2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGU7XG4iXX0=