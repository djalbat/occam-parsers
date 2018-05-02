'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var keepSecond = arrayUtilities.keepSecond;

var KeepSecondChildNode = function (_NonTerminalNode) {
  _inherits(KeepSecondChildNode, _NonTerminalNode);

  function KeepSecondChildNode() {
    _classCallCheck(this, KeepSecondChildNode);

    return _possibleConstructorReturn(this, (KeepSecondChildNode.__proto__ || Object.getPrototypeOf(KeepSecondChildNode)).apply(this, arguments));
  }

  _createClass(KeepSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepSecondChildNode, ruleName, childNodes);

      return keepSecondChildNode;
    }
  }]);

  return KeepSecondChildNode;
}(NonTerminalNode);

module.exports = KeepSecondChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwU2Vjb25kQ2hpbGROb2RlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImtlZXBTZWNvbmQiLCJLZWVwU2Vjb25kQ2hpbGROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwU2Vjb25kQ2hpbGROb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLDBCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGdCQUFSLENBRHhCOztJQUdRRSxVLEdBQWVILGMsQ0FBZkcsVTs7SUFFRkMsbUI7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTUMsYUFBYUosV0FBV0UsS0FBWCxDQUFuQjtBQUFBLFVBQ01HLHNCQUFzQk4sZ0JBQWdCTyx5QkFBaEIsQ0FBMENMLG1CQUExQyxFQUErREUsUUFBL0QsRUFBeUVDLFVBQXpFLENBRDVCOztBQUdBLGFBQU9DLG1CQUFQO0FBQ0Q7Ozs7RUFOK0JOLGU7O0FBU2xDUSxPQUFPQyxPQUFQLEdBQWlCUCxtQkFBakIiLCJmaWxlIjoia2VlcFNlY29uZENoaWxkTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsga2VlcFNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEtlZXBTZWNvbmRDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGtlZXBTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGtlZXBTZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhLZWVwU2Vjb25kQ2hpbGROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4ga2VlcFNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtlZXBTZWNvbmRDaGlsZE5vZGU7XG4iXX0=