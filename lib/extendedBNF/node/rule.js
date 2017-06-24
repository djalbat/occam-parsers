'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleNode = function (_NonTerminalNode) {
  _inherits(RuleNode, _NonTerminalNode);

  function RuleNode() {
    _classCallCheck(this, RuleNode);

    return _possibleConstructorReturn(this, (RuleNode.__proto__ || Object.getPrototypeOf(RuleNode)).apply(this, arguments));
  }

  _createClass(RuleNode, [{
    key: 'generateRule',
    value: function generateRule(Rule, Definition, mappings) {
      var name = this.getName(),
          definitions = this.generateDefinitions(Definition),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ? mappings[name] : NonTerminalNode,
          rule = new Rule(name, definitions, Node);

      return rule;
    }
  }, {
    key: 'getName',
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          ruleNameNode = firstChildNode,
          ///
      ruleNameNodeRuleName = ruleNameNode.getRuleName(),
          name = ruleNameNodeRuleName;

      return name;
    }
  }, {
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition) {
      var childNodes = this.getChildNodes(),
          lastButOneChildNode = arrayUtil.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,
          ///
      definitions = definitionsNode.generateDefinitions(Definition);

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, RuleNode);

      return ruleNode;
    }
  }]);

  return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3J1bGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJ1bGVOb2RlIiwiUnVsZSIsIkRlZmluaXRpb24iLCJtYXBwaW5ncyIsIm5hbWUiLCJnZXROYW1lIiwiZGVmaW5pdGlvbnMiLCJnZW5lcmF0ZURlZmluaXRpb25zIiwibWFwcGluZ3NOb2RlRXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJOb2RlIiwicnVsZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInJ1bGVOYW1lTm9kZSIsInJ1bGVOYW1lTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsYXN0QnV0T25lQ2hpbGROb2RlIiwibGFzdEJ1dE9uZSIsImRlZmluaXRpb25zTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJkaXNjYXJkU2Vjb25kIiwicnVsZU5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxROzs7Ozs7Ozs7OztpQ0FDU0MsSSxFQUFNQyxVLEVBQVlDLFEsRUFBVTtBQUN2QyxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGNBQWMsS0FBS0MsbUJBQUwsQ0FBeUJMLFVBQXpCLENBRHBCO0FBQUEsVUFFTU0scUJBQXFCTCxTQUFTTSxjQUFULENBQXdCTCxJQUF4QixDQUYzQjtBQUFBLFVBR01NLE9BQU9GLHFCQUNFTCxTQUFTQyxJQUFULENBREYsR0FFSUwsZUFMakI7QUFBQSxVQU1NWSxPQUFPLElBQUlWLElBQUosQ0FBU0csSUFBVCxFQUFlRSxXQUFmLEVBQTRCSSxJQUE1QixDQU5iOztBQVFBLGFBQU9DLElBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCakIsVUFBVWtCLEtBQVYsQ0FBZ0JILFVBQWhCLENBRHZCO0FBQUEsVUFFTUksZUFBZUYsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0csNkJBQXVCRCxhQUFhRSxXQUFiLEVBSDdCO0FBQUEsVUFJTWQsT0FBT2Esb0JBSmI7O0FBTUEsYUFBT2IsSUFBUDtBQUNEOzs7d0NBRW1CRixVLEVBQVk7QUFDOUIsVUFBTVUsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTU0sc0JBQXNCdEIsVUFBVXVCLFVBQVYsQ0FBcUJSLFVBQXJCLENBRDVCO0FBQUEsVUFFTVMsa0JBQWtCRixtQkFGeEI7QUFBQSxVQUU4QztBQUN4Q2Isb0JBQWNlLGdCQUFnQmQsbUJBQWhCLENBQW9DTCxVQUFwQyxDQUhwQjs7QUFLQSxhQUFPSSxXQUFQO0FBQ0Q7Ozt5Q0FFMkJnQixLLEVBQU9DLFEsRUFBVTtBQUMzQyxVQUFNWCxhQUFhZixVQUFVMkIsYUFBVixDQUF3QkYsS0FBeEIsQ0FBbkI7QUFBQSxVQUNNRyxXQUFXMUIsZ0JBQWdCMkIseUJBQWhCLENBQTBDSCxRQUExQyxFQUFvRFgsVUFBcEQsRUFBZ0VaLFFBQWhFLENBRGpCOztBQUdBLGFBQU95QixRQUFQO0FBQ0Q7Ozs7RUFyQ29CMUIsZTs7QUF3Q3ZCNEIsT0FBT0MsT0FBUCxHQUFpQjVCLFFBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFJ1bGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlKFJ1bGUsIERlZmluaXRpb24sIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gdGhpcy5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pLFxuICAgICAgICAgIG1hcHBpbmdzTm9kZUV4aXN0cyA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5nc05vZGVFeGlzdHMgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBydWxlTmFtZU5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTm9kZVJ1bGVOYW1lID0gcnVsZU5hbWVOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lTm9kZVJ1bGVOYW1lO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIFxuICBnZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbGFzdEJ1dE9uZUNoaWxkTm9kZSA9IGFycmF5VXRpbC5sYXN0QnV0T25lKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IGxhc3RCdXRPbmVDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHJ1bGVOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIFJ1bGVOb2RlKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOb2RlO1xuIl19