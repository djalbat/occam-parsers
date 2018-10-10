'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    BNFParser = require('../bnf/parser');

var BNFLexer = lexers.BNFLexer;

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      var bnf = BNFParser.bnf,
          content = bnf,
          lexicalEntries = BNFLexer.entries; ///

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return BNFExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BNFLexer);

  Example.updateParser(function (bnf) {
    var bnfParser = BNFParser.fromNothing(),
        parser = bnfParser; ///

    return parser;
  });

  var node = Example.updateParseTree(ruleName);

  BNFParser.generateRules(node);
}

module.exports = BNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9ibmYuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkV4YW1wbGUiLCJCTkZQYXJzZXIiLCJCTkZMZXhlciIsIkJORkV4YW1wbGUiLCJibmYiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwicnVuIiwidXBkYXRlSGFuZGxlciIsInJ1bGVOYW1lIiwidXBkYXRlTGV4ZXIiLCJ1cGRhdGVQYXJzZXIiLCJibmZQYXJzZXIiLCJmcm9tTm90aGluZyIsInBhcnNlciIsIm5vZGUiLCJ1cGRhdGVQYXJzZVRyZWUiLCJnZW5lcmF0ZVJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjs7SUFHUUcsUSxHQUFhSixNLENBQWJJLFE7O0lBRUZDLFU7Ozs7Ozs7MEJBQ1M7QUFDTCxVQUFFQyxHQUFGLEdBQVVILFNBQVYsQ0FBRUcsR0FBRjtBQUFBLFVBQ0FDLE9BREEsR0FDVUQsR0FEVjtBQUFBLFVBRUFFLGNBRkEsR0FFaUJKLFNBQVNLLE9BRjFCLENBREssQ0FHK0I7O0FBRTFDUCxjQUFRUSxHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDRixHQUFyQyxFQUEwQ0ssYUFBMUM7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsV0FBVyxJQUFqQjs7QUFFQVYsVUFBUVcsV0FBUixDQUFvQlQsUUFBcEI7O0FBRUFGLFVBQVFZLFlBQVIsQ0FBcUIsVUFBU1IsR0FBVCxFQUFjO0FBQ2pDLFFBQU1TLFlBQVlaLFVBQVVhLFdBQVYsRUFBbEI7QUFBQSxRQUNNQyxTQUFTRixTQURmLENBRGlDLENBRVA7O0FBRTFCLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1DLE9BQU9oQixRQUFRaUIsZUFBUixDQUF3QlAsUUFBeEIsQ0FBYjs7QUFFQVQsWUFBVWlCLGFBQVYsQ0FBd0JGLElBQXhCO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJqQixVQUFqQiIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJORkV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXIsXG4gICAgICAgICAgY29udGVudCA9IGJuZixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IEJORkxleGVyLmVudHJpZXM7ICAvLy9cbiAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBudWxsO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoQk5GTGV4ZXIpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGZ1bmN0aW9uKGJuZikge1xuICAgIGNvbnN0IGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlciA9IGJuZlBhcnNlcjsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfSk7XG5cbiAgY29uc3Qgbm9kZSA9IEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKTtcblxuICBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlO1xuIl19