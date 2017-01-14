'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var IncludeDirectiveNode = function (_NonTerminalNode) {
  _inherits(IncludeDirectiveNode, _NonTerminalNode);

  function IncludeDirectiveNode() {
    _classCallCheck(this, IncludeDirectiveNode);

    return _possibleConstructorReturn(this, (IncludeDirectiveNode.__proto__ || Object.getPrototypeOf(IncludeDirectiveNode)).apply(this, arguments));
  }

  _createClass(IncludeDirectiveNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var thirdNode = third(nodes),
          childNodes = [thirdNode],
          includeDirectiveNode = new IncludeDirectiveNode(childNodes, productionName);

      nodes = [includeDirectiveNode]; ///

      return nodes;
    }
  }]);

  return IncludeDirectiveNode;
}(NonTerminalNode);

module.exports = IncludeDirectiveNode;

function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2luY2x1ZGVEaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkluY2x1ZGVEaXJlY3RpdmVOb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInRoaXJkTm9kZSIsInRoaXJkIiwiY2hpbGROb2RlcyIsImluY2x1ZGVEaXJlY3RpdmVOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGtCQUFrQkMsUUFBUSw0QkFBUixDQUF0Qjs7SUFFTUMsb0I7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdEMsVUFBSUMsWUFBWUMsTUFBTUgsS0FBTixDQUFoQjtBQUFBLFVBQ0lJLGFBQWEsQ0FBQ0YsU0FBRCxDQURqQjtBQUFBLFVBRUlHLHVCQUF1QixJQUFJTixvQkFBSixDQUF5QkssVUFBekIsRUFBcUNILGNBQXJDLENBRjNCOztBQUlBRCxjQUFRLENBQUNLLG9CQUFELENBQVIsQ0FMc0MsQ0FLTjs7QUFFaEMsYUFBT0wsS0FBUDtBQUNEOzs7O0VBVGdDSCxlOztBQVluQ1MsT0FBT0MsT0FBUCxHQUFpQlIsb0JBQWpCOztBQUVBLFNBQVNJLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImluY2x1ZGVEaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBJbmNsdWRlRGlyZWN0aXZlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIHRoaXJkTm9kZSA9IHRoaXJkKG5vZGVzKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IFt0aGlyZE5vZGVdLFxuICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTm9kZSA9IG5ldyBJbmNsdWRlRGlyZWN0aXZlTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtpbmNsdWRlRGlyZWN0aXZlTm9kZV07IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5jbHVkZURpcmVjdGl2ZU5vZGU7XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19