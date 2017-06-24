'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var KeepSecondChildNode = function (_NonTerminalNode) {
  _inherits(KeepSecondChildNode, _NonTerminalNode);

  function KeepSecondChildNode() {
    _classCallCheck(this, KeepSecondChildNode);

    return _possibleConstructorReturn(this, (KeepSecondChildNode.__proto__ || Object.getPrototypeOf(KeepSecondChildNode)).apply(this, arguments));
  }

  _createClass(KeepSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, KeepSecondChildNode);

      return keepSecondChildNode;
    }
  }]);

  return KeepSecondChildNode;
}(NonTerminalNode);

module.exports = KeepSecondChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwU2Vjb25kQ2hpbGROb2RlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJLZWVwU2Vjb25kQ2hpbGROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwU2Vjb25kIiwia2VlcFNlY29uZENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEscUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsZ0JBQVIsQ0FEeEI7O0lBR01FLG1COzs7Ozs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDLFVBQU1DLGFBQWFOLFVBQVVPLFVBQVYsQ0FBcUJILEtBQXJCLENBQW5CO0FBQUEsVUFDTUksc0JBQXNCTixnQkFBZ0JPLHlCQUFoQixDQUEwQ0osUUFBMUMsRUFBb0RDLFVBQXBELEVBQWdFSCxtQkFBaEUsQ0FENUI7O0FBR0EsYUFBT0ssbUJBQVA7QUFDRDs7OztFQU4rQk4sZTs7QUFTbENRLE9BQU9DLE9BQVAsR0FBaUJSLG1CQUFqQiIsImZpbGUiOiJrZWVwU2Vjb25kQ2hpbGROb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBLZWVwU2Vjb25kQ2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwua2VlcFNlY29uZChub2RlcyksXG4gICAgICAgICAga2VlcFNlY29uZENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBLZWVwU2Vjb25kQ2hpbGROb2RlKTtcblxuICAgIHJldHVybiBrZWVwU2Vjb25kQ2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2VlcFNlY29uZENoaWxkTm9kZTtcbiJdfQ==