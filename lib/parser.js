'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

var Parser = function () {
  function Parser(productions) {
    _classCallCheck(this, Parser);

    this.productions = productions;
  }

  _createClass(Parser, [{
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

  return Parser;
}();

module.exports = Parser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJQYXJzZXIiLCJwcm9kdWN0aW9ucyIsInRva2VucyIsImRvY3VtZW50Tm9kZSIsImNvbnRleHQiLCJwcm9kdWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm5vV2hpdGVzcGFjZSIsImZpcnN0UHJvZHVjdGlvbiIsImZpcnN0Iiwibm9kZXMiLCJwYXJzZSIsImZpcnN0Tm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxNO0FBQ0osa0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsTSxFQUFRO0FBQ1osVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLFVBQVUsSUFBSU4sT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxVQUVJRyxvQkFBb0IsS0FBS0osV0FBTCxDQUFpQkssTUFGekM7O0FBSUEsVUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQUlFLGVBQWUsS0FBbkI7QUFBQSxZQUNJQyxrQkFBa0JDLE1BQU0sS0FBS1IsV0FBWCxDQUR0QjtBQUFBLFlBRUlTLFFBQVFGLGdCQUFnQkcsS0FBaEIsQ0FBc0JQLE9BQXRCLEVBQStCLEtBQUtILFdBQXBDLEVBQWlETSxZQUFqRCxDQUZaOztBQUlBLFlBQUlHLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixjQUFJRSxZQUFZSCxNQUFNQyxLQUFOLENBQWhCOztBQUVBUCx5QkFBZVMsU0FBZixDQUhrQixDQUdRO0FBQzNCO0FBQ0Y7O0FBRUQsYUFBT1QsWUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmQsTUFBakI7O0FBRUEsU0FBU1MsS0FBVCxDQUFlTSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpO1xuXG5jbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgcGFyc2UodG9rZW5zKSB7XG4gICAgdmFyIGRvY3VtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMpLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIG5vZGVzID0gZmlyc3RQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICAgIGRvY3VtZW50Tm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50Tm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=