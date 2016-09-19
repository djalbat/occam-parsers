'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./parser/context');

var Parser = function () {
  function Parser(productions) {
    _classCallCheck(this, Parser);

    this.productions = productions;
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(input) {
      var parsedInput = null,
          context = new Context(),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions),
            parsed = firstProduction.parse(input, context, this.productions);

        if (parsed) {
          var index = context.getIndex();

          parsedInput = input.slice(0, index); ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJQYXJzZXIiLCJwcm9kdWN0aW9ucyIsImlucHV0IiwicGFyc2VkSW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsInBhcnNlZCIsInBhcnNlIiwiaW5kZXgiLCJnZXRJbmRleCIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxrQkFBUixDQUFkOztJQUVNQyxNO0FBQ0osa0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsSyxFQUFPO0FBQ1gsVUFBSUMsY0FBYyxJQUFsQjtBQUFBLFVBQ0lDLFVBQVUsSUFBSU4sT0FBSixFQURkO0FBQUEsVUFFSU8sb0JBQW9CLEtBQUtKLFdBQUwsQ0FBaUJLLE1BRnpDOztBQUlBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFJRSxrQkFBa0JDLE1BQU0sS0FBS1AsV0FBWCxDQUF0QjtBQUFBLFlBQ0lRLFNBQVNGLGdCQUFnQkcsS0FBaEIsQ0FBc0JSLEtBQXRCLEVBQTZCRSxPQUE3QixFQUFzQyxLQUFLSCxXQUEzQyxDQURiOztBQUdBLFlBQUlRLE1BQUosRUFBWTtBQUNWLGNBQUlFLFFBQVFQLFFBQVFRLFFBQVIsRUFBWjs7QUFFQVQsd0JBQWNELE1BQU1XLEtBQU4sQ0FBWSxDQUFaLEVBQWVGLEtBQWYsQ0FBZCxDQUhVLENBRzRCO0FBQ3ZDO0FBQ0Y7O0FBRUQsYUFBT1IsV0FBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQmYsTUFBakI7O0FBRUEsU0FBU1EsS0FBVCxDQUFlUSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vcGFyc2VyL2NvbnRleHQnKTtcblxuY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0KSB7XG4gICAgdmFyIHBhcnNlZElucHV0ID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KCksXG4gICAgICAgIHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgcGFyc2VkID0gZmlyc3RQcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB2YXIgaW5kZXggPSBjb250ZXh0LmdldEluZGV4KCk7XG4gICAgICAgIFxuICAgICAgICBwYXJzZWRJbnB1dCA9IGlucHV0LnNsaWNlKDAsIGluZGV4KTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWRJbnB1dDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=