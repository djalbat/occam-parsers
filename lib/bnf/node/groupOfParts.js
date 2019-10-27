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
            value: function generatePart(nonWhitespace, lookAhead) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJHcm91cE9mUGFydHNOb2RlIiwibm9uV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJmcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4QjtBQUFBLElBQ01DLG1CQUFtQkQsUUFBUSxrQ0FBUixDQUR6Qjs7SUFHTUUsZ0I7Ozs7Ozs7Ozs7O3lDQUNTQyxhLEVBQWVDLFMsRUFBVztBQUNyQyxzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLFFBQVFGLFdBQVdHLEtBQVgsRUFEZDtBQUFBLHNCQUVNQyxPQUFPUixpQkFBaUJTLFNBQWpCLENBQTJCSCxLQUEzQixDQUZiOztBQUlBLHlCQUFPRSxJQUFQO0FBQ0Q7OztzREFFZ0NFLFEsRUFBVU4sVSxFQUFZO0FBQUUseUJBQU9OLGdCQUFnQmEseUJBQWhCLENBQTBDVixnQkFBMUMsRUFBNERTLFFBQTVELEVBQXNFTixVQUF0RSxDQUFQO0FBQTJGOzs7O0VBVHZITixlOztBQVkvQmMsT0FBT0MsT0FBUCxHQUFpQlosZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL2dyb3VwT2ZQYXJ0cycpO1xuXG5jbGFzcyBHcm91cE9mUGFydHNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vbldoaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gR3JvdXBPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoR3JvdXBPZlBhcnRzTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzTm9kZTtcbiJdfQ==