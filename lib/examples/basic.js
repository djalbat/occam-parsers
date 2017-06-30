'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    extendedBNF = require('../basic/extendedBNF'),
    BasicParser = require('../basic/parser');

var BasicLexer = lexers.BasicLexer;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var content = '1+2/3',
          lexicalEntries = BasicLexer.entries; /// 

      Example.run(content, lexicalEntries, extendedBNF, updateHandler);

      updateHandler();
    }
  }]);

  return BasicExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BasicLexer);

  Example.updateParser(function (extendedBNF) {
    var basicParser = BasicParser.fromExtendedBNF(extendedBNF),
        parser = basicParser; //'

    return parser;
  });

  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImV4dGVuZGVkQk5GIiwiQmFzaWNQYXJzZXIiLCJCYXNpY0xleGVyIiwiQmFzaWNFeGFtcGxlIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZW50cmllcyIsInJ1biIsInVwZGF0ZUhhbmRsZXIiLCJydWxlTmFtZSIsInVwZGF0ZUxleGVyIiwidXBkYXRlUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJmcm9tRXh0ZW5kZWRCTkYiLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxzQkFBUixDQURwQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFJLFUsR0FBZUwsTSxDQUFmSyxVOztJQUVGQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVSxPQUFoQjtBQUFBLFVBQ01DLGlCQUFpQkgsV0FBV0ksT0FEbEMsQ0FEVyxDQUVnQzs7QUFFM0NQLGNBQVFRLEdBQVIsQ0FBWUgsT0FBWixFQUFxQkMsY0FBckIsRUFBcUNMLFdBQXJDLEVBQWtEUSxhQUFsRDs7QUFFQUE7QUFDRDs7Ozs7O0FBR0gsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFNQyxXQUFXLElBQWpCOztBQUVBVixVQUFRVyxXQUFSLENBQW9CUixVQUFwQjs7QUFFQUgsVUFBUVksWUFBUixDQUFxQixVQUFTWCxXQUFULEVBQXNCO0FBQ3pDLFFBQU1ZLGNBQWNYLFlBQVlZLGVBQVosQ0FBNEJiLFdBQTVCLENBQXBCO0FBQUEsUUFDTWMsU0FBU0YsV0FEZixDQUR5QyxDQUViOztBQUU1QixXQUFPRSxNQUFQO0FBQ0QsR0FMRDs7QUFPQWYsVUFBUWdCLGVBQVIsQ0FBd0JOLFFBQXhCO0FBQ0Q7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIGV4dGVuZGVkQk5GID0gcmVxdWlyZSgnLi4vYmFzaWMvZXh0ZW5kZWRCTkYnKSxcbiAgICAgIEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnMSsyLzMnLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gQmFzaWNMZXhlci5lbnRyaWVzOyAvLy8gXG4gICAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGV4dGVuZGVkQk5GLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xuICBjb25zdCBydWxlTmFtZSA9IG51bGw7XG4gIFxuICBFeGFtcGxlLnVwZGF0ZUxleGVyKEJhc2ljTGV4ZXIpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGZ1bmN0aW9uKGV4dGVuZGVkQk5GKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tRXh0ZW5kZWRCTkYoZXh0ZW5kZWRCTkYpLFxuICAgICAgICAgIHBhcnNlciA9IGJhc2ljUGFyc2VyOyAvLydcbiAgICBcbiAgICByZXR1cm4gcGFyc2VyOyBcbiAgfSk7XG4gIFxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNFeGFtcGxlO1xuIl19