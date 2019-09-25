'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../../../common/node/nonTerminal');

var first = arrayUtilities.first;

var TerminalPartNode = function (_NonTerminalNode) {
      _inherits(TerminalPartNode, _NonTerminalNode);

      function TerminalPartNode() {
            _classCallCheck(this, TerminalPartNode);

            return _possibleConstructorReturn(this, (TerminalPartNode.__proto__ || Object.getPrototypeOf(TerminalPartNode)).apply(this, arguments));
      }

      _createClass(TerminalPartNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace, lookAhead) {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      node = firstChildNode,
                      ///
                  part = node.generatePart(noWhitespace, lookAhead);

                  return part;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(TerminalPartNode, ruleName, childNodes);
            }
      }]);

      return TerminalPartNode;
}(NonTerminalNode);

module.exports = TerminalPartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0L3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiVGVybWluYWxQYXJ0Tm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJub2RlIiwicGFydCIsImdlbmVyYXRlUGFydCIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLDBCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLGtDQUFSLENBRHhCOztJQUdRRSxLLEdBQVVILGMsQ0FBVkcsSzs7SUFFRkMsZ0I7Ozs7Ozs7Ozs7O3lDQUNTQyxZLEVBQWNDLFMsRUFBVztBQUNwQyxzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQk4sTUFBTUksVUFBTixDQUR2QjtBQUFBLHNCQUVNRyxPQUFPRCxjQUZiO0FBQUEsc0JBRThCO0FBQ3hCRSx5QkFBT0QsS0FBS0UsWUFBTCxDQUFrQlAsWUFBbEIsRUFBZ0NDLFNBQWhDLENBSGI7O0FBS0EseUJBQU9LLElBQVA7QUFDRDs7O3NEQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSx5QkFBT0wsZ0JBQWdCWSx5QkFBaEIsQ0FBMENWLGdCQUExQyxFQUE0RFMsUUFBNUQsRUFBc0VOLFVBQXRFLENBQVA7QUFBMkY7Ozs7RUFWdkhMLGU7O0FBYS9CYSxPQUFPQyxPQUFQLEdBQWlCWixnQkFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVGVybWluYWxQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UsIGxvb2tBaGVhZClcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFRlcm1pbmFsUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydE5vZGU7XG4iXX0=