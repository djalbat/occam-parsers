'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../../common/node/nonTerminal');

var NonTerminalPartNode = function (_NonTerminalNode) {
  _inherits(NonTerminalPartNode, _NonTerminalNode);

  function NonTerminalPartNode() {
    _classCallCheck(this, NonTerminalPartNode);

    return _possibleConstructorReturn(this, (NonTerminalPartNode.__proto__ || Object.getPrototypeOf(NonTerminalPartNode)).apply(this, arguments));
  }

  _createClass(NonTerminalPartNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace, lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, lookAhead);

      return part;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
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
    var node = nodes.pop(),
        noWhitespace = false;

    part = node.generatePart(noWhitespace, lookAhead);
  } else {
    nodes.pop();

    lookAhead = true;

    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0L25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnROb2RlIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwiZ2VuZXJhdGVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSxrQ0FBUixDQUF4Qjs7SUFFTUMsbUI7Ozs7Ozs7Ozs7O2lDQUNTQyxZLEVBQWNDLFMsRUFBVztBQUNwQyxVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxRQUFRRixXQUFXRyxLQUFYLEVBRGQ7QUFBQSxVQUVNQyxPQUFPQyxjQUFjSCxLQUFkLEVBQXFCSCxTQUFyQixDQUZiOztBQUlBLGFBQU9LLElBQVA7QUFDRDs7OzhDQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSxhQUFPTCxnQkFBZ0JZLHlCQUFoQixDQUEwQ1YsbUJBQTFDLEVBQStEUyxRQUEvRCxFQUF5RU4sVUFBekUsQ0FBUDtBQUE4Rjs7OztFQVR2SEwsZTs7QUFZbENhLE9BQU9DLE9BQVAsR0FBaUJaLG1CQUFqQjs7QUFFQSxTQUFTUSxhQUFULENBQXVCSCxLQUF2QixFQUE4QkgsU0FBOUIsRUFBeUM7QUFDdkMsTUFBSUssT0FBTyxJQUFYOztBQUVBLE1BQU1NLGNBQWNSLE1BQU1TLE1BQTFCOztBQUVBLE1BQUlELGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQixRQUFNRSxPQUFPVixNQUFNVyxHQUFOLEVBQWI7QUFBQSxRQUNNZixlQUFlLEtBRHJCOztBQUdBTSxXQUFPUSxLQUFLRSxZQUFMLENBQWtCaEIsWUFBbEIsRUFBZ0NDLFNBQWhDLENBQVA7QUFDRCxHQUxELE1BS087QUFDTEcsVUFBTVcsR0FBTjs7QUFFQWQsZ0JBQVksSUFBWjs7QUFFQUssV0FBT0MsY0FBY0gsS0FBZCxFQUFxQkgsU0FBckIsQ0FBUDtBQUNEOztBQUVELFNBQU9LLElBQVA7QUFDRCIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgTm9uVGVybWluYWxQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2RlcywgbG9va0FoZWFkKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKE5vblRlcm1pbmFsUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsUGFydE5vZGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCkge1xuICBsZXQgcGFydCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuXG4gICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBub2Rlcy5wb3AoKTtcblxuICAgIGxvb2tBaGVhZCA9IHRydWU7XG5cbiAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2RlcywgbG9va0FoZWFkKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19