'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
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
      var bnf = MetaJSONParser.bnf,
          content = '1+2/3',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tZXRhSlNPTi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsIk1ldGFKU09OUGFyc2VyIiwiTWV0YUpTT05MZXhlciIsImVudHJpZXMiLCJNZXRhSlNPTkV4YW1wbGUiLCJibmYiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicnVsZU5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm1ldGFKU09OUGFyc2VyIiwiZnJvbUJORiIsInBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FEdkI7O0FBR00sSUFBRUcsYUFBRixHQUFvQkosTUFBcEIsQ0FBRUksYUFBRjtBQUFBLElBQ0VDLE9BREYsR0FDY0QsYUFEZCxDQUNFQyxPQURGOztJQUdBQyxlOzs7Ozs7OzBCQUNTO0FBQ0wsVUFBRUMsR0FBRixHQUFVSixjQUFWLENBQUVJLEdBQUY7QUFBQSxVQUNBQyxPQURBLEdBQ1UsT0FEVjtBQUFBLFVBRUFDLGNBRkEsR0FFaUJKLE9BRmpCLENBREssQ0FHcUI7O0FBRWhDSCxjQUFRUSxHQUFSLENBQVlGLE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDRixHQUFyQyxFQUEwQ0ksYUFBMUM7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsV0FBVyxJQUFqQjs7QUFFQVYsVUFBUVcsV0FBUixDQUFvQlQsYUFBcEI7O0FBRUFGLFVBQVFZLFlBQVIsQ0FBcUIsVUFBU1AsR0FBVCxFQUFjO0FBQ2pDLFFBQU1RLGlCQUFpQlosZUFBZWEsT0FBZixDQUF1QlQsR0FBdkIsQ0FBdkI7QUFBQSxRQUNNVSxTQUFTRixjQURmLENBRGlDLENBRUY7O0FBRS9CLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BZixVQUFRZ0IsZUFBUixDQUF3Qk4sUUFBeEI7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQmQsZUFBakIiLCJmaWxlIjoibWV0YUpTT04uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgTWV0YUpTT05QYXJzZXIgPSByZXF1aXJlKCcuLi9tZXRhSlNPTi9wYXJzZXInKTtcblxuY29uc3QgeyBNZXRhSlNPTkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGVudHJpZXMgfSA9IE1ldGFKU09OTGV4ZXI7XG5cbmNsYXNzIE1ldGFKU09ORXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgeyBibmYgfSA9IE1ldGFKU09OUGFyc2VyLFxuICAgICAgICAgIGNvbnRlbnQgPSAnMSsyLzMnLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG4gICAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBudWxsO1xuICBcbiAgRXhhbXBsZS51cGRhdGVMZXhlcihNZXRhSlNPTkxleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihibmYpIHtcbiAgICBjb25zdCBtZXRhSlNPTlBhcnNlciA9IE1ldGFKU09OUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBtZXRhSlNPTlBhcnNlcjsgLy8nXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjsgXG4gIH0pO1xuICBcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1ldGFKU09ORXhhbXBsZTtcbiJdfQ==