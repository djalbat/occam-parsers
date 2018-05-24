'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var bnf = require('../metaJSON/bnf'),
    Example = require('../example'),
    MetaJSONParser = require('../metaJSON/parser');

var MetaJSONLexer = lexers.MetaJSONLexer,
    entries = MetaJSONLexer.entries;

var MetaJSONExample = function () {
  function MetaJSONExample() {
    _classCallCheck(this, MetaJSONExample);
  }

  _createClass(MetaJSONExample, null, [{
    key: 'run',
    value: function run() {
      var content = '1+2/3',
          lexicalEntries = entries; ///

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return MetaJSONExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(MetaJSONLexer);

  Example.updateParser(function (bnf) {
    var metaJSONParser = MetaJSONParser.fromBNF(bnf),
        parser = metaJSONParser; //'

    return parser;
  });

  Example.updateParseTree(ruleName);
}

module.exports = MetaJSONExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tZXRhSlNPTi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiRXhhbXBsZSIsIk1ldGFKU09OUGFyc2VyIiwiTWV0YUpTT05MZXhlciIsImVudHJpZXMiLCJNZXRhSlNPTkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicnVsZU5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm1ldGFKU09OUGFyc2VyIiwiZnJvbUJORiIsInBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLGlCQUFSLENBQVo7QUFBQSxJQUNNRSxVQUFVRixRQUFRLFlBQVIsQ0FEaEI7QUFBQSxJQUVNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FGdkI7O0FBSU0sSUFBRUksYUFBRixHQUFvQkwsTUFBcEIsQ0FBRUssYUFBRjtBQUFBLElBQ0VDLE9BREYsR0FDY0QsYUFEZCxDQUNFQyxPQURGOztJQUdBQyxlOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVSxPQUFoQjtBQUFBLFVBQ01DLGlCQUFpQkgsT0FEdkIsQ0FEVyxDQUVxQjs7QUFFaENILGNBQVFPLEdBQVIsQ0FBWUYsT0FBWixFQUFxQkMsY0FBckIsRUFBcUNQLEdBQXJDLEVBQTBDUyxhQUExQzs7QUFFQUE7QUFDRDs7Ozs7O0FBR0gsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFNQyxXQUFXLElBQWpCOztBQUVBVCxVQUFRVSxXQUFSLENBQW9CUixhQUFwQjs7QUFFQUYsVUFBUVcsWUFBUixDQUFxQixVQUFTWixHQUFULEVBQWM7QUFDakMsUUFBTWEsaUJBQWlCWCxlQUFlWSxPQUFmLENBQXVCZCxHQUF2QixDQUF2QjtBQUFBLFFBQ01lLFNBQVNGLGNBRGYsQ0FEaUMsQ0FFRjs7QUFFL0IsV0FBT0UsTUFBUDtBQUNELEdBTEQ7O0FBT0FkLFVBQVFlLGVBQVIsQ0FBd0JOLFFBQXhCO0FBQ0Q7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUJiLGVBQWpCIiwiZmlsZSI6Im1ldGFKU09OLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi4vbWV0YUpTT04vYm5mJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgTWV0YUpTT05QYXJzZXIgPSByZXF1aXJlKCcuLi9tZXRhSlNPTi9wYXJzZXInKTtcblxuY29uc3QgeyBNZXRhSlNPTkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGVudHJpZXMgfSA9IE1ldGFKU09OTGV4ZXI7XG5cbmNsYXNzIE1ldGFKU09ORXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9ICcxKzIvMycsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cbiAgICBcbiAgICBFeGFtcGxlLnJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgYm5mLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xuICBjb25zdCBydWxlTmFtZSA9IG51bGw7XG4gIFxuICBFeGFtcGxlLnVwZGF0ZUxleGVyKE1ldGFKU09OTGV4ZXIpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGZ1bmN0aW9uKGJuZikge1xuICAgIGNvbnN0IG1ldGFKU09OUGFyc2VyID0gTWV0YUpTT05QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHBhcnNlciA9IG1ldGFKU09OUGFyc2VyOyAvLydcbiAgICBcbiAgICByZXR1cm4gcGFyc2VyOyBcbiAgfSk7XG4gIFxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWV0YUpTT05FeGFtcGxlO1xuIl19