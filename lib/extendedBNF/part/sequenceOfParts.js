'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(part) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.part = part;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var partString = this.part.toString(),
          string = '' + partString + operatorString;

      return string;
    }
  }], [{
    key: 'fromPartAndQuantifier',
    value: function fromPartAndQuantifier(part, quantifier, Parts) {
      var sequenceOfPartsPart = void 0;

      switch (quantifier) {
        case '?':
          var OptionalPartPart = Parts['OptionalPartPart'],
              optionalPartPart = new OptionalPartPart(part);

          sequenceOfPartsPart = optionalPartPart;
          break;

        case '*':
          var ZeroOrMorePartsPart = Parts['ZeroOrMorePartsPart'],
              zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

          sequenceOfPartsPart = zeroOrMorePartsPart;
          break;

        case '+':
          var OneOrMorePartsPart = Parts['OneOrMorePartsPart'],
              oneOrMorePartsPart = new OneOrMorePartsPart(part);

          sequenceOfPartsPart = oneOrMorePartsPart;
          break;
      }

      return sequenceOfPartsPart;
    }
  }, {
    key: 'fromPartAndQuantifiers',
    value: function fromPartAndQuantifiers(part, quantifiers, Parts) {
      var quantifier = quantifiers.shift(),
          quantifiersLength = quantifiers.length;

      var sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifier(part, quantifier, Parts);

      if (quantifiersLength > 0) {
        part = sequenceOfPartsPart; ///

        sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);
      }

      return sequenceOfPartsPart;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydCIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsInRvU3RyaW5nIiwic3RyaW5nIiwicXVhbnRpZmllciIsIlBhcnRzIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIk9wdGlvbmFsUGFydFBhcnQiLCJvcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJxdWFudGlmaWVycyIsInNoaWZ0IiwicXVhbnRpZmllcnNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tUGFydEFuZFF1YW50aWZpZXIiLCJmcm9tUGFydEFuZFF1YW50aWZpZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxtQjtBQUNKLCtCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs2QkFFUUMsYyxFQUFnQjtBQUN2QixVQUFNQyxhQUFhLEtBQUtGLElBQUwsQ0FBVUcsUUFBVixFQUFuQjtBQUFBLFVBQ01DLGNBQVlGLFVBQVosR0FBeUJELGNBRC9COztBQUdBLGFBQU9HLE1BQVA7QUFDRDs7OzBDQUU0QkosSSxFQUFNSyxVLEVBQVlDLEssRUFBTztBQUNwRCxVQUFJQyw0QkFBSjs7QUFFQSxjQUFRRixVQUFSO0FBQ0UsYUFBSyxHQUFMO0FBQ0UsY0FBTUcsbUJBQW1CRixNQUFNLGtCQUFOLENBQXpCO0FBQUEsY0FDTUcsbUJBQW1CLElBQUlELGdCQUFKLENBQXFCUixJQUFyQixDQUR6Qjs7QUFHQU8sZ0NBQXNCRSxnQkFBdEI7QUFDQTs7QUFFRixhQUFLLEdBQUw7QUFDRSxjQUFNQyxzQkFBc0JKLE1BQU0scUJBQU4sQ0FBNUI7QUFBQSxjQUNNSyxzQkFBc0IsSUFBSUQsbUJBQUosQ0FBd0JWLElBQXhCLENBRDVCOztBQUdBTyxnQ0FBc0JJLG1CQUF0QjtBQUNBOztBQUVGLGFBQUssR0FBTDtBQUNFLGNBQU1DLHFCQUFxQk4sTUFBTSxvQkFBTixDQUEzQjtBQUFBLGNBQ01PLHFCQUFxQixJQUFJRCxrQkFBSixDQUF1QlosSUFBdkIsQ0FEM0I7O0FBR0FPLGdDQUFzQk0sa0JBQXRCO0FBQ0E7QUFwQko7O0FBdUJBLGFBQU9OLG1CQUFQO0FBQ0Q7OzsyQ0FFNkJQLEksRUFBTWMsVyxFQUFhUixLLEVBQU87QUFDdEQsVUFBTUQsYUFBYVMsWUFBWUMsS0FBWixFQUFuQjtBQUFBLFVBQ01DLG9CQUFvQkYsWUFBWUcsTUFEdEM7O0FBR0EsVUFBSVYsc0JBQXNCUixvQkFBb0JtQixxQkFBcEIsQ0FBMENsQixJQUExQyxFQUFnREssVUFBaEQsRUFBNERDLEtBQTVELENBQTFCOztBQUVBLFVBQUlVLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QmhCLGVBQU9PLG1CQUFQLENBRHlCLENBQ0c7O0FBRTVCQSw4QkFBc0JSLG9CQUFvQm9CLHNCQUFwQixDQUEyQ25CLElBQTNDLEVBQWlEYyxXQUFqRCxFQUE4RFIsS0FBOUQsQ0FBdEI7QUFDRDs7QUFFRCxhQUFPQyxtQkFBUDtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsT0FBUCxHQUFpQnRCLG1CQUFqQiIsImZpbGUiOiJzZXF1ZW5jZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuICBcbiAgdG9TdHJpbmcob3BlcmF0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LnRvU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyLCBQYXJ0cykge1xuICAgIGxldCBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuICBcbiAgICBzd2l0Y2ggKHF1YW50aWZpZXIpIHtcbiAgICAgIGNhc2UgJz8nOlxuICAgICAgICBjb25zdCBPcHRpb25hbFBhcnRQYXJ0ID0gUGFydHNbJ09wdGlvbmFsUGFydFBhcnQnXSxcbiAgICAgICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuICBcbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9wdGlvbmFsUGFydFBhcnQ7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBjb25zdCBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gUGFydHNbJ1plcm9Pck1vcmVQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuICBcbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gICAgICAgIGJyZWFrO1xuICBcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBjb25zdCBPbmVPck1vcmVQYXJ0c1BhcnQgPSBQYXJ0c1snT25lT3JNb3JlUGFydHNQYXJ0J10sXG4gICAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG4gIFxuICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIFxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJzLnNoaWZ0KCksXG4gICAgICAgICAgcXVhbnRpZmllcnNMZW5ndGggPSBxdWFudGlmaWVycy5sZW5ndGg7XG5cbiAgICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIsIFBhcnRzKTtcblxuICAgIGlmIChxdWFudGlmaWVyc0xlbmd0aCA+IDApIHtcbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycywgUGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzUGFydDtcblxuIl19