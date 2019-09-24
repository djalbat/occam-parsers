'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    NonTerminalPart = require('../../part/nonTerminal');

var specialSymbols = lexers.specialSymbols,
    questionMark = specialSymbols.questionMark,
    OptionalPartPartType = partTypes.OptionalPartPartType;

var OptionalPartPart = function (_NonTerminalPart) {
  _inherits(OptionalPartPart, _NonTerminalPart);

  function OptionalPartPart(part) {
    _classCallCheck(this, OptionalPartPart);

    var type = OptionalPartPartType; ///

    var _this = _possibleConstructorReturn(this, (OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart)).call(this, type));

    _this.part = part;
    return _this;
  }

  _createClass(OptionalPartPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'parse',
    value: function parse(configuration) {
      var nodes = [];

      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes;
      }

      return nodes;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(OptionalPartPart.prototype.__proto__ || Object.getPrototypeOf(OptionalPartPart.prototype), 'clone', this).call(this, OptionalPartPart, this.part);
    }
  }, {
    key: 'asString',
    value: function asString() {
      var operatorString = questionMark,
          ///
      partString = this.part.asString(),
          string = '' + partString + operatorString;

      return string;
    }
  }]);

  return OptionalPartPart;
}(NonTerminalPart);

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsInBhcnRUeXBlcyIsIk5vblRlcm1pbmFsUGFydCIsInNwZWNpYWxTeW1ib2xzIiwicXVlc3Rpb25NYXJrIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJPcHRpb25hbFBhcnRQYXJ0IiwicGFydCIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJnZXRQYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRHhCOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLE1BQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxZQURGLEdBQ21CRCxjQURuQixDQUNFQyxZQURGO0FBQUEsSUFFRUMsb0JBRkYsR0FFMkJKLFNBRjNCLENBRUVJLG9CQUZGOztJQUlBQyxnQjs7O0FBQ0osNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsT0FBT0gsb0JBQWIsQ0FEZ0IsQ0FDbUI7O0FBRG5CLG9JQUdWRyxJQUhVOztBQUtoQixVQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFMZ0I7QUFNakI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQU1ILE9BQU8sS0FBS0ksT0FBTCxFQUFiO0FBQUEsVUFDTUMsa0JBQWtCTCxLQUFLTSxLQUFMLENBQVdKLGFBQVgsQ0FEeEI7QUFBQSxVQUVNSyxTQUFVRixvQkFBb0IsSUFGcEM7O0FBSUEsVUFBSUUsTUFBSixFQUFZO0FBQ1ZKLGdCQUFRRSxlQUFSO0FBQ0Q7O0FBRUQsYUFBT0YsS0FBUDtBQUNEOzs7NEJBRU87QUFBRSx1SUFBbUJKLGdCQUFuQixFQUFxQyxLQUFLQyxJQUExQztBQUFrRDs7OytCQUVqRDtBQUNULFVBQU1RLGlCQUFpQlgsWUFBdkI7QUFBQSxVQUFzQztBQUNoQ1ksbUJBQWEsS0FBS1QsSUFBTCxDQUFVVSxRQUFWLEVBRG5CO0FBQUEsVUFFTUMsY0FBWUYsVUFBWixHQUF5QkQsY0FGL0I7O0FBSUEsYUFBT0csTUFBUDtBQUNEOzs7O0VBbkM0QmhCLGU7O0FBc0MvQmlCLE9BQU9DLE9BQVAsR0FBaUJkLGdCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBPcHRpb25hbFBhcnRQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPcHRpb25hbFBhcnRQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgcGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9wdGlvbmFsUGFydFBhcnQsIHRoaXMucGFydCk7IH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIl19