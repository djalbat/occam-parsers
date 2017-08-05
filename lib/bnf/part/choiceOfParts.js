'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var bnfUtilities = require('../../utilities/bnf'),
    arrayUtilities = require('../../utilities/array');

var array = necessary.array,
    second = array.second;

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
}();

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic2Vjb25kIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsImRpc2NhcmRMYXN0VGhlbkZpcnN0Iiwic2Vjb25kTm9kZSIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiaXNOb2RlQ2hvaWNlTm9kZSIsImRpc2NhcmRPZGQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRHZCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosU0FBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsTUFERixHQUNhRCxLQURiLENBQ0VDLE1BREY7O0lBR0FDLGlCO0FBQ0osNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsWSxFQUFjO0FBQzNCQSxxQkFBZSxLQUFmLENBRDJCLENBQ0w7O0FBRXRCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCLFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTixPQUFYLEVBQW9CQyxZQUFwQixDQUF4QjtBQUFBLFlBQ01NLGFBQWNGLG9CQUFvQixJQUR4Qzs7QUFHQSxZQUFJRSxVQUFKLEVBQWdCO0FBQ2RMLGtCQUFRRyxlQUFSO0FBQ0Q7O0FBRUQsZUFBT0UsVUFBUDtBQUNELE9BVEQ7O0FBV0EsYUFBT0wsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTSxjQUFjLEtBQUtULEtBQUwsQ0FBV1UsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSixJQUF0QixFQUE0QjtBQUMxRCxZQUFNTSxhQUFhTixLQUFLTyxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzhCQUVnQlYsSyxFQUFPO0FBQ3RCLFVBQUlXLG9CQUFvQixJQUF4Qjs7QUFFQVgsY0FBUVAsZUFBZW1CLG9CQUFmLENBQW9DWixLQUFwQyxDQUFSOztBQUVBLFVBQU1hLGFBQWFsQixPQUFPSyxLQUFQLENBQW5CO0FBQUEsVUFDTWMsdUJBQXVCdEIsYUFBYXVCLGdCQUFiLENBQThCRixVQUE5QixDQUQ3Qjs7QUFHQSxVQUFJQyxvQkFBSixFQUEwQjtBQUN4QmQsZ0JBQVFQLGVBQWV1QixVQUFmLENBQTBCaEIsS0FBMUIsQ0FBUjs7QUFFQSxZQUFNRCxlQUFlLEtBQXJCO0FBQUEsWUFDTUYsUUFBUUcsTUFBTWlCLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDL0IsY0FBTWhCLE9BQU9nQixLQUFLQyxZQUFMLENBQWtCcEIsWUFBbEIsQ0FBYjs7QUFFQSxpQkFBT0csSUFBUDtBQUNELFNBSk8sQ0FEZDs7QUFPQVMsNEJBQW9CLElBQUlmLGlCQUFKLENBQXNCQyxLQUF0QixDQUFwQjtBQUNEOztBQUVELGFBQU9jLGlCQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCekIsaUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXk7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG4gICAgXG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSB8ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IGNob2ljZU9mUGFydHNQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBub2RlcyA9IGFycmF5VXRpbGl0aWVzLmRpc2NhcmRMYXN0VGhlbkZpcnN0KG5vZGVzKTtcbiAgICBcbiAgICBjb25zdCBzZWNvbmROb2RlID0gc2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBzZWNvbmROb2RlQ2hvaWNlTm9kZSA9IGJuZlV0aWxpdGllcy5pc05vZGVDaG9pY2VOb2RlKHNlY29uZE5vZGUpO1xuICAgIFxuICAgIGlmIChzZWNvbmROb2RlQ2hvaWNlTm9kZSkge1xuICAgICAgbm9kZXMgPSBhcnJheVV0aWxpdGllcy5kaXNjYXJkT2RkKG5vZGVzKTtcblxuICAgICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuICAgIH0gICAgXG4gICAgXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1BhcnQ7XG4iXX0=