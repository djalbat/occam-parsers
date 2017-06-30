'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    extendedBNF = require('../extendedBNF/extendedBNF'),
    ExtendedBNFParser = require('../extendedBNF/parser');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;

var ExtendedBNFExample = function () {
  function ExtendedBNFExample() {
    _classCallCheck(this, ExtendedBNFExample);
  }

  _createClass(ExtendedBNFExample, null, [{
    key: 'run',
    value: function run() {
      var content = extendedBNF,
          lexicalEntries = ExtendedBNFLexer.entries; ///

      Example.run(content, lexicalEntries, extendedBNF, updateHandler);

      updateHandler();
    }
  }]);

  return ExtendedBNFExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(ExtendedBNFLexer);

  Example.updateParser(function (extendedBNF) {
    var extendedBNFParser = ExtendedBNFParser.fromNothing(),
        parser = extendedBNFParser; ///

    return parser;
  });

  var node = Example.updateParseTree(ruleName);

  ExtendedBNFParser.generateRules(node);
}

module.exports = ExtendedBNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9leHRlbmRlZEJORi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImV4dGVuZGVkQk5GIiwiRXh0ZW5kZWRCTkZQYXJzZXIiLCJFeHRlbmRlZEJORkxleGVyIiwiRXh0ZW5kZWRCTkZFeGFtcGxlIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZW50cmllcyIsInJ1biIsInVwZGF0ZUhhbmRsZXIiLCJydWxlTmFtZSIsInVwZGF0ZUxleGVyIiwidXBkYXRlUGFyc2VyIiwiZXh0ZW5kZWRCTkZQYXJzZXIiLCJmcm9tTm90aGluZyIsInBhcnNlciIsIm5vZGUiLCJ1cGRhdGVQYXJzZVRyZWUiLCJnZW5lcmF0ZVJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFVBQVVELFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01FLGNBQWNGLFFBQVEsNEJBQVIsQ0FEcEI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7O0lBSVFJLGdCLEdBQXFCTCxNLENBQXJCSyxnQjs7SUFFRkMsa0I7Ozs7Ozs7MEJBQ1M7QUFDWCxVQUFNQyxVQUFVSixXQUFoQjtBQUFBLFVBQ01LLGlCQUFpQkgsaUJBQWlCSSxPQUR4QyxDQURXLENBRXVDOztBQUVsRFAsY0FBUVEsR0FBUixDQUFZSCxPQUFaLEVBQXFCQyxjQUFyQixFQUFxQ0wsV0FBckMsRUFBa0RRLGFBQWxEOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLFdBQVcsSUFBakI7O0FBRUFWLFVBQVFXLFdBQVIsQ0FBb0JSLGdCQUFwQjs7QUFFQUgsVUFBUVksWUFBUixDQUFxQixVQUFTWCxXQUFULEVBQXNCO0FBQ3pDLFFBQU1ZLG9CQUFvQlgsa0JBQWtCWSxXQUFsQixFQUExQjtBQUFBLFFBQ01DLFNBQVNGLGlCQURmLENBRHlDLENBRVA7O0FBRWxDLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1DLE9BQU9oQixRQUFRaUIsZUFBUixDQUF3QlAsUUFBeEIsQ0FBYjs7QUFFQVIsb0JBQWtCZ0IsYUFBbEIsQ0FBZ0NGLElBQWhDO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJoQixrQkFBakIiLCJmaWxlIjoiZXh0ZW5kZWRCTkYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZXh0ZW5kZWRCTkYgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9leHRlbmRlZEJORicpLFxuICAgICAgRXh0ZW5kZWRCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9wYXJzZXInKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEV4dGVuZGVkQk5GRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGV4dGVuZGVkQk5GLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gRXh0ZW5kZWRCTkZMZXhlci5lbnRyaWVzOyAgLy8vXG4gIFxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBleHRlbmRlZEJORiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBudWxsO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoRXh0ZW5kZWRCTkZMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oZXh0ZW5kZWRCTkYpIHtcbiAgICBjb25zdCBleHRlbmRlZEJORlBhcnNlciA9IEV4dGVuZGVkQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gZXh0ZW5kZWRCTkZQYXJzZXI7IC8vL1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7XG4gIH0pO1xuXG4gIGNvbnN0IG5vZGUgPSBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG5cbiAgRXh0ZW5kZWRCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRlZEJORkV4YW1wbGU7XG4iXX0=