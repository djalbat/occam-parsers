'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    questionMark = specialSymbols.questionMark;

var OptionalPartPart = function () {
  function OptionalPartPart(part) {
    _classCallCheck(this, OptionalPartPart);

    this.part = part;
  }

  _createClass(OptionalPartPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          partParsed = partNodeOrNodes !== null;

      if (partParsed) {
        nodes = partNodeOrNodes;
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var operatorString = questionMark,
          ///
      partString = this.part.toString(),
          string = '' + partString + operatorString;

      return string;
    }
  }]);

  return OptionalPartPart;
}();

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJxdWVzdGlvbk1hcmsiLCJPcHRpb25hbFBhcnRQYXJ0IiwicGFydCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFTSxJQUFFQyxRQUFGLEdBQWVGLE1BQWYsQ0FBRUUsUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxZQUZGLEdBRW1CRCxjQUZuQixDQUVFQyxZQUZGOztJQUlBQyxnQjtBQUNKLDRCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxZLEVBQWM7QUFDakNBLHFCQUFlLEtBQWYsQ0FEaUMsQ0FDWDs7QUFFdEIsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQU1ILE9BQU8sS0FBS0ksT0FBTCxFQUFiO0FBQUEsVUFDTUMsa0JBQWtCTCxLQUFLTSxLQUFMLENBQVdMLGFBQVgsRUFBMEJDLFlBQTFCLENBRHhCO0FBQUEsVUFFTUssYUFBY0Ysb0JBQW9CLElBRnhDOztBQUlBLFVBQUlFLFVBQUosRUFBZ0I7QUFDZEosZ0JBQVFFLGVBQVI7QUFDRDs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1LLGlCQUFpQlYsWUFBdkI7QUFBQSxVQUFzQztBQUNoQ1csbUJBQWEsS0FBS1QsSUFBTCxDQUFVVSxRQUFWLEVBRG5CO0FBQUEsVUFFTUMsY0FBWUYsVUFBWixHQUF5QkQsY0FGL0I7O0FBSUEsYUFBT0csTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsZ0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQudG9TdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIl19