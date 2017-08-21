'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalPart = require('../../part/nonTerminal');

var SequenceOfPartsPart = function (_NonTerminalPart) {
  _inherits(SequenceOfPartsPart, _NonTerminalPart);

  function SequenceOfPartsPart(type, part) {
    _classCallCheck(this, SequenceOfPartsPart);

    var _this = _possibleConstructorReturn(this, (SequenceOfPartsPart.__proto__ || Object.getPrototypeOf(SequenceOfPartsPart)).call(this, type));

    _this.part = part;
    return _this;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'asString',
    value: function asString(operatorString) {
      var partString = this.part.asString(),
          string = '' + partString + operatorString;

      return string;
    }
  }]);

  return SequenceOfPartsPart;
}(NonTerminalPart);

module.exports = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0eXBlIiwicGFydCIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsd0JBQVIsQ0FBeEI7O0lBRU1DLG1COzs7QUFDSiwrQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0I7QUFBQTs7QUFBQSwwSUFDaEJELElBRGdCOztBQUd0QixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIc0I7QUFJdkI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRQyxjLEVBQWdCO0FBQ3ZCLFVBQU1DLGFBQWEsS0FBS0YsSUFBTCxDQUFVRyxRQUFWLEVBQW5CO0FBQUEsVUFDTUMsY0FBWUYsVUFBWixHQUF5QkQsY0FEL0I7O0FBR0EsYUFBT0csTUFBUDtBQUNEOzs7O0VBaEIrQlIsZTs7QUFtQmxDUyxPQUFPQyxPQUFQLEdBQWlCUixtQkFBakIiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG4gIFxuICBhc1N0cmluZyhvcGVyYXRvclN0cmluZykge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0O1xuIl19