'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'parse',
    value: function parse(input, context, productions) {
      var index = context.index,
          parsed = this.rules.some(function (rule) {
        var parsed = rule.parse(input, context, productions);

        if (!parsed) {
          context.index = index;

          return false;
        } else {
          return true;
        }
      });

      return parsed;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, Parts, terminalSymbolsRegExp, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, Parts, terminalSymbolsRegExp);

        return rule;
      }),
          Node = mappings[name],
          production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJpbmRleCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJsaW5lIiwiUGFydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7O0lBRU1DLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxRQUFRRixRQUFRRSxLQUFwQjtBQUFBLFVBQ0lDLFNBQVMsS0FBS04sS0FBTCxDQUFXTyxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUMxQyxZQUFJRixTQUFTRSxLQUFLQyxLQUFMLENBQVdQLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFiOztBQUVBLFlBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hILGtCQUFRRSxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxpQkFBTyxLQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FWWSxDQURiOztBQWFBLGFBQU9DLE1BQVA7QUFDRDs7OzZCQUVlSSxJLEVBQU1DLEssRUFBT0MscUIsRUFBdUJDLFEsRUFBVTtBQUM1RCxVQUFJZCxPQUFPVyxLQUFLSSxPQUFMLEVBQVg7QUFBQSxVQUNJZCxRQUFRVSxLQUFLSyxrQkFBTCxDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQ3ZELFlBQUlSLE9BQU9aLEtBQUtxQixrQkFBTCxDQUF3QkQsY0FBeEIsRUFBd0NMLEtBQXhDLEVBQStDQyxxQkFBL0MsQ0FBWDs7QUFFQSxlQUFPSixJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVAsT0FBT1ksU0FBU2QsSUFBVCxDQU5YO0FBQUEsVUFPSW1CLGFBQWEsSUFBSXBCLFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBUGpCOztBQVNBLGFBQU9pQixVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdEIsVUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIGluZGV4ID0gY29udGV4dC5pbmRleCxcbiAgICAgICAgcGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBydWxlLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICBcbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIGNvbnRleHQuaW5kZXggPSBpbmRleDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgUGFydHMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgUGFydHMsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5nc1tuYW1lXSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiJdfQ==