'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'parse',
    value: function parse(tokens) {
      var documentNode = null,
          context = new Context(tokens),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var noWhitespace = false,
            firstProduction = first(this.productions),
            nodes = firstProduction.parse(context, this.productions, noWhitespace);

        if (nodes !== null) {
          var firstNode = first(nodes);

          documentNode = firstNode; ///
        }
      }

      return documentNode;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJkb2N1bWVudE5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJub1doaXRlc3BhY2UiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsIm5vZGVzIiwicGFyc2UiLCJmaXJzdE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDs7SUFFTUMsWTtBQUNKLHdCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7MEJBRUtDLE0sRUFBUTtBQUNaLFVBQUlDLGVBQWUsSUFBbkI7QUFBQSxVQUNJQyxVQUFVLElBQUlOLE9BQUosQ0FBWUksTUFBWixDQURkO0FBQUEsVUFFSUcsb0JBQW9CLEtBQUtKLFdBQUwsQ0FBaUJLLE1BRnpDOztBQUlBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFJRSxlQUFlLEtBQW5CO0FBQUEsWUFDSUMsa0JBQWtCQyxNQUFNLEtBQUtSLFdBQVgsQ0FEdEI7QUFBQSxZQUVJUyxRQUFRRixnQkFBZ0JHLEtBQWhCLENBQXNCUCxPQUF0QixFQUErQixLQUFLSCxXQUFwQyxFQUFpRE0sWUFBakQsQ0FGWjs7QUFJQSxZQUFJRyxVQUFVLElBQWQsRUFBb0I7QUFDbEIsY0FBSUUsWUFBWUgsTUFBTUMsS0FBTixDQUFoQjs7QUFFQVAseUJBQWVTLFNBQWYsQ0FIa0IsQ0FHUTtBQUMzQjtBQUNGOztBQUVELGFBQU9ULFlBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZU0sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBub2RlcyA9IGZpcnN0UHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgICBkb2N1bWVudE5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19