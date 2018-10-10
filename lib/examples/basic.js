'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    BasicParser = require('../basic/parser');

var BasicLexer = lexers.BasicLexer,
    entries = BasicLexer.entries;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var bnf = BasicParser.bnf,
          content = '1+2/3',
          lexicalEntries = entries; ///

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return BasicExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BasicLexer);

  Example.updateParser(function (bnf) {
    var basicParser = BasicParser.fromBNF(bnf),
        parser = basicParser; //'

    return parser;
  });

  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsIkJhc2ljUGFyc2VyIiwiQmFzaWNMZXhlciIsImVudHJpZXMiLCJCYXNpY0V4YW1wbGUiLCJibmYiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicnVsZU5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImJhc2ljUGFyc2VyIiwiZnJvbUJORiIsInBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRSxjQUFjRixRQUFRLGlCQUFSLENBRHBCOztBQUdNLElBQUVHLFVBQUYsR0FBaUJKLE1BQWpCLENBQUVJLFVBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NELFVBRGQsQ0FDRUMsT0FERjs7SUFHQUMsWTs7Ozs7OzswQkFDUztBQUNMLFVBQUVDLEdBQUYsR0FBVUosV0FBVixDQUFFSSxHQUFGO0FBQUEsVUFDQUMsT0FEQSxHQUNVLE9BRFY7QUFBQSxVQUVBQyxjQUZBLEdBRWlCSixPQUZqQixDQURLLENBR3FCOztBQUVoQ0gsY0FBUVEsR0FBUixDQUFZRixPQUFaLEVBQXFCQyxjQUFyQixFQUFxQ0YsR0FBckMsRUFBMENJLGFBQTFDOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLFdBQVcsSUFBakI7O0FBRUFWLFVBQVFXLFdBQVIsQ0FBb0JULFVBQXBCOztBQUVBRixVQUFRWSxZQUFSLENBQXFCLFVBQVNQLEdBQVQsRUFBYztBQUNqQyxRQUFNUSxjQUFjWixZQUFZYSxPQUFaLENBQW9CVCxHQUFwQixDQUFwQjtBQUFBLFFBQ01VLFNBQVNGLFdBRGYsQ0FEaUMsQ0FFTDs7QUFFNUIsV0FBT0UsTUFBUDtBQUNELEdBTEQ7O0FBT0FmLFVBQVFnQixlQUFSLENBQXdCTixRQUF4QjtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBCYXNpY1BhcnNlciA9IHJlcXVpcmUoJy4uL2Jhc2ljL3BhcnNlcicpO1xuXG5jb25zdCB7IEJhc2ljTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQmFzaWNQYXJzZXIsXG4gICAgICAgICAgY29udGVudCA9ICcxKzIvMycsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gbnVsbDtcbiAgXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoQmFzaWNMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oYm5mKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gYmFzaWNQYXJzZXI7IC8vJ1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7IFxuICB9KTtcbiAgXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG4iXX0=