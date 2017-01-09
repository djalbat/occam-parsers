'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart() {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            parsed = productionNodes !== null;

        if (parsed) {
          nodes = productionNodes;

          for (;;) {
            productionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace);
            parsed = productionNodes !== null;

            if (parsed) {
              nodes = nodes.concat(productionNodes);
            } else {
              return nodes;
            }
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\+$/,
          Class = OneOrMorePartsPart,
          oneOrMorePartsPart = _get(OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

      return oneOrMorePartsPart;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsImdldE5vV2hpdGVzcGFjZSIsIm5vZGVzIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJjb25jYXQiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBMUI7O0lBRU1DLGtCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0EscUJBQWUsS0FBS0MsZUFBTCxFQUFmLENBRHdDLENBQ0E7O0FBRXhDLFVBQUlDLFFBQVEsSUFBWjtBQUFBLFVBQ0lDLDJCQUEyQixLQUFLQSx3QkFBTCxDQUE4QkosV0FBOUIsQ0FEL0I7O0FBR0EsVUFBSUksNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFlBQUlDLGtCQUFrQkQseUJBQXlCRSxLQUF6QixDQUErQlAsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQXFEQyxZQUFyRCxDQUF0QjtBQUFBLFlBQ0lNLFNBQVVGLG9CQUFvQixJQURsQzs7QUFHQSxZQUFJRSxNQUFKLEVBQVk7QUFDVkosa0JBQVFFLGVBQVI7O0FBRUEsbUJBQVE7QUFDTkEsOEJBQWtCRCx5QkFBeUJFLEtBQXpCLENBQStCUCxPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQWxCO0FBQ0FNLHFCQUFVRixvQkFBb0IsSUFBOUI7O0FBRUEsZ0JBQUlFLE1BQUosRUFBWTtBQUNWSixzQkFBUUEsTUFBTUssTUFBTixDQUFhSCxlQUFiLENBQVI7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBT0YsS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVpQk0sTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJWLFksRUFBYztBQUNwRixVQUFJVyxTQUFTLFlBQWI7QUFBQSxVQUNJQyxRQUFRZixrQkFEWjtBQUFBLFVBRUlnQixvSUFBc0NMLE1BQXRDLEVBQThDQyxxQkFBOUMsRUFBcUVDLHFCQUFyRSxFQUE0RlYsWUFBNUYsRUFBMEdXLE1BQTFHLEVBQWtIQyxLQUFsSCxDQUZKOztBQUlBLGFBQU9DLGtCQUFQO0FBQ0Q7Ozs7RUFwQzhCbEIsbUI7O0FBdUNqQ21CLE9BQU9DLE9BQVAsR0FBaUJsQixrQkFBakIiLCJmaWxlIjoib25lT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG4gICAgXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb25Ob2RlcztcblxuICAgICAgICBmb3IoOzspIHtcbiAgICAgICAgICBwcm9kdWN0aW9uTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG4gICAgICAgICAgcGFyc2VkID0gKHByb2R1Y3Rpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwcm9kdWN0aW9uTm9kZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFwrJC8sXG4gICAgICAgIENsYXNzID0gT25lT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb25lT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQYXJ0O1xuIl19