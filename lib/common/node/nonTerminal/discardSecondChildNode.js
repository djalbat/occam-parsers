'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var discardSecond = arrayUtilities.discardSecond;

var DiscardSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardSecondChildNode, _NonTerminalNode);

  function DiscardSecondChildNode() {
    _classCallCheck(this, DiscardSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(DiscardSecondChildNode, ruleName, childNodes);

      return discardSecondChildNode;
    }
  }]);

  return DiscardSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardSecondChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkU2Vjb25kQ2hpbGROb2RlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImRpc2NhcmRTZWNvbmQiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJkaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLDBCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGdCQUFSLENBRHhCOztJQUdRRSxhLEdBQWtCSCxjLENBQWxCRyxhOztJQUVGQyxzQjs7Ozs7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUMzQyxVQUFNQyxhQUFhSixjQUFjRSxLQUFkLENBQW5CO0FBQUEsVUFDTUcseUJBQXlCTixnQkFBZ0JPLHlCQUFoQixDQUEwQ0wsc0JBQTFDLEVBQWtFRSxRQUFsRSxFQUE0RUMsVUFBNUUsQ0FEL0I7O0FBR0EsYUFBT0Msc0JBQVA7QUFDRDs7OztFQU5rQ04sZTs7QUFTckNRLE9BQU9DLE9BQVAsR0FBaUJQLHNCQUFqQiIsImZpbGUiOiJkaXNjYXJkU2Vjb25kQ2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBkaXNjYXJkU2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgRGlzY2FyZFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgICAgZGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBkaXNjYXJkU2Vjb25kQ2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZFNlY29uZENoaWxkTm9kZTtcbiJdfQ==