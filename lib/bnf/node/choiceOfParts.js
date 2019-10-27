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
            value: function generatePart(nonWhitespace, lookAhead) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJDaG9pY2VPZlBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNOb2RlIiwibm9uV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJmcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4QjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSxtQ0FBUixDQUQxQjs7SUFHTUUsaUI7Ozs7Ozs7Ozs7O3lDQUNTQyxhLEVBQWVDLFMsRUFBVztBQUNyQyxzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLFFBQVFGLFdBQVdHLEtBQVgsRUFEZDtBQUFBLHNCQUVNQyxPQUFPUixrQkFBa0JTLFNBQWxCLENBQTRCSCxLQUE1QixDQUZiOztBQUlBLHlCQUFPRSxJQUFQO0FBQ0Q7OztzREFFZ0NFLFEsRUFBVU4sVSxFQUFZO0FBQUUseUJBQU9OLGdCQUFnQmEseUJBQWhCLENBQTBDVixpQkFBMUMsRUFBNkRTLFFBQTdELEVBQXVFTixVQUF2RSxDQUFQO0FBQTRGOzs7O0VBVHZITixlOztBQVloQ2MsT0FBT0MsT0FBUCxHQUFpQlosaUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub25XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IENob2ljZU9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDaG9pY2VPZlBhcnRzTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c05vZGU7XG4iXX0=