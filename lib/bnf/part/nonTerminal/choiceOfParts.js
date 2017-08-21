'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var NonTerminalPart = require('../../part/nonTerminal'),
    bnfUtilities = require('../../../utilities/bnf'),
    arrayUtilities = require('../../../utilities/array');

var array = necessary.array,
    second = array.second;

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    var type = ChoiceOfPartsPart.type;

    var _this = _possibleConstructorReturn(this, (ChoiceOfPartsPart.__proto__ || Object.getPrototypeOf(ChoiceOfPartsPart)).call(this, type));

    _this.parts = parts;
    return _this;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = partNodeOrNodes;
        }

        return partParsed;
      });

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' | ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var choiceOfPartsPart = null;

      nodes = arrayUtilities.discardLastThenFirst(nodes);

      var secondNode = second(nodes),
          secondNodeChoiceNode = bnfUtilities.isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        nodes = arrayUtilities.discardOdd(nodes);

        var noWhitespace = false,
            parts = nodes.map(function (node) {
          var part = node.generatePart(noWhitespace);

          return part;
        });

        choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      }

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(NonTerminalPart);

ChoiceOfPartsPart.type = 'ChoiceOfParts';

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJOb25UZXJtaW5hbFBhcnQiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic2Vjb25kIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzb21lIiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJkaXNjYXJkTGFzdFRoZW5GaXJzdCIsInNlY29uZE5vZGUiLCJzZWNvbmROb2RlQ2hvaWNlTm9kZSIsImlzTm9kZUNob2ljZU5vZGUiLCJkaXNjYXJkT2RkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUF4QjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsd0JBQVIsQ0FEckI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsMEJBQVIsQ0FGdkI7O0FBSU0sSUFBRUksS0FBRixHQUFZTCxTQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELEtBRGIsQ0FDRUMsTUFERjs7SUFHQUMsaUI7OztBQUNKLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFFBQU1DLE9BQU9GLGtCQUFrQkUsSUFBL0I7O0FBRGlCLHNJQUdYQSxJQUhXOztBQUtqQixVQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFMaUI7QUFNbEI7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzBCQUVLRSxhLEVBQWVDLFksRUFBYztBQUNqQ0EscUJBQWUsS0FBZixDQURpQyxDQUNYOztBQUV0QixVQUFJQyxRQUFRLElBQVo7O0FBRUEsV0FBS0osS0FBTCxDQUFXSyxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QixZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV04sYUFBWCxFQUEwQkMsWUFBMUIsQ0FBeEI7QUFBQSxZQUNNTSxhQUFjRixvQkFBb0IsSUFEeEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkTCxrQkFBUUcsZUFBUjtBQUNEOztBQUVELGVBQU9FLFVBQVA7QUFDRCxPQVREOztBQVdBLGFBQU9MLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU0sY0FBYyxLQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQkosSUFBdEIsRUFBNEI7QUFDMUQsWUFBTU0sYUFBYU4sS0FBS08sUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJBLHdCQUFjRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLHdCQUFpQkEsV0FBakIsV0FBa0NFLFVBQWxDO0FBQ0Q7O0FBRUQsZUFBT0YsV0FBUDtBQUNELE9BVmEsRUFVWCxJQVZXLENBQXBCO0FBQUEsVUFXTUksZ0JBQWNKLFdBQWQsT0FYTjs7QUFhQSxhQUFPSSxNQUFQO0FBQ0Q7Ozs4QkFFZ0JWLEssRUFBTztBQUN0QixVQUFJVyxvQkFBb0IsSUFBeEI7O0FBRUFYLGNBQVFSLGVBQWVvQixvQkFBZixDQUFvQ1osS0FBcEMsQ0FBUjs7QUFFQSxVQUFNYSxhQUFhbkIsT0FBT00sS0FBUCxDQUFuQjtBQUFBLFVBQ01jLHVCQUF1QnZCLGFBQWF3QixnQkFBYixDQUE4QkYsVUFBOUIsQ0FEN0I7O0FBR0EsVUFBSUMsb0JBQUosRUFBMEI7QUFDeEJkLGdCQUFRUixlQUFld0IsVUFBZixDQUEwQmhCLEtBQTFCLENBQVI7O0FBRUEsWUFBTUQsZUFBZSxLQUFyQjtBQUFBLFlBQ01ILFFBQVFJLE1BQU1pQixHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQy9CLGNBQU1oQixPQUFPZ0IsS0FBS0MsWUFBTCxDQUFrQnBCLFlBQWxCLENBQWI7O0FBRUEsaUJBQU9HLElBQVA7QUFDRCxTQUpPLENBRGQ7O0FBT0FTLDRCQUFvQixJQUFJaEIsaUJBQUosQ0FBc0JDLEtBQXRCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT2UsaUJBQVA7QUFDRDs7OztFQXZFNkJyQixlOztBQTBFaENLLGtCQUFrQkUsSUFBbEIsR0FBeUIsZUFBekI7O0FBRUF1QixPQUFPQyxPQUFQLEdBQWlCMUIsaUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnQudHlwZTtcbiAgICBcbiAgICBzdXBlcih0eXBlKTtcbiAgICBcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuICAgIFxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5wYXJ0cy5zb21lKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gfCAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGxldCBjaG9pY2VPZlBhcnRzUGFydCA9IG51bGw7XG4gICAgXG4gICAgbm9kZXMgPSBhcnJheVV0aWxpdGllcy5kaXNjYXJkTGFzdFRoZW5GaXJzdChub2Rlcyk7XG4gICAgXG4gICAgY29uc3Qgc2Vjb25kTm9kZSA9IHNlY29uZChub2RlcyksXG4gICAgICAgICAgc2Vjb25kTm9kZUNob2ljZU5vZGUgPSBibmZVdGlsaXRpZXMuaXNOb2RlQ2hvaWNlTm9kZShzZWNvbmROb2RlKTtcbiAgICBcbiAgICBpZiAoc2Vjb25kTm9kZUNob2ljZU5vZGUpIHtcbiAgICAgIG5vZGVzID0gYXJyYXlVdGlsaXRpZXMuZGlzY2FyZE9kZChub2Rlcyk7XG5cbiAgICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5DaG9pY2VPZlBhcnRzUGFydC50eXBlID0gJ0Nob2ljZU9mUGFydHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNQYXJ0O1xuIl19