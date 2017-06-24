'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../util/array');

var TransparentThenDiscardSecondNode = function () {
  function TransparentThenDiscardSecondNode() {
    _classCallCheck(this, TransparentThenDiscardSecondNode);
  }

  _createClass(TransparentThenDiscardSecondNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = arrayUtil.discardSecond(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardSecondNode;
}();

module.exports = TransparentThenDiscardSecondNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiVHJhbnNwYXJlbnRUaGVuRGlzY2FyZFNlY29uZE5vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwiZGlzY2FyZFNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCOztJQUVNQyxnQzs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDRCxjQUFRSCxVQUFVSyxhQUFWLENBQXdCRixLQUF4QixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLGdDQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkU2Vjb25kKG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRTZWNvbmROb2RlO1xuIl19