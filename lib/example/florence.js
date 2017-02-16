'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var FlorenceParser = require('../florence/parser'),
    florenceGrammar = require('../florence/grammar');

var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

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

      Example.onContentTextAreaKeyUp(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJGbG9yZW5jZUxleGVyIiwiRXhhbXBsZSIsIkZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VHcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwiZmxvcmVuY2VQYXJzZXIiLCJGbG9yZW5jZUV4YW1wbGUiLCJncmFtbWFyVGV4dEFyZWFWYWx1ZSIsInNldEdyYW1tYXJUZXh0QXJlYVZhbHVlIiwidXBkYXRlIiwib25Db250ZW50VGV4dEFyZWFLZXlVcCIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGdCQUFnQkYsT0FBT0UsYUFEM0I7O0FBR0EsSUFBSUMsVUFBVUYsUUFBUSxZQUFSLENBQWQ7O0FBRUEsSUFBSUcsaUJBQWlCSCxRQUFRLG9CQUFSLENBQXJCO0FBQUEsSUFDSUksa0JBQWtCSixRQUFRLHFCQUFSLENBRHRCOztBQUdBLElBQUlLLGdCQUFnQkosY0FBY0ssV0FBZCxFQUFwQjtBQUFBLElBQ0lDLGlCQUFpQkosZUFBZUcsV0FBZixFQURyQjs7SUFHTUUsZTs7Ozs7OzswQkFDUztBQUNYLFVBQUlDLHVCQUF1QkwsZUFBM0IsQ0FEVyxDQUNpQzs7QUFFNUNGLGNBQVFRLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFFOztBQUVBVCxjQUFRVSxzQkFBUixDQUErQixZQUFXO0FBQ3hDRDtBQUNELE9BRkQ7QUFHRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQlQsVUFBUVcsZUFBUixDQUF3QlIsYUFBeEIsRUFBdUNFLGNBQXZDO0FBQ0Q7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUJQLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKTtcblxudmFyIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyksXG4gICAgZmxvcmVuY2VHcmFtbWFyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvZ3JhbW1hcicpO1xuXG52YXIgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgdmFyIGdyYW1tYXJUZXh0QXJlYVZhbHVlID0gZmxvcmVuY2VHcmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhS2V5VXAoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=