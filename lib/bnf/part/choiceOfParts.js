'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var bnfUtilities = require('../../utilities/bnf'),
    arrayUtilities = require('../../utilities/array');

var array = necessary.array;

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

      nodes = arrayUtilities.discardLastThenFirst(nodes);

      var secondNode = array.second(nodes),
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
}();

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsImRpc2NhcmRMYXN0VGhlbkZpcnN0Iiwic2Vjb25kTm9kZSIsInNlY29uZCIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiaXNOb2RlQ2hvaWNlTm9kZSIsImRpc2NhcmRPZGQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRHZCOztJQUdRRyxLLEdBQVVKLFMsQ0FBVkksSzs7SUFFRkMsaUI7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxZLEVBQWM7QUFDM0JBLHFCQUFlLEtBQWYsQ0FEMkIsQ0FDTDs7QUFFdEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0IsWUFBTUMsa0JBQWtCRCxLQUFLRSxLQUFMLENBQVdOLE9BQVgsRUFBb0JDLFlBQXBCLENBQXhCO0FBQUEsWUFDTU0sYUFBY0Ysb0JBQW9CLElBRHhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZEwsa0JBQVFHLGVBQVI7QUFDRDs7QUFFRCxlQUFPRSxVQUFQO0FBQ0QsT0FURDs7QUFXQSxhQUFPTCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLGNBQWMsS0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JKLElBQXRCLEVBQTRCO0FBQzFELFlBQU1NLGFBQWFOLEtBQUtPLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFdBQWtDRSxVQUFsQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLGdCQUFjSixXQUFkLE9BWE47O0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7OEJBRWdCVixLLEVBQU87QUFDdEIsVUFBSVcsb0JBQW9CLElBQXhCOztBQUVBWCxjQUFRTixlQUFla0Isb0JBQWYsQ0FBb0NaLEtBQXBDLENBQVI7O0FBRUEsVUFBTWEsYUFBYWxCLE1BQU1tQixNQUFOLENBQWFkLEtBQWIsQ0FBbkI7QUFBQSxVQUNNZSx1QkFBdUJ0QixhQUFhdUIsZ0JBQWIsQ0FBOEJILFVBQTlCLENBRDdCOztBQUdBLFVBQUlFLG9CQUFKLEVBQTBCO0FBQ3hCZixnQkFBUU4sZUFBZXVCLFVBQWYsQ0FBMEJqQixLQUExQixDQUFSOztBQUVBLFlBQU1ELGVBQWUsS0FBckI7QUFBQSxZQUNNRixRQUFRRyxNQUFNa0IsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixjQUFNakIsT0FBT2lCLEtBQUtDLFlBQUwsQ0FBa0JyQixZQUFsQixDQUFiOztBQUVBLGlCQUFPRyxJQUFQO0FBQ0QsU0FKTyxDQURkOztBQU9BUyw0QkFBb0IsSUFBSWYsaUJBQUosQ0FBc0JDLEtBQXRCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT2MsaUJBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUIxQixpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGJuZlV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9ibmYnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeTtcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gcGFydE5vZGVPck5vZGVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBudWxsO1xuICAgIFxuICAgIG5vZGVzID0gYXJyYXlVdGlsaXRpZXMuZGlzY2FyZExhc3RUaGVuRmlyc3Qobm9kZXMpO1xuICAgIFxuICAgIGNvbnN0IHNlY29uZE5vZGUgPSBhcnJheS5zZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHNlY29uZE5vZGVDaG9pY2VOb2RlID0gYm5mVXRpbGl0aWVzLmlzTm9kZUNob2ljZU5vZGUoc2Vjb25kTm9kZSk7XG4gICAgXG4gICAgaWYgKHNlY29uZE5vZGVDaG9pY2VOb2RlKSB7XG4gICAgICBub2RlcyA9IGFycmF5VXRpbGl0aWVzLmRpc2NhcmRPZGQobm9kZXMpO1xuXG4gICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUGFydDtcbiJdfQ==