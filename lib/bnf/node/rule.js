'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var array = necessary.array;

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
          firstChildNode = array.first(childNodes),
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
          lastButOneChildNode = array.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,
          ///
      definitions = definitionsNode.generateDefinitions(Definition);

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtilities.discardSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

      return ruleNode;
    }
  }]);

  return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsImFycmF5IiwiUnVsZU5vZGUiLCJSdWxlIiwiRGVmaW5pdGlvbiIsIm1hcHBpbmdzIiwibmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdlbmVyYXRlRGVmaW5pdGlvbnMiLCJtYXBwaW5nc05vZGVFeGlzdHMiLCJoYXNPd25Qcm9wZXJ0eSIsIk5vZGUiLCJydWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwicnVsZU5hbWVOb2RlIiwicnVsZU5hbWVOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImxhc3RCdXRPbmVDaGlsZE5vZGUiLCJsYXN0QnV0T25lIiwiZGVmaW5pdGlvbnNOb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImRpc2NhcmRTZWNvbmQiLCJydWxlTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FEeEI7O0lBR1FHLEssR0FBVUosUyxDQUFWSSxLOztJQUVGQyxROzs7Ozs7Ozs7OztpQ0FDU0MsSSxFQUFNQyxVLEVBQVlDLFEsRUFBVTtBQUN2QyxVQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGNBQWMsS0FBS0MsbUJBQUwsQ0FBeUJMLFVBQXpCLENBRHBCO0FBQUEsVUFFTU0scUJBQXFCTCxTQUFTTSxjQUFULENBQXdCTCxJQUF4QixDQUYzQjtBQUFBLFVBR01NLE9BQU9GLHFCQUNFTCxTQUFTQyxJQUFULENBREYsR0FFSU4sZUFMakI7QUFBQSxVQU1NYSxPQUFPLElBQUlWLElBQUosQ0FBU0csSUFBVCxFQUFlRSxXQUFmLEVBQTRCSSxJQUE1QixDQU5iOztBQVFBLGFBQU9DLElBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCZixNQUFNZ0IsS0FBTixDQUFZSCxVQUFaLENBRHZCO0FBQUEsVUFFTUksZUFBZUYsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0csNkJBQXVCRCxhQUFhRSxXQUFiLEVBSDdCO0FBQUEsVUFJTWQsT0FBT2Esb0JBSmI7O0FBTUEsYUFBT2IsSUFBUDtBQUNEOzs7d0NBRW1CRixVLEVBQVk7QUFDOUIsVUFBTVUsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTU0sc0JBQXNCcEIsTUFBTXFCLFVBQU4sQ0FBaUJSLFVBQWpCLENBRDVCO0FBQUEsVUFFTVMsa0JBQWtCRixtQkFGeEI7QUFBQSxVQUU4QztBQUN4Q2Isb0JBQWNlLGdCQUFnQmQsbUJBQWhCLENBQW9DTCxVQUFwQyxDQUhwQjs7QUFLQSxhQUFPSSxXQUFQO0FBQ0Q7Ozt5Q0FFMkJnQixLLEVBQU9DLFEsRUFBVTtBQUMzQyxVQUFNWCxhQUFhZixlQUFlMkIsYUFBZixDQUE2QkYsS0FBN0IsQ0FBbkI7QUFBQSxVQUNNRyxXQUFXM0IsZ0JBQWdCNEIseUJBQWhCLENBQTBDMUIsUUFBMUMsRUFBb0R1QixRQUFwRCxFQUE4RFgsVUFBOUQsQ0FEakI7O0FBR0EsYUFBT2EsUUFBUDtBQUNEOzs7O0VBckNvQjNCLGU7O0FBd0N2QjZCLE9BQU9DLE9BQVAsR0FBaUI1QixRQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeTtcblxuY2xhc3MgUnVsZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVJ1bGUoUnVsZSwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSB0aGlzLmdlbmVyYXRlRGVmaW5pdGlvbnMoRGVmaW5pdGlvbiksXG4gICAgICAgICAgbWFwcGluZ3NOb2RlRXhpc3RzID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzTm9kZUV4aXN0cyA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXkuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcnVsZU5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZU5vZGVSdWxlTmFtZSA9IHJ1bGVOYW1lTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZU5vZGVSdWxlTmFtZTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RCdXRPbmVDaGlsZE5vZGUgPSBhcnJheS5sYXN0QnV0T25lKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlZmluaXRpb25zTm9kZSA9IGxhc3RCdXRPbmVDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zTm9kZS5nZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsaXRpZXMuZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgICAgcnVsZU5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5vZGU7XG4iXX0=