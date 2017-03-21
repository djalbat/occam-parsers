'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../arrayUtil');

var TransparentThenDiscardSecondNode = function () {
  function TransparentThenDiscardSecondNode() {
    _classCallCheck(this, TransparentThenDiscardSecondNode);
  }

  _createClass(TransparentThenDiscardSecondNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      nodes = arrayUtil.discardSecond(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardSecondNode;
}();

module.exports = TransparentThenDiscardSecondNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJUcmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJkaXNjYXJkU2Vjb25kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsb0JBQVIsQ0FBbEI7O0lBRU1DLGdDOzs7Ozs7OytDQUM4QkMsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZERCxjQUFRSCxVQUFVSyxhQUFWLENBQXdCRixLQUF4QixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLGdDQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi9hcnJheVV0aWwnKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZFNlY29uZE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZFNlY29uZChub2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFRoZW5EaXNjYXJkU2Vjb25kTm9kZTtcbiJdfQ==