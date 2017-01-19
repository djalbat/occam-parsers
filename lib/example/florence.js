'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var FlorenceParser = require('../florence/parser'),
    florenceGrammar = require('../florence/grammar');

// var florenceLexer = FlorenceLexer.fromNothing(),
//     florenceParser = FlorenceParser.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextAreaValue = florenceGrammar; ///

      Example.setGrammarTextAreaValue(grammarTextAreaValue);

      update();

      Example.onContentTextAreaChange(function () {
        update();
      });
    }
  }]);

  return FlorenceExample;
}();

function update() {
  Example.updateParseTree(florenceLexer, florenceParser);
}

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiRXhhbXBsZSIsIkZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VHcmFtbWFyIiwiRmxvcmVuY2VFeGFtcGxlIiwiZ3JhbW1hclRleHRBcmVhVmFsdWUiLCJzZXRHcmFtbWFyVGV4dEFyZWFWYWx1ZSIsInVwZGF0ZSIsIm9uQ29udGVudFRleHRBcmVhQ2hhbmdlIiwidXBkYXRlUGFyc2VUcmVlIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsZ0JBQWdCRixPQUFPRSxhQUQzQjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFlBQVIsQ0FBZDs7QUFFQSxJQUFJRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FBckI7QUFBQSxJQUNJSSxrQkFBa0JKLFFBQVEscUJBQVIsQ0FEdEI7O0FBR0E7QUFDQTs7SUFFTUssZTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkYsZUFBM0IsQ0FEVyxDQUNpQzs7QUFFNUNGLGNBQVFLLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBTixjQUFRTyx1QkFBUixDQUFnQyxZQUFXO0FBQ3pDRDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQk4sVUFBUVEsZUFBUixDQUF3QkMsYUFBeEIsRUFBdUNDLGNBQXZDO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJULGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyksXG4gICAgZmxvcmVuY2VHcmFtbWFyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvZ3JhbW1hcicpO1xuXG4vLyB2YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbi8vICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZmxvcmVuY2VHcmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIl19