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
    key: 'fromNothing',
    value: function fromNothing() {
      var basicParser = BasicParser.fromGrammar(grammar);

      return basicParser;
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlByaW1pdGl2ZVBhcnNlciIsIkNvbW1vblBhcnNlciIsIlByaW1pdGl2ZUxleGVyIiwiQmFzaWNMZXhlciIsIkJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJmcm9tR3JhbW1hciIsImdyYW1tYXIiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUF4QjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsa0JBQVIsQ0FEckI7O0lBR1FHLGMsR0FBK0JKLE0sQ0FBL0JJLGM7SUFBZ0JDLFUsR0FBZUwsTSxDQUFmSyxVOztJQUVsQkMsVzs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLGNBQWNELFlBQVlFLFdBQVosQ0FBd0JDLE9BQXhCLENBQXBCOztBQUVBLGFBQU9GLFdBQVA7QUFDRDs7O2dDQUVrQkUsTyxFQUFTO0FBQzFCLFVBQU1DLFFBQVFOLGVBQWVPLGdCQUFmLENBQWdDRixPQUFoQyxDQUFkO0FBQUEsVUFDTUcsd0JBQXdCUCxXQUFXTyxxQkFBWCxFQUQ5QjtBQUFBLFVBRU1DLFdBQVcsRUFGakI7QUFBQSxVQUdNQyxjQUFjWixnQkFBZ0JhLEtBQWhCLENBQXNCTCxLQUF0QixFQUE2QkUscUJBQTdCLEVBQW9EQyxRQUFwRCxDQUhwQjtBQUFBLFVBSU1OLGNBQWMsSUFBSUQsV0FBSixDQUFnQlEsV0FBaEIsQ0FKcEI7O0FBTUEsYUFBT1AsV0FBUDtBQUNEOzs7O0VBZnVCSixZOztBQWtCMUJhLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFByaW1pdGl2ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBQcmltaXRpdmVMZXhlciwgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuICAgIFxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBsaW5lcyA9IFByaW1pdGl2ZUxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQmFzaWNMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gUHJpbWl0aXZlUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcbiJdfQ==