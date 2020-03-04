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

var NonTerminalNode = require('../../../common/node/nonTerminal');

var NonTerminalPartNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(NonTerminalPartNode, _NonTerminalNode);

  function NonTerminalPartNode() {
    _classCallCheck(this, NonTerminalPartNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartNode).apply(this, arguments));
  }

  _createClass(NonTerminalPartNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, lookAhead);
      return part;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(NonTerminalPartNode, ruleName, childNodes);
    }
  }]);

  return NonTerminalPartNode;
}(NonTerminalNode);

module.exports = NonTerminalPartNode;

function partFromNodes(nodes, lookAhead) {
  var part = null;
  var nodesLength = nodes.length;

  if (nodesLength === 1) {
    var node = nodes.pop();
    part = node.generatePart(lookAhead);
  } else {
    nodes.pop();
    lookAhead = true;
    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnROb2RlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwiZ2VuZXJhdGVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLE9BQU8sQ0FBQyxrQ0FBRCxDQUEvQjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7O2lDQUNTQyxTLEVBQVc7QUFDdEIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxFQURkO0FBQUEsVUFFTUMsSUFBSSxHQUFHQyxhQUFhLENBQUNILEtBQUQsRUFBUUgsU0FBUixDQUYxQjtBQUlBLGFBQU9LLElBQVA7QUFDRDs7OzhDQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSxhQUFPSixlQUFlLENBQUNXLHlCQUFoQixDQUEwQ1QsbUJBQTFDLEVBQStEUSxRQUEvRCxFQUF5RU4sVUFBekUsQ0FBUDtBQUE4Rjs7OztFQVR2SEosZTs7QUFZbENZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsbUJBQWpCOztBQUVBLFNBQVNPLGFBQVQsQ0FBdUJILEtBQXZCLEVBQThCSCxTQUE5QixFQUF5QztBQUN2QyxNQUFJSyxJQUFJLEdBQUcsSUFBWDtBQUVBLE1BQU1NLFdBQVcsR0FBR1IsS0FBSyxDQUFDUyxNQUExQjs7QUFFQSxNQUFJRCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsUUFBTUUsSUFBSSxHQUFHVixLQUFLLENBQUNXLEdBQU4sRUFBYjtBQUVBVCxJQUFBQSxJQUFJLEdBQUdRLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmYsU0FBbEIsQ0FBUDtBQUNELEdBSkQsTUFJTztBQUNMRyxJQUFBQSxLQUFLLENBQUNXLEdBQU47QUFFQWQsSUFBQUEsU0FBUyxHQUFHLElBQVo7QUFFQUssSUFBQUEsSUFBSSxHQUFHQyxhQUFhLENBQUNILEtBQUQsRUFBUUgsU0FBUixDQUFwQjtBQUNEOztBQUVELFNBQU9LLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhOb25UZXJtaW5hbFBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKTtcblxuICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgbG9va0FoZWFkID0gdHJ1ZTtcblxuICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXX0=