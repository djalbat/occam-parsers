'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('./example');

var mappings = {};

var FlorenceExample = function (_Example) {
  _inherits(FlorenceExample, _Example);

  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);

    return _possibleConstructorReturn(this, (FlorenceExample.__proto__ || Object.getPrototypeOf(FlorenceExample)).apply(this, arguments));
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      Example.updateParser(mappings);

      Example.contentTextArea.onChange(function () {
        Example.updateParseTree(FlorenceLexer);
      });
    }
  }]);

  return FlorenceExample;
}(Example);

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbG9yZW5jZUV4YW1wbGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkZsb3JlbmNlTGV4ZXIiLCJFeGFtcGxlIiwibWFwcGluZ3MiLCJGbG9yZW5jZUV4YW1wbGUiLCJ1cGRhdGVQYXJzZXIiLCJjb250ZW50VGV4dEFyZWEiLCJvbkNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxnQkFBZ0JGLE9BQU9FLGFBRDNCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsV0FBUixDQUFkOztBQUVBLElBQUlHLFdBQVcsRUFBZjs7SUFFTUMsZTs7Ozs7Ozs7Ozs7MEJBQ1M7QUFDWEYsY0FBUUcsWUFBUixDQUFxQkYsUUFBckI7O0FBRUFELGNBQVFJLGVBQVIsQ0FBd0JDLFFBQXhCLENBQWlDLFlBQVc7QUFDMUNMLGdCQUFRTSxlQUFSLENBQXdCUCxhQUF4QjtBQUNELE9BRkQ7QUFHRDs7OztFQVAyQkMsTzs7QUFVOUJPLE9BQU9DLE9BQVAsR0FBaUJOLGVBQWpCIiwiZmlsZSI6ImZsb3JlbmNlRXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUnKTtcblxudmFyIG1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSBleHRlbmRzIEV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VyKG1hcHBpbmdzKTtcblxuICAgIEV4YW1wbGUuY29udGVudFRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoRmxvcmVuY2VMZXhlcik7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=