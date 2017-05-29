'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var PrimitiveParser = require('../primitive/parser'),
    CommonParser = require('../common/parser');

var PrimitiveLexer = lexers.PrimitiveLexer,
    BasicLexer = lexers.BasicLexer;

var BasicParser = function (_CommonParser) {
      _inherits(BasicParser, _CommonParser);

      function BasicParser() {
            _classCallCheck(this, BasicParser);

            return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
      }

      _createClass(BasicParser, null, [{
            key: 'fromGrammar',
            value: function fromGrammar(grammar) {
                  var lines = PrimitiveLexer.linesFromGrammar(grammar),
                      significantTokenTypes = BasicLexer.significantTokenTypes(),
                      mappings = {},
                      productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
                      basicParser = new BasicParser(productions);

                  return basicParser;
            }
      }]);

      return BasicParser;
}(CommonParser);

module.exports = BasicParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlByaW1pdGl2ZVBhcnNlciIsIkNvbW1vblBhcnNlciIsIlByaW1pdGl2ZUxleGVyIiwiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiZ3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImJhc2ljUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FBeEI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLGtCQUFSLENBRHJCOztJQUdRRyxjLEdBQStCSixNLENBQS9CSSxjO0lBQWdCQyxVLEdBQWVMLE0sQ0FBZkssVTs7SUFFbEJDLFc7Ozs7Ozs7Ozs7O3dDQUNlQyxPLEVBQVM7QUFDMUIsc0JBQU1DLFFBQVFKLGVBQWVLLGdCQUFmLENBQWdDRixPQUFoQyxDQUFkO0FBQUEsc0JBQ01HLHdCQUF3QkwsV0FBV0sscUJBQVgsRUFEOUI7QUFBQSxzQkFFTUMsV0FBVyxFQUZqQjtBQUFBLHNCQUdNQyxjQUFjVixnQkFBZ0JXLEtBQWhCLENBQXNCTCxLQUF0QixFQUE2QkUscUJBQTdCLEVBQW9EQyxRQUFwRCxDQUhwQjtBQUFBLHNCQUlNRyxjQUFjLElBQUlSLFdBQUosQ0FBZ0JNLFdBQWhCLENBSnBCOztBQU1BLHlCQUFPRSxXQUFQO0FBQ0Q7Ozs7RUFUdUJYLFk7O0FBWTFCWSxPQUFPQyxPQUFQLEdBQWlCVixXQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBQcmltaXRpdmVQYXJzZXIgPSByZXF1aXJlKCcuLi9wcmltaXRpdmUvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNvbnN0IHsgUHJpbWl0aXZlTGV4ZXIsIEJhc2ljTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IGxpbmVzID0gUHJpbWl0aXZlTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBCYXNpY0xleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBQcmltaXRpdmVQYXJzZXIucGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljUGFyc2VyO1xuIl19