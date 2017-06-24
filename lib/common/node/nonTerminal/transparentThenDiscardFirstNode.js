'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../util/array');

var TransparentThenDiscardFirstNode = function () {
  function TransparentThenDiscardFirstNode() {
    _classCallCheck(this, TransparentThenDiscardFirstNode);
  }

  _createClass(TransparentThenDiscardFirstNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = arrayUtil.discardFirst(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardFirstNode;
}();

module.exports = TransparentThenDiscardFirstNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImRpc2NhcmRGaXJzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCOztJQUVNQywrQjs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDRCxjQUFRSCxVQUFVSyxZQUFWLENBQXVCRixLQUF2QixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLCtCQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZpcnN0KG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGU7XG4iXX0=