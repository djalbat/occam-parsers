'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../../../utilities/array');

var discardSecond = arrayUtilities.discardSecond;

var TransparentThenDiscardSecondNode = function () {
  function TransparentThenDiscardSecondNode() {
    _classCallCheck(this, TransparentThenDiscardSecondNode);
  }

  _createClass(TransparentThenDiscardSecondNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = discardSecond(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardSecondNode;
}();

module.exports = TransparentThenDiscardSecondNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJkaXNjYXJkU2Vjb25kIiwiVHJhbnNwYXJlbnRUaGVuRGlzY2FyZFNlY29uZE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSwwQkFBUixDQUF2Qjs7SUFFUUMsYSxHQUFrQkYsYyxDQUFsQkUsYTs7SUFFRkMsZ0M7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUMzQ0QsY0FBUUYsY0FBY0UsS0FBZCxDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJKLGdDQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBkaXNjYXJkU2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZFNlY29uZE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgbm9kZXMgPSBkaXNjYXJkU2Vjb25kKG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRTZWNvbmROb2RlO1xuIl19