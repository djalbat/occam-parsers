'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var bnf = require('../bnf/bnf'),
    Example = require('../example'),
    BNFParser = require('../bnf/parser');

var BNFLexer = lexers.BNFLexer;

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      var content = bnf,
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

  var node = Example.updateParseTree(ruleName),
      mappings = {};

  BNFParser.generateRules(node, mappings);
}

module.exports = BNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9ibmYuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkV4YW1wbGUiLCJCTkZQYXJzZXIiLCJCTkZMZXhlciIsIkJORkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwicnVuIiwidXBkYXRlSGFuZGxlciIsInJ1bGVOYW1lIiwidXBkYXRlTGV4ZXIiLCJ1cGRhdGVQYXJzZXIiLCJibmZQYXJzZXIiLCJmcm9tTm90aGluZyIsInBhcnNlciIsIm5vZGUiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtYXBwaW5ncyIsImdlbmVyYXRlUnVsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsTUFBTUQsUUFBUSxZQUFSLENBQVo7QUFBQSxJQUNNRSxVQUFVRixRQUFRLFlBQVIsQ0FEaEI7QUFBQSxJQUVNRyxZQUFZSCxRQUFRLGVBQVIsQ0FGbEI7O0lBSVFJLFEsR0FBYUwsTSxDQUFiSyxROztJQUVGQyxVOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVUwsR0FBaEI7QUFBQSxVQUNNTSxpQkFBaUJILFNBQVNJLE9BRGhDLENBRFcsQ0FFK0I7O0FBRTFDTixjQUFRTyxHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDTixHQUFyQyxFQUEwQ1MsYUFBMUM7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsV0FBVyxJQUFqQjs7QUFFQVQsVUFBUVUsV0FBUixDQUFvQlIsUUFBcEI7O0FBRUFGLFVBQVFXLFlBQVIsQ0FBcUIsVUFBU1osR0FBVCxFQUFjO0FBQ2pDLFFBQU1hLFlBQVlYLFVBQVVZLFdBQVYsRUFBbEI7QUFBQSxRQUNNQyxTQUFTRixTQURmLENBRGlDLENBRVA7O0FBRTFCLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1DLE9BQU9mLFFBQVFnQixlQUFSLENBQXdCUCxRQUF4QixDQUFiO0FBQUEsTUFDTVEsV0FBVyxFQURqQjs7QUFHQWhCLFlBQVVpQixhQUFWLENBQXdCSCxJQUF4QixFQUE4QkUsUUFBOUI7QUFDRDs7QUFFREUsT0FBT0MsT0FBUCxHQUFpQmpCLFVBQWpCIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4uL2JuZi9ibmYnKSxcbiAgICAgIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQk5GRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGJuZixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IEJORkxleGVyLmVudHJpZXM7ICAvLy9cbiAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBudWxsO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoQk5GTGV4ZXIpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGZ1bmN0aW9uKGJuZikge1xuICAgIGNvbnN0IGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlciA9IGJuZlBhcnNlcjsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfSk7XG5cbiAgY29uc3Qgbm9kZSA9IEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKSxcbiAgICAgICAgbWFwcGluZ3MgPSB7fTtcblxuICBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZTtcbiJdfQ==