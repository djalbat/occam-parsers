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
    value: function fromLine(line, Parts, mappings) {
      var name = line.getName(),
          rules = line.mapExpressions(function (expression) {
        var rule = Rule.fromExpression(expression, Parts);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJpbmRleCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJsaW5lIiwiUGFydHMiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBFeHByZXNzaW9ucyIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7O0lBRU1DLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxRQUFRRixRQUFRRSxLQUFwQjtBQUFBLFVBQ0lDLFNBQVMsS0FBS04sS0FBTCxDQUFXTyxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUMxQyxZQUFJRixTQUFTRSxLQUFLQyxLQUFMLENBQVdQLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFiOztBQUVBLFlBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1hILGtCQUFRRSxLQUFSLEdBQWdCQSxLQUFoQjs7QUFFQSxpQkFBTyxLQUFQO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FWWSxDQURiOztBQWFBLGFBQU9DLE1BQVA7QUFDRDs7OzZCQUVlSSxJLEVBQU1DLEssRUFBT0MsUSxFQUFVO0FBQ3JDLFVBQUliLE9BQU9XLEtBQUtHLE9BQUwsRUFBWDtBQUFBLFVBQ0liLFFBQVFVLEtBQUtJLGNBQUwsQ0FBb0IsVUFBU0MsVUFBVCxFQUFxQjtBQUMvQyxZQUFJUCxPQUFPWixLQUFLb0IsY0FBTCxDQUFvQkQsVUFBcEIsRUFBZ0NKLEtBQWhDLENBQVg7O0FBRUEsZUFBT0gsSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlQLE9BQU9XLFNBQVNiLElBQVQsQ0FOWDtBQUFBLFVBT0lrQixhQUFhLElBQUluQixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPZ0IsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBpbmRleCA9IGNvbnRleHQuaW5kZXgsXG4gICAgICAgIHBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICB2YXIgcGFyc2VkID0gcnVsZS5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb250ZXh0LmluZGV4ID0gaW5kZXg7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIFBhcnRzLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBFeHByZXNzaW9ucyhmdW5jdGlvbihleHByZXNzaW9uKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIFBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzW25hbWVdLFxuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19