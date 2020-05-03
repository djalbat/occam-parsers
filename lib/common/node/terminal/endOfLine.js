"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TerminalNode = require("../terminal"),
    EndOfLineNodeParseTree = require("../../parseTree/endOfLineNode");

var EndOfLineNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(EndOfLineNode, _TerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: "getContent",
    value: function getContent() {
      var content = ""; ///

      return content;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var endOfLineNodeParseTree = EndOfLineNodeParseTree.fromNothing(),
          parseTree = endOfLineNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: "fromSignificantToken",
    value: function fromSignificantToken(significantToken) {
      return TerminalNode.fromSignificantToken(EndOfLineNode, significantToken);
    }
  }]);

  return EndOfLineNode;
}(TerminalNode);

module.exports = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSIsIkVuZE9mTGluZU5vZGUiLCJjb250ZW50IiwidG9rZW5zIiwiZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUE1QjtBQUFBLElBQ01DLHNCQUFzQixHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FEdEM7O0lBR01FLGE7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsT0FBTyxHQUFHLEVBQWhCLENBRFcsQ0FDVTs7QUFFckIsYUFBT0EsT0FBUDtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixVQUFNQyxzQkFBc0IsR0FBR0osc0JBQXNCLENBQUNLLFdBQXZCLEVBQS9CO0FBQUEsVUFDTUMsU0FBUyxHQUFHRixzQkFEbEIsQ0FEa0IsQ0FFeUI7O0FBRTNDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQkMsZ0IsRUFBa0I7QUFBRSxhQUFPVCxZQUFZLENBQUNVLG9CQUFiLENBQWtDUCxhQUFsQyxFQUFpRE0sZ0JBQWpELENBQVA7QUFBNEU7Ozs7RUFkbEdULFk7O0FBaUI1QlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKFwiLi4vdGVybWluYWxcIiksXG4gICAgICBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlID0gcmVxdWlyZShcIi4uLy4uL3BhcnNlVHJlZS9lbmRPZkxpbmVOb2RlXCIpO1xuXG5jbGFzcyBFbmRPZkxpbmVOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gXCJcIjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlID0gRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVuZE9mTGluZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVuZE9mTGluZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lTm9kZTtcbiJdfQ==