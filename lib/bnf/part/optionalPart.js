'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

var OptionalPartPart = function (_SequenceOfPartsPart) {
  _inherits(OptionalPartPart, _SequenceOfPartsPart);

  function OptionalPartPart() {
    _classCallCheck(this, OptionalPartPart);

    return _possibleConstructorReturn(this, (OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart)).apply(this, arguments));
  }

  _createClass(OptionalPartPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = [],
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodes !== null;

        if (terminalPartOrProductionParsed) {
          nodes = terminalPartOrProductionNodes;
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\?$/,
          Class = OptionalPartPart,
          optionalPartPart = _get(OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart), 'fromSymbol', this).call(this, symbol, significantTokenTypes, noWhitespace, regExp, Class);

      return optionalPartPart;
    }
  }]);

  return OptionalPartPart;
}(SequenceOfPartsPart);

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnRQYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkIiwic3ltYm9sIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJvcHRpb25hbFBhcnRQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLHNCQUFzQkMsUUFBUSxtQkFBUixDQUExQjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDQSxxQkFBZSxLQUFLQyxlQUFMLEVBQWYsQ0FEd0MsQ0FDQTs7QUFFeEMsVUFBSUMsUUFBUSxFQUFaO0FBQUEsVUFDSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCSixXQUE5QixDQUQvQjs7QUFHQSxVQUFJSSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckMsWUFBSUMsZ0NBQWdDRCx5QkFBeUJFLEtBQXpCLENBQStCUCxPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQXBDO0FBQUEsWUFDSU0saUNBQWtDRixrQ0FBa0MsSUFEeEU7O0FBR0EsWUFBSUUsOEJBQUosRUFBb0M7QUFDbENKLGtCQUFRRSw2QkFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0YsS0FBUDtBQUNEOzs7K0JBRWlCSyxNLEVBQVFDLHFCLEVBQXVCUixZLEVBQWM7QUFDN0QsVUFBSVMsU0FBUyxZQUFiO0FBQUEsVUFDSUMsUUFBUWIsZ0JBRFo7QUFBQSxVQUVJYyw4SEFBb0NKLE1BQXBDLEVBQTRDQyxxQkFBNUMsRUFBbUVSLFlBQW5FLEVBQWlGUyxNQUFqRixFQUF5RkMsS0FBekYsQ0FGSjs7QUFJQSxhQUFPQyxnQkFBUDtBQUNEOzs7O0VBekI0QmhCLG1COztBQTRCL0JpQixPQUFPQyxPQUFQLEdBQWlCaEIsZ0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICB2YXIgbm9kZXMgPSBbXSxcbiAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIHZhciB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJlZ0V4cCA9IC8oW14qXSspXFw/JC8sXG4gICAgICAgIENsYXNzID0gT3B0aW9uYWxQYXJ0UGFydCxcbiAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0UGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydFBhcnQ7XG4iXX0=