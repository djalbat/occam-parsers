'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalPart = require('../../part/nonTerminal'),
    bnfUtilities = require('../../../utilities/bnf'),
    arrayUtilities = require('../../../utilities/array');

var isNodeChoiceNode = bnfUtilities.isNodeChoiceNode,
    second = arrayUtilities.second,
    even = arrayUtilities.even,
    allButFirstAndLast = arrayUtilities.allButFirstAndLast;


var type = 'ChoiceOfParts';

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

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
        var partNodeOrNodes = part.parse(configuration, noWhitespace);

        if (partNodeOrNodes !== null) {
          nodes = partNodeOrNodes; ///

          return true;
        }
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

      var allButFirstAndLastNodes = allButFirstAndLast(nodes);

      nodes = allButFirstAndLastNodes; ///

      var secondNode = second(nodes),
          secondNodeChoiceNode = isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        var evenNodes = even(nodes);

        nodes = evenNodes; ///

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

Object.assign(ChoiceOfPartsPart, {
  type: type
});

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImlzTm9kZUNob2ljZU5vZGUiLCJzZWNvbmQiLCJldmVuIiwiYWxsQnV0Rmlyc3RBbmRMYXN0IiwidHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0IiwicGFydHMiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzb21lIiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwic2Vjb25kTm9kZSIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiZXZlbk5vZGVzIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLHdCQUFSLENBQXhCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxnQkFBRixHQUF1QkYsWUFBdkIsQ0FBRUUsZ0JBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ3VDRixjQUR2QyxDQUNFRSxNQURGO0FBQUEsSUFDVUMsSUFEVixHQUN1Q0gsY0FEdkMsQ0FDVUcsSUFEVjtBQUFBLElBQ2dCQyxrQkFEaEIsR0FDdUNKLGNBRHZDLENBQ2dCSSxrQkFEaEI7OztBQUdOLElBQU1DLE9BQU8sZUFBYjs7SUFFTUMsaUI7OztBQUNKLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1hGLElBRFc7O0FBR2pCLFVBQUtFLEtBQUwsR0FBYUEsS0FBYjtBQUhpQjtBQUlsQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtDLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZSxLQUFmLENBRGlDLENBQ1g7O0FBRXRCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCLFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTixhQUFYLEVBQTBCQyxZQUExQixDQUF4Qjs7QUFFQSxZQUFJSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJILGtCQUFRRyxlQUFSLENBRDRCLENBQ0Y7O0FBRTFCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxjQUFjLEtBQUtSLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNSyxhQUFhTCxLQUFLTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzhCQUVnQlQsSyxFQUFPO0FBQ3RCLFVBQUlVLG9CQUFvQixJQUF4Qjs7QUFFQSxVQUFNQywwQkFBMEJqQixtQkFBbUJNLEtBQW5CLENBQWhDOztBQUVBQSxjQUFRVyx1QkFBUixDQUxzQixDQUtZOztBQUVsQyxVQUFNQyxhQUFhcEIsT0FBT1EsS0FBUCxDQUFuQjtBQUFBLFVBQ01hLHVCQUF1QnRCLGlCQUFpQnFCLFVBQWpCLENBRDdCOztBQUdBLFVBQUlDLG9CQUFKLEVBQTBCO0FBQ3hCLFlBQU1DLFlBQVlyQixLQUFLTyxLQUFMLENBQWxCOztBQUVBQSxnQkFBUWMsU0FBUixDQUh3QixDQUdKOztBQUVwQixZQUFNZixlQUFlLEtBQXJCO0FBQUEsWUFDTUYsUUFBUUcsTUFBTWUsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixjQUFNZCxPQUFPYyxLQUFLQyxZQUFMLENBQWtCbEIsWUFBbEIsQ0FBYjs7QUFFQSxpQkFBT0csSUFBUDtBQUNELFNBSk8sQ0FEZDs7QUFPQVEsNEJBQW9CLElBQUlkLGlCQUFKLENBQXNCQyxLQUF0QixDQUFwQjtBQUNEOztBQUVELGFBQU9hLGlCQUFQO0FBQ0Q7Ozs7RUF4RTZCdkIsZTs7QUEyRWhDK0IsT0FBT0MsTUFBUCxDQUFjdkIsaUJBQWQsRUFBaUM7QUFDL0JEO0FBRCtCLENBQWpDOztBQUlBeUIsT0FBT0MsT0FBUCxHQUFpQnpCLGlCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGlzTm9kZUNob2ljZU5vZGUgfSA9IGJuZlV0aWxpdGllcyxcbiAgICAgIHsgc2Vjb25kLCBldmVuLCBhbGxCdXRGaXJzdEFuZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlID0gJ0Nob2ljZU9mUGFydHMnO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cbiAgICBcbiAgICBjb25zdCBzZWNvbmROb2RlID0gc2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBzZWNvbmROb2RlQ2hvaWNlTm9kZSA9IGlzTm9kZUNob2ljZU5vZGUoc2Vjb25kTm9kZSk7XG4gICAgXG4gICAgaWYgKHNlY29uZE5vZGVDaG9pY2VOb2RlKSB7XG4gICAgICBjb25zdCBldmVuTm9kZXMgPSBldmVuKG5vZGVzKTtcblxuICAgICAgbm9kZXMgPSBldmVuTm9kZXM7ICAvLy9cblxuICAgICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuICAgIH0gICAgXG4gICAgXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hvaWNlT2ZQYXJ0c1BhcnQsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1BhcnQ7XG4iXX0=