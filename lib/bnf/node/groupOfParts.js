'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal'),
    GroupOfPartsPart = require('../part/nonTerminal/groupOfParts');

var GroupOfPartsNode = function (_NonTerminalNode) {
      _inherits(GroupOfPartsNode, _NonTerminalNode);

      function GroupOfPartsNode() {
            _classCallCheck(this, GroupOfPartsNode);

            return _possibleConstructorReturn(this, (GroupOfPartsNode.__proto__ || Object.getPrototypeOf(GroupOfPartsNode)).apply(this, arguments));
      }

      _createClass(GroupOfPartsNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace, lookAhead) {
                  var childNodes = this.getChildNodes(),
                      nodes = childNodes.slice(),
                      part = GroupOfPartsPart.fromNodes(nodes);

                  return part;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(GroupOfPartsNode, ruleName, childNodes);
            }
      }]);

      return GroupOfPartsNode;
}(NonTerminalNode);

module.exports = GroupOfPartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJHcm91cE9mUGFydHNOb2RlIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsImZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCO0FBQUEsSUFDTUMsbUJBQW1CRCxRQUFRLGtDQUFSLENBRHpCOztJQUdNRSxnQjs7Ozs7Ozs7Ozs7eUNBQ1NDLFksRUFBY0MsUyxFQUFXO0FBQ3BDLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsUUFBUUYsV0FBV0csS0FBWCxFQURkO0FBQUEsc0JBRU1DLE9BQU9SLGlCQUFpQlMsU0FBakIsQ0FBMkJILEtBQTNCLENBRmI7O0FBSUEseUJBQU9FLElBQVA7QUFDRDs7O3NEQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSx5QkFBT04sZ0JBQWdCYSx5QkFBaEIsQ0FBMENWLGdCQUExQyxFQUE0RFMsUUFBNUQsRUFBc0VOLFVBQXRFLENBQVA7QUFBMkY7Ozs7RUFUdkhOLGU7O0FBWS9CYyxPQUFPQyxPQUFQLEdBQWlCWixnQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvZ3JvdXBPZlBhcnRzJyk7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKEdyb3VwT2ZQYXJ0c05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c05vZGU7XG4iXX0=