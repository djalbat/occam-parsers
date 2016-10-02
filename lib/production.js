'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('./node/nonTerminal');

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
    value: function parse(context, productions) {
      context.saveIndex();

      var ruleNodes = undefined,
          parsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, productions);

        var parsed = ruleNodes !== null;

        if (!parsed) {
          context.backtrack();
        }

        return parsed;
      });

      var productionName = this.name,
          ///
      nodes = parsed ? this.Node.fromNodes(ruleNodes, productionName) : ///
      null;

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, specialSymbolsRegExp, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, specialSymbolsRegExp);

        return rule;
      }),
          Node = mappings[name] || NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJzYXZlSW5kZXgiLCJydWxlTm9kZXMiLCJ1bmRlZmluZWQiLCJwYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwiYmFja3RyYWNrIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlcyIsImZyb21Ob2RlcyIsImxpbmUiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFFBQVIsQ0FBWDtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSxvQkFBUixDQUR0Qjs7SUFHTUUsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDN0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7OzBCQUVLRyxPLEVBQVNDLFcsRUFBYTtBQUMxQkQsY0FBUUUsU0FBUjs7QUFFQSxVQUFJQyxZQUFZQyxTQUFoQjtBQUFBLFVBQ0lDLFNBQVMsS0FBS1AsS0FBTCxDQUFXUSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUN0Q0osb0JBQVlJLEtBQUtDLEtBQUwsQ0FBV1IsT0FBWCxFQUFvQkMsV0FBcEIsQ0FBWjs7QUFFQSxZQUFJSSxTQUFVRixjQUFjLElBQTVCOztBQUVBLFlBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hMLGtCQUFRUyxTQUFSO0FBQ0Q7O0FBRUQsZUFBT0osTUFBUDtBQUNELE9BVlEsQ0FEYjs7QUFhQSxVQUFJSyxpQkFBaUIsS0FBS2IsSUFBMUI7QUFBQSxVQUFnQztBQUM1QmMsY0FBUU4sU0FDRSxLQUFLTixJQUFMLENBQVVhLFNBQVYsQ0FBb0JULFNBQXBCLEVBQStCTyxjQUEvQixDQURGLEdBQ29EO0FBQ2hELFVBSGhCOztBQUtBLGFBQU9DLEtBQVA7QUFDRDs7OzZCQUVlRSxJLEVBQU1DLG9CLEVBQXNCQyxRLEVBQVU7QUFDcEQsVUFBSWxCLE9BQU9nQixLQUFLRyxPQUFMLEVBQVg7QUFBQSxVQUNJbEIsUUFBUWUsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJWCxPQUFPZCxLQUFLMEIsa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDSixvQkFBeEMsQ0FBWDs7QUFFQSxlQUFPUCxJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVIsT0FBT2dCLFNBQVNsQixJQUFULEtBQWtCRixlQU43QjtBQUFBLFVBTThDO0FBQzFDeUIsbUJBQWEsSUFBSXhCLFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBUGpCOztBQVNBLGFBQU9xQixVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCMUIsVUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICBjb250ZXh0LnNhdmVJbmRleCgpO1xuICAgIFxuICAgIHZhciBydWxlTm9kZXMgPSB1bmRlZmluZWQsXG4gICAgICAgIHBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIHBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICAgIFxuICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICBjb250ZXh0LmJhY2t0cmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICBub2RlcyA9IHBhcnNlZCA/XG4gICAgICAgICAgICAgICAgICB0aGlzLk5vZGUuZnJvbU5vZGVzKHJ1bGVOb2RlcywgcHJvZHVjdGlvbk5hbWUpIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCwgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0gfHwgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiJdfQ==