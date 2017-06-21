'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bnfUtil = require('../../util/bnf'),
    arrayUtil = require('../../util/array');

var ChoiceOfPartsPart = function () {
  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    this.parts = parts;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = partNodeOrNodes;
        }

        return partParsed;
      });

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

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
    value: function fromNodes(nodes, Parts) {
      var choiceOfPartsPart = null;

      nodes = arrayUtil.discardFirstAndLast(nodes);

      var secondNode = arrayUtil.second(nodes),
          secondNodeChoiceNode = bnfUtil.isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        nodes = arrayUtil.discardOdd(nodes);

        var noWhitespace = false,
            parts = nodes.map(function (node) {
          var part = node.generatePart(Parts, noWhitespace);

          return part;
        });

        choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      }

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}();

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJ0L2Nob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJDaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic29tZSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIlBhcnRzIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJkaXNjYXJkRmlyc3RBbmRMYXN0Iiwic2Vjb25kTm9kZSIsInNlY29uZCIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiaXNOb2RlQ2hvaWNlTm9kZSIsImRpc2NhcmRPZGQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZ0JBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGtCQUFSLENBRGxCOztJQUdNRSxpQjtBQUNKLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFksRUFBYztBQUMzQkEscUJBQWUsS0FBZixDQUQyQixDQUNMOztBQUV0QixVQUFJQyxRQUFRLElBQVo7O0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QixZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV04sT0FBWCxFQUFvQkMsWUFBcEIsQ0FBeEI7QUFBQSxZQUNNTSxhQUFjRixvQkFBb0IsSUFEeEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkTCxrQkFBUUcsZUFBUjtBQUNEOztBQUVELGVBQU9FLFVBQVA7QUFDRCxPQVREOztBQVdBLGFBQU9MLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU0sY0FBYyxLQUFLVCxLQUFMLENBQVdVLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQkosSUFBdEIsRUFBNEI7QUFDMUQsWUFBTU0sYUFBYU4sS0FBS08sUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJBLHdCQUFjRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLHdCQUFpQkEsV0FBakIsV0FBa0NFLFVBQWxDO0FBQ0Q7O0FBRUQsZUFBT0YsV0FBUDtBQUNELE9BVmEsRUFVWCxJQVZXLENBQXBCO0FBQUEsVUFXTUksZ0JBQWNKLFdBQWQsT0FYTjs7QUFhQSxhQUFPSSxNQUFQO0FBQ0Q7Ozs4QkFFZ0JWLEssRUFBT1csSyxFQUFPO0FBQzdCLFVBQUlDLG9CQUFvQixJQUF4Qjs7QUFFQVosY0FBUUwsVUFBVWtCLG1CQUFWLENBQThCYixLQUE5QixDQUFSOztBQUVBLFVBQU1jLGFBQWFuQixVQUFVb0IsTUFBVixDQUFpQmYsS0FBakIsQ0FBbkI7QUFBQSxVQUNNZ0IsdUJBQXVCdkIsUUFBUXdCLGdCQUFSLENBQXlCSCxVQUF6QixDQUQ3Qjs7QUFHQSxVQUFJRSxvQkFBSixFQUEwQjtBQUN4QmhCLGdCQUFRTCxVQUFVdUIsVUFBVixDQUFxQmxCLEtBQXJCLENBQVI7O0FBRUEsWUFBTUQsZUFBZSxLQUFyQjtBQUFBLFlBQ01GLFFBQVFHLE1BQU1tQixHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQy9CLGNBQU1sQixPQUFPa0IsS0FBS0MsWUFBTCxDQUFrQlYsS0FBbEIsRUFBeUJaLFlBQXpCLENBQWI7O0FBRUEsaUJBQU9HLElBQVA7QUFDRCxTQUpPLENBRGQ7O0FBT0FVLDRCQUFvQixJQUFJaEIsaUJBQUosQ0FBc0JDLEtBQXRCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT2UsaUJBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUIzQixpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYm5mJyksXG4gICAgICBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG4gICAgXG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSB8ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBQYXJ0cykge1xuICAgIGxldCBjaG9pY2VPZlBhcnRzUGFydCA9IG51bGw7XG4gICAgXG4gICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZpcnN0QW5kTGFzdChub2Rlcyk7XG4gICAgXG4gICAgY29uc3Qgc2Vjb25kTm9kZSA9IGFycmF5VXRpbC5zZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHNlY29uZE5vZGVDaG9pY2VOb2RlID0gYm5mVXRpbC5pc05vZGVDaG9pY2VOb2RlKHNlY29uZE5vZGUpO1xuICAgIFxuICAgIGlmIChzZWNvbmROb2RlQ2hvaWNlTm9kZSkge1xuICAgICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZE9kZChub2Rlcyk7XG5cbiAgICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUGFydDtcbiJdfQ==