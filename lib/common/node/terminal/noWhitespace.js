'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal'),
    NoWhitespaceNodeParseTree = require('../../parseTree/noWhitespaceNode');

var NoWhitespaceNode = function (_TerminalNode) {
  _inherits(NoWhitespaceNode, _TerminalNode);

  function NoWhitespaceNode() {
    _classCallCheck(this, NoWhitespaceNode);

    return _possibleConstructorReturn(this, (NoWhitespaceNode.__proto__ || Object.getPrototypeOf(NoWhitespaceNode)).apply(this, arguments));
  }

  _createClass(NoWhitespaceNode, [{
    key: 'getType',
    value: function getType() {
      var type = null; ///

      return type;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var content = ''; ///

      return content;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var noWhitespaceNodeParseTree = NoWhitespaceNodeParseTree.fromNothing(),
          parseTree = noWhitespaceNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var significantToken = null,
          nonWhitespaceNode = TerminalNode.fromSignificantToken(NoWhitespaceNode, significantToken);

      return nonWhitespaceNode;
    }
  }]);

  return NoWhitespaceNode;
}(TerminalNode);

module.exports = NoWhitespaceNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIk5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiLCJOb1doaXRlc3BhY2VOb2RlIiwidHlwZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwibm9uV2hpdGVzcGFjZU5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxhQUFSLENBQXJCO0FBQUEsSUFDTUMsNEJBQTRCRCxRQUFRLGtDQUFSLENBRGxDOztJQUdNRSxnQjs7Ozs7Ozs7Ozs7OEJBQ007QUFDUixVQUFNQyxPQUFPLElBQWIsQ0FEUSxDQUNZOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1DLFVBQVUsRUFBaEIsQ0FEVyxDQUNVOztBQUVyQixhQUFPQSxPQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1DLDRCQUE0QkwsMEJBQTBCTSxXQUExQixFQUFsQztBQUFBLFVBQ01DLFlBQVlGLHlCQURsQixDQURrQixDQUU0Qjs7QUFFOUMsYUFBT0UsU0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1DLG1CQUFtQixJQUF6QjtBQUFBLFVBQ01DLG9CQUFvQlgsYUFBYVksb0JBQWIsQ0FBa0NULGdCQUFsQyxFQUFvRE8sZ0JBQXBELENBRDFCOztBQUdBLGFBQU9DLGlCQUFQO0FBQ0Q7Ozs7RUF6QjRCWCxZOztBQTRCL0JhLE9BQU9DLE9BQVAsR0FBaUJYLGdCQUFqQiIsImZpbGUiOiJub1doaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyksXG4gICAgICBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vcGFyc2VUcmVlL25vV2hpdGVzcGFjZU5vZGUnKTtcblxuY2xhc3MgTm9XaGl0ZXNwYWNlTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJyc7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSA9IE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIG5vbldoaXRlc3BhY2VOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKE5vV2hpdGVzcGFjZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vbldoaXRlc3BhY2VOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlTm9kZTtcbiJdfQ==