'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
  function Parser(productions) {
    _classCallCheck(this, Parser);

    this.productions = productions;
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(input) {
      var index = 0,
          context = {
        index: index
      };

      var parsedInput = null,
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions),
            parsed = firstProduction.parse(input, context, this.productions);

        if (parsed) {
          parsedInput = input.slice(0, context.index);
        }
      }

      return parsedInput;
    }
  }]);

  return Parser;
}();

module.exports = Parser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJpbnB1dCIsImluZGV4IiwiY29udGV4dCIsInBhcnNlZElucHV0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsInBhcnNlZCIsInBhcnNlIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBTztBQUNYLFVBQUlDLFFBQVEsQ0FBWjtBQUFBLFVBQ0lDLFVBQVU7QUFDUkQsZUFBT0E7QUFEQyxPQURkOztBQUtBLFVBQUlFLGNBQWMsSUFBbEI7QUFBQSxVQUNJQyxvQkFBb0IsS0FBS0wsV0FBTCxDQUFpQk0sTUFEekM7O0FBR0EsVUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQUlFLGtCQUFrQkMsTUFBTSxLQUFLUixXQUFYLENBQXRCO0FBQUEsWUFDSVMsU0FBU0YsZ0JBQWdCRyxLQUFoQixDQUFzQlQsS0FBdEIsRUFBNkJFLE9BQTdCLEVBQXNDLEtBQUtILFdBQTNDLENBRGI7O0FBR0EsWUFBSVMsTUFBSixFQUFZO0FBQ1ZMLHdCQUFjSCxNQUFNVSxLQUFOLENBQVksQ0FBWixFQUFlUixRQUFRRCxLQUF2QixDQUFkO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRSxXQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCZCxNQUFqQjs7QUFFQSxTQUFTUyxLQUFULENBQWVNLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCkge1xuICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH07XG5cbiAgICB2YXIgcGFyc2VkSW5wdXQgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHBhcnNlZCA9IGZpcnN0UHJvZHVjdGlvbi5wYXJzZShpbnB1dCwgY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcGFyc2VkSW5wdXQgPSBpbnB1dC5zbGljZSgwLCBjb250ZXh0LmluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkSW5wdXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXI7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19