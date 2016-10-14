'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('./example');

var mappings = {};

var GallinaExample = function (_Example) {
  _inherits(GallinaExample, _Example);

  function GallinaExample() {
    _classCallCheck(this, GallinaExample);

    return _possibleConstructorReturn(this, (GallinaExample.__proto__ || Object.getPrototypeOf(GallinaExample)).apply(this, arguments));
  }

  _createClass(GallinaExample, null, [{
    key: 'run',
    value: function run() {
      Example.updateParser(mappings);

      Example.contentTextArea.onChange(function () {
        Example.updateParseTree(GallinaLexer);
      });
    }
  }]);

  return GallinaExample;
}(Example);

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9nYWxsaW5hRXhhbXBsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiR2FsbGluYUxleGVyIiwiRXhhbXBsZSIsIm1hcHBpbmdzIiwiR2FsbGluYUV4YW1wbGUiLCJ1cGRhdGVQYXJzZXIiLCJjb250ZW50VGV4dEFyZWEiLCJvbkNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxlQUFlRixPQUFPRSxZQUQxQjs7QUFHQSxJQUFJQyxVQUFVRixRQUFRLFdBQVIsQ0FBZDs7QUFFQSxJQUFJRyxXQUFXLEVBQWY7O0lBRU1DLGM7Ozs7Ozs7Ozs7OzBCQUNTO0FBQ1hGLGNBQVFHLFlBQVIsQ0FBcUJGLFFBQXJCOztBQUVBRCxjQUFRSSxlQUFSLENBQXdCQyxRQUF4QixDQUFpQyxZQUFXO0FBQzFDTCxnQkFBUU0sZUFBUixDQUF3QlAsWUFBeEI7QUFDRCxPQUZEO0FBR0Q7Ozs7RUFQMEJDLE87O0FBVTdCTyxPQUFPQyxPQUFQLEdBQWlCTixjQUFqQiIsImZpbGUiOiJnYWxsaW5hRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEdhbGxpbmFMZXhlciA9IGxleGVycy5HYWxsaW5hTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlJyk7XG5cbnZhciBtYXBwaW5ncyA9IHt9O1xuXG5jbGFzcyBHYWxsaW5hRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VyKG1hcHBpbmdzKTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoR2FsbGluYUxleGVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFFeGFtcGxlO1xuIl19