'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal'),
    EndOfLineNodeParseTree = require('../../parseTree/endOfLineNode');

var EndOfLineNode = function (_TerminalNode) {
  _inherits(EndOfLineNode, _TerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, (EndOfLineNode.__proto__ || Object.getPrototypeOf(EndOfLineNode)).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = ''; ///

      return content;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var endOfLineNodeParseTree = EndOfLineNodeParseTree.fromNothing(),
          parseTree = endOfLineNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      return TerminalNode.fromSignificantToken(EndOfLineNode, significantToken);
    }
  }]);

  return EndOfLineNode;
}(TerminalNode);

module.exports = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJFbmRPZkxpbmVOb2RlIiwiY29udGVudCIsInRva2VucyIsImVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsInNpZ25pZmljYW50VG9rZW4iLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxhQUFSLENBQXJCO0FBQUEsSUFDTUMseUJBQXlCRCxRQUFRLCtCQUFSLENBRC9COztJQUdNRSxhOzs7Ozs7Ozs7OztpQ0FDUztBQUNYLFVBQU1DLFVBQVUsRUFBaEIsQ0FEVyxDQUNVOztBQUVyQixhQUFPQSxPQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1DLHlCQUF5QkosdUJBQXVCSyxXQUF2QixFQUEvQjtBQUFBLFVBQ01DLFlBQVlGLHNCQURsQixDQURrQixDQUV5Qjs7QUFFM0MsYUFBT0UsU0FBUDtBQUNEOzs7eUNBRTJCQyxnQixFQUFrQjtBQUFFLGFBQU9ULGFBQWFVLG9CQUFiLENBQWtDUCxhQUFsQyxFQUFpRE0sZ0JBQWpELENBQVA7QUFBNEU7Ozs7RUFkbEdULFk7O0FBaUI1QlcsT0FBT0MsT0FBUCxHQUFpQlQsYUFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpLFxuICAgICAgRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL3BhcnNlVHJlZS9lbmRPZkxpbmVOb2RlJyk7XG5cbmNsYXNzIEVuZE9mTGluZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnJzsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlID0gRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVuZE9mTGluZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVuZE9mTGluZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lTm9kZTtcbiJdfQ==