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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnQiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsInF1YW50aWZpZXIiLCJQYXJ0cyIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJPcHRpb25hbFBhcnRQYXJ0Iiwib3B0aW9uYWxQYXJ0UGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwicXVhbnRpZmllcnMiLCJzaGlmdCIsInF1YW50aWZpZXJzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbVBhcnRBbmRRdWFudGlmaWVyIiwiZnJvbVBhcnRBbmRRdWFudGlmaWVycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsbUI7QUFDSiwrQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7NkJBRVFDLGMsRUFBZ0I7QUFDdkIsVUFBTUMsYUFBYSxLQUFLRixJQUFMLENBQVVHLFFBQVYsRUFBbkI7QUFBQSxVQUNNQyxjQUFZRixVQUFaLEdBQXlCRCxjQUQvQjs7QUFHQSxhQUFPRyxNQUFQO0FBQ0Q7OzswQ0FFNEJKLEksRUFBTUssVSxFQUFZQyxLLEVBQU87QUFDcEQsVUFBSUMsNEJBQUo7O0FBRUEsY0FBUUYsVUFBUjtBQUNFLGFBQUssR0FBTDtBQUNFLGNBQU1HLG1CQUFtQkYsTUFBTSxrQkFBTixDQUF6QjtBQUFBLGNBQ01HLG1CQUFtQixJQUFJRCxnQkFBSixDQUFxQlIsSUFBckIsQ0FEekI7O0FBR0FPLGdDQUFzQkUsZ0JBQXRCO0FBQ0E7O0FBRUYsYUFBSyxHQUFMO0FBQ0UsY0FBTUMsc0JBQXNCSixNQUFNLHFCQUFOLENBQTVCO0FBQUEsY0FDTUssc0JBQXNCLElBQUlELG1CQUFKLENBQXdCVixJQUF4QixDQUQ1Qjs7QUFHQU8sZ0NBQXNCSSxtQkFBdEI7QUFDQTs7QUFFRixhQUFLLEdBQUw7QUFDRSxjQUFNQyxxQkFBcUJOLE1BQU0sb0JBQU4sQ0FBM0I7QUFBQSxjQUNNTyxxQkFBcUIsSUFBSUQsa0JBQUosQ0FBdUJaLElBQXZCLENBRDNCOztBQUdBTyxnQ0FBc0JNLGtCQUF0QjtBQUNBO0FBcEJKOztBQXVCQSxhQUFPTixtQkFBUDtBQUNEOzs7MkNBRTZCUCxJLEVBQU1jLFcsRUFBYVIsSyxFQUFPO0FBQ3RELFVBQU1ELGFBQWFTLFlBQVlDLEtBQVosRUFBbkI7QUFBQSxVQUNNQyxvQkFBb0JGLFlBQVlHLE1BRHRDOztBQUdBLFVBQUlWLHNCQUFzQlIsb0JBQW9CbUIscUJBQXBCLENBQTBDbEIsSUFBMUMsRUFBZ0RLLFVBQWhELEVBQTREQyxLQUE1RCxDQUExQjs7QUFFQSxVQUFJVSxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJoQixlQUFPTyxtQkFBUCxDQUR5QixDQUNHOztBQUU1QkEsOEJBQXNCUixvQkFBb0JvQixzQkFBcEIsQ0FBMkNuQixJQUEzQyxFQUFpRGMsV0FBakQsRUFBOERSLEtBQTlELENBQXRCO0FBQ0Q7O0FBRUQsYUFBT0MsbUJBQVA7QUFDRDs7Ozs7O0FBR0hhLE9BQU9DLE9BQVAsR0FBaUJ0QixtQkFBakIiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC50b1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllciwgUGFydHMpIHtcbiAgICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgXG4gICAgc3dpdGNoIChxdWFudGlmaWVyKSB7XG4gICAgICBjYXNlICc/JzpcbiAgICAgICAgY29uc3QgT3B0aW9uYWxQYXJ0UGFydCA9IFBhcnRzWydPcHRpb25hbFBhcnRQYXJ0J10sXG4gICAgICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcbiAgXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0O1xuICAgICAgICBicmVhaztcbiAgXG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgY29uc3QgWmVyb09yTW9yZVBhcnRzUGFydCA9IFBhcnRzWydaZXJvT3JNb3JlUGFydHNQYXJ0J10sXG4gICAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcbiAgXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICAgICAgICBicmVhaztcbiAgXG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgY29uc3QgT25lT3JNb3JlUGFydHNQYXJ0ID0gUGFydHNbJ09uZU9yTW9yZVBhcnRzUGFydCddLFxuICAgICAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuICBcbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cykge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVycy5zaGlmdCgpLFxuICAgICAgICAgIHF1YW50aWZpZXJzTGVuZ3RoID0gcXVhbnRpZmllcnMubGVuZ3RoO1xuXG4gICAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyLCBQYXJ0cyk7XG5cbiAgICBpZiAocXVhbnRpZmllcnNMZW5ndGggPiAwKSB7XG4gICAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiJdfQ==