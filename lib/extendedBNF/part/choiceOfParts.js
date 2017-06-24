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
    value: function fromNodes(nodes) {
      var choiceOfPartsPart = null;

      nodes = arrayUtil.discardFirstAndLast(nodes);

      var secondNode = arrayUtil.second(nodes),
          secondNodeChoiceNode = bnfUtil.isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        nodes = arrayUtil.discardOdd(nodes);

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
}();

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJ0L2Nob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJDaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic29tZSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsImNob2ljZU9mUGFydHNQYXJ0IiwiZGlzY2FyZEZpcnN0QW5kTGFzdCIsInNlY29uZE5vZGUiLCJzZWNvbmQiLCJzZWNvbmROb2RlQ2hvaWNlTm9kZSIsImlzTm9kZUNob2ljZU5vZGUiLCJkaXNjYXJkT2RkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGdCQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxrQkFBUixDQURsQjs7SUFHTUUsaUI7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxZLEVBQWM7QUFDM0JBLHFCQUFlLEtBQWYsQ0FEMkIsQ0FDTDs7QUFFdEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0IsWUFBTUMsa0JBQWtCRCxLQUFLRSxLQUFMLENBQVdOLE9BQVgsRUFBb0JDLFlBQXBCLENBQXhCO0FBQUEsWUFDTU0sYUFBY0Ysb0JBQW9CLElBRHhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZEwsa0JBQVFHLGVBQVI7QUFDRDs7QUFFRCxlQUFPRSxVQUFQO0FBQ0QsT0FURDs7QUFXQSxhQUFPTCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLGNBQWMsS0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JKLElBQXRCLEVBQTRCO0FBQzFELFlBQU1NLGFBQWFOLEtBQUtPLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFdBQWtDRSxVQUFsQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLGdCQUFjSixXQUFkLE9BWE47O0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7OEJBRWdCVixLLEVBQU87QUFDdEIsVUFBSVcsb0JBQW9CLElBQXhCOztBQUVBWCxjQUFRTCxVQUFVaUIsbUJBQVYsQ0FBOEJaLEtBQTlCLENBQVI7O0FBRUEsVUFBTWEsYUFBYWxCLFVBQVVtQixNQUFWLENBQWlCZCxLQUFqQixDQUFuQjtBQUFBLFVBQ01lLHVCQUF1QnRCLFFBQVF1QixnQkFBUixDQUF5QkgsVUFBekIsQ0FEN0I7O0FBR0EsVUFBSUUsb0JBQUosRUFBMEI7QUFDeEJmLGdCQUFRTCxVQUFVc0IsVUFBVixDQUFxQmpCLEtBQXJCLENBQVI7O0FBRUEsWUFBTUQsZUFBZSxLQUFyQjtBQUFBLFlBQ01GLFFBQVFHLE1BQU1rQixHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQy9CLGNBQU1qQixPQUFPaUIsS0FBS0MsWUFBTCxDQUFrQnJCLFlBQWxCLENBQWI7O0FBRUEsaUJBQU9HLElBQVA7QUFDRCxTQUpPLENBRGQ7O0FBT0FTLDRCQUFvQixJQUFJZixpQkFBSixDQUFzQkMsS0FBdEIsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPYyxpQkFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQjFCLGlCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmZVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9ibmYnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gcGFydE5vZGVPck5vZGVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBudWxsO1xuICAgIFxuICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdEFuZExhc3Qobm9kZXMpO1xuICAgIFxuICAgIGNvbnN0IHNlY29uZE5vZGUgPSBhcnJheVV0aWwuc2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBzZWNvbmROb2RlQ2hvaWNlTm9kZSA9IGJuZlV0aWwuaXNOb2RlQ2hvaWNlTm9kZShzZWNvbmROb2RlKTtcbiAgICBcbiAgICBpZiAoc2Vjb25kTm9kZUNob2ljZU5vZGUpIHtcbiAgICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRPZGQobm9kZXMpO1xuXG4gICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUGFydDtcbiJdfQ==