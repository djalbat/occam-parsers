'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TerminalNode = require('../terminal'),
    EndOfLineNodeParseTree = require('../../parseTree/endOfLineNode');

var EndOfLineNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(EndOfLineNode, _TerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: "getContent",
    value: function getContent() {
      var content = ''; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSIsIkVuZE9mTGluZU5vZGUiLCJjb250ZW50IiwidG9rZW5zIiwiZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUE1QjtBQUFBLElBQ01DLHNCQUFzQixHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FEdEM7O0lBR01FLGE7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsT0FBTyxHQUFHLEVBQWhCLENBRFcsQ0FDVTs7QUFFckIsYUFBT0EsT0FBUDtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixVQUFNQyxzQkFBc0IsR0FBR0osc0JBQXNCLENBQUNLLFdBQXZCLEVBQS9CO0FBQUEsVUFDTUMsU0FBUyxHQUFHRixzQkFEbEIsQ0FEa0IsQ0FFeUI7O0FBRTNDLGFBQU9FLFNBQVA7QUFDRDs7O3lDQUUyQkMsZ0IsRUFBa0I7QUFBRSxhQUFPVCxZQUFZLENBQUNVLG9CQUFiLENBQWtDUCxhQUFsQyxFQUFpRE0sZ0JBQWpELENBQVA7QUFBNEU7Ozs7RUFkbEdULFk7O0FBaUI1QlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKSxcbiAgICAgIEVuZE9mTGluZU5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZScpO1xuXG5jbGFzcyBFbmRPZkxpbmVOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJyc7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSA9IEVuZE9mTGluZU5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihFbmRPZkxpbmVOb2RlLCBzaWduaWZpY2FudFRva2VuKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZU5vZGU7XG4iXX0=