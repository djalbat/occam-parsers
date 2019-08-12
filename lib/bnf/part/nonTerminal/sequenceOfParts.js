'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
  }, {
    key: 'clone',
    value: function clone(Part) {
      return _get(SequenceOfPartsPart.prototype.__proto__ || Object.getPrototypeOf(SequenceOfPartsPart.prototype), 'clone', this).call(this, Part, this.part);
    }
  }]);

  return SequenceOfPartsPart;
}(NonTerminalPart);

module.exports = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0eXBlIiwicGFydCIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsd0JBQVIsQ0FBeEI7O0lBRU1DLG1COzs7QUFDSiwrQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0I7QUFBQTs7QUFBQSwwSUFDaEJELElBRGdCOztBQUd0QixVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFIc0I7QUFJdkI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRQyxjLEVBQWdCO0FBQ3ZCLFVBQU1DLGFBQWEsS0FBS0YsSUFBTCxDQUFVRyxRQUFWLEVBQW5CO0FBQUEsVUFDTUMsY0FBWUYsVUFBWixHQUF5QkQsY0FEL0I7O0FBR0EsYUFBT0csTUFBUDtBQUNEOzs7MEJBRUtDLEksRUFBTTtBQUFFLDZJQUFtQkEsSUFBbkIsRUFBeUIsS0FBS0wsSUFBOUI7QUFBc0M7Ozs7RUFsQnBCSixlOztBQXFCbENVLE9BQU9DLE9BQVAsR0FBaUJULG1CQUFqQiIsImZpbGUiOiJzZXF1ZW5jZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKFBhcnQpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFBhcnQsIHRoaXMucGFydCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0O1xuIl19