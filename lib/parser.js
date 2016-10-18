'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    DocumentNode = require('./node/document');

var Parser = function () {
  function Parser(productions) {
    _classCallCheck(this, Parser);

    this.productions = productions;
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(tokens) {
      var documentNode = new DocumentNode(),
          context = new Context(tokens),
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var noWhitespace = false,
            firstProduction = first(this.productions),
            nodes = firstProduction.parse(context, this.productions, noWhitespace);

        if (nodes !== null) {
          var childNodes = nodes; ///

          documentNode.addChildNodes(childNodes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZXIuanMiXSwibmFtZXMiOlsiQ29udGV4dCIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJQYXJzZXIiLCJwcm9kdWN0aW9ucyIsInRva2VucyIsImRvY3VtZW50Tm9kZSIsImNvbnRleHQiLCJwcm9kdWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm5vV2hpdGVzcGFjZSIsImZpcnN0UHJvZHVjdGlvbiIsImZpcnN0Iiwibm9kZXMiLCJwYXJzZSIsImNoaWxkTm9kZXMiLCJhZGRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJQyxlQUFlRCxRQUFRLGlCQUFSLENBRG5COztJQUdNRSxNO0FBQ0osa0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsTSxFQUFRO0FBQ1osVUFBSUMsZUFBZSxJQUFJSixZQUFKLEVBQW5CO0FBQUEsVUFDSUssVUFBVSxJQUFJUCxPQUFKLENBQVlLLE1BQVosQ0FEZDtBQUFBLFVBRUlHLG9CQUFvQixLQUFLSixXQUFMLENBQWlCSyxNQUZ6Qzs7QUFJQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsZUFBZSxLQUFuQjtBQUFBLFlBQ0lDLGtCQUFrQkMsTUFBTSxLQUFLUixXQUFYLENBRHRCO0FBQUEsWUFFSVMsUUFBUUYsZ0JBQWdCRyxLQUFoQixDQUFzQlAsT0FBdEIsRUFBK0IsS0FBS0gsV0FBcEMsRUFBaURNLFlBQWpELENBRlo7O0FBSUEsWUFBSUcsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGNBQUlFLGFBQWFGLEtBQWpCLENBRGtCLENBQ007O0FBRXhCUCx1QkFBYVUsYUFBYixDQUEyQkQsVUFBM0I7QUFDRDtBQUNGOztBQUVELGFBQU9ULFlBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcbiAgICBEb2N1bWVudE5vZGUgPSByZXF1aXJlKCcuL25vZGUvZG9jdW1lbnQnKTtcblxuY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBkb2N1bWVudE5vZGUgPSBuZXcgRG9jdW1lbnROb2RlKCksXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMpLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIG5vZGVzID0gZmlyc3RQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzOyAvLy9cblxuICAgICAgICBkb2N1bWVudE5vZGUuYWRkQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==