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
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var part = this.getPart();

      if (part !== null) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = partNodeOrNodes;
        }
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var operatorString = '?',
          string = _get(OptionalPartPart.prototype.__proto__ || Object.getPrototypeOf(OptionalPartPart.prototype), 'toString', this).call(this, operatorString);

      return string;
    }
  }]);

  return OptionalPartPart;
}(SequenceOfPartsPart);

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInJlcXVpcmUiLCJPcHRpb25hbFBhcnRQYXJ0IiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwicGFydCIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBNUI7O0lBRU1DLGdCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxZLEVBQWM7QUFDM0JBLHFCQUFlLEtBQWYsQ0FEMkIsQ0FDTDs7QUFFdEIsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQU1DLE9BQU8sS0FBS0MsT0FBTCxFQUFiOztBQUVBLFVBQUlELFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNRSxrQkFBa0JGLEtBQUtHLEtBQUwsQ0FBV04sT0FBWCxFQUFvQkMsWUFBcEIsQ0FBeEI7QUFBQSxZQUNNTSxhQUFjRixvQkFBb0IsSUFEeEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkTCxrQkFBUUcsZUFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTSxpQkFBaUIsR0FBdkI7QUFBQSxVQUNNQyxzSUFBd0JELGNBQXhCLENBRE47O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7O0VBekI0QlosbUI7O0FBNEIvQmEsT0FBT0MsT0FBUCxHQUFpQlosZ0JBQWpCIiwiZmlsZSI6Im9wdGlvbmFsUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpO1xuICAgIFxuICAgIGlmIChwYXJ0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gcGFydE5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gJz8nLFxuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLnRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIl19