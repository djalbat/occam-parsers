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
      var index = context.getIndex(),
          savedIndex = index,
          ///
      parsed = this.rules.some(function (rule) {
        var parsed = rule.parse(input, context, productions);

        if (!parsed) {
          context.backtrack(savedIndex);

          return false;
        } else {
          return true;
        }
      });

      return parsed;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, terminalSymbolsRegExp, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJpbmRleCIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJiYWNrdHJhY2siLCJsaW5lIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYOztJQUVNQyxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsUUFBUUYsUUFBUUcsUUFBUixFQUFaO0FBQUEsVUFDSUMsYUFBYUYsS0FEakI7QUFBQSxVQUN3QjtBQUNwQkcsZUFBUyxLQUFLUixLQUFMLENBQVdTLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzFDLFlBQUlGLFNBQVNFLEtBQUtDLEtBQUwsQ0FBV1QsS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkJDLFdBQTNCLENBQWI7O0FBRUEsWUFBSSxDQUFDSSxNQUFMLEVBQWE7QUFDWEwsa0JBQVFTLFNBQVIsQ0FBa0JMLFVBQWxCOztBQUVBLGlCQUFPLEtBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVZZLENBRmI7O0FBY0EsYUFBT0MsTUFBUDtBQUNEOzs7NkJBRWVLLEksRUFBTUMscUIsRUFBdUJDLFEsRUFBVTtBQUNyRCxVQUFJaEIsT0FBT2MsS0FBS0csT0FBTCxFQUFYO0FBQUEsVUFDSWhCLFFBQVFhLEtBQUtJLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVIsT0FBT2QsS0FBS3VCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQVg7O0FBRUEsZUFBT0osSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlULE9BQU9jLFNBQVNoQixJQUFULENBTlg7QUFBQSxVQU9JcUIsYUFBYSxJQUFJdEIsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBT21CLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ4QixVQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgaW5kZXggPSBjb250ZXh0LmdldEluZGV4KCksXG4gICAgICAgIHNhdmVkSW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgIHBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICB2YXIgcGFyc2VkID0gcnVsZS5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0sXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iXX0=