'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts');

var ChoiceOfPartsNode = function (_NonTerminalNode) {
      _inherits(ChoiceOfPartsNode, _NonTerminalNode);

      function ChoiceOfPartsNode() {
            _classCallCheck(this, ChoiceOfPartsNode);

            return _possibleConstructorReturn(this, (ChoiceOfPartsNode.__proto__ || Object.getPrototypeOf(ChoiceOfPartsNode)).apply(this, arguments));
      }

      _createClass(ChoiceOfPartsNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace, lookAhead) {
                  var childNodes = this.getChildNodes(),
                      nodes = childNodes.slice(),
                      part = ChoiceOfPartsPart.fromNodes(nodes);

                  return part;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(ChoiceOfPartsNode, ruleName, childNodes);
            }
      }]);

      return ChoiceOfPartsNode;
}(NonTerminalNode);

module.exports = ChoiceOfPartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJDaG9pY2VPZlBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNOb2RlIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsImZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLG1DQUFSLENBRDFCOztJQUdNRSxpQjs7Ozs7Ozs7Ozs7eUNBQ1NDLFksRUFBY0MsUyxFQUFXO0FBQ3BDLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsUUFBUUYsV0FBV0csS0FBWCxFQURkO0FBQUEsc0JBRU1DLE9BQU9SLGtCQUFrQlMsU0FBbEIsQ0FBNEJILEtBQTVCLENBRmI7O0FBSUEseUJBQU9FLElBQVA7QUFDRDs7O3NEQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSx5QkFBT04sZ0JBQWdCYSx5QkFBaEIsQ0FBMENWLGlCQUExQyxFQUE2RFMsUUFBN0QsRUFBdUVOLFVBQXZFLENBQVA7QUFBNEY7Ozs7RUFUdkhOLGU7O0FBWWhDYyxPQUFPQyxPQUFQLEdBQWlCWixpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIENob2ljZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzJyk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2hvaWNlT2ZQYXJ0c05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNOb2RlO1xuIl19