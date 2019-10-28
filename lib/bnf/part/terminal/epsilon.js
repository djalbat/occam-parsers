'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalPart = require('../../part/terminal'),
    EpsilonNode = require('../../../common/node/terminal/epsilon');

var specialSymbols = lexers.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonPart = function (_TerminalPart) {
  _inherits(EpsilonPart, _TerminalPart);

  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);

    return _possibleConstructorReturn(this, (EpsilonPart.__proto__ || Object.getPrototypeOf(EpsilonPart)).apply(this, arguments));
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(configuration) {
      var epsilonNode = EpsilonNode.fromNothing();

      return epsilonNode;
    }
  }, {
    key: 'isEpsilonPart',
    value: function isEpsilonPart() {
      var epsilonPart = true;

      return epsilonPart;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var string = epsilon; ///

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(EpsilonPart.prototype.__proto__ || Object.getPrototypeOf(EpsilonPart.prototype), 'clone', this).call(this, EpsilonPart);
    }
  }]);

  return EpsilonPart;
}(TerminalPart);

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbFBhcnQiLCJFcHNpbG9uTm9kZSIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25QYXJ0IiwiY29uZmlndXJhdGlvbiIsImVwc2lsb25Ob2RlIiwiZnJvbU5vdGhpbmciLCJlcHNpbG9uUGFydCIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxlQUFlRCxRQUFRLHFCQUFSLENBQXJCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSx1Q0FBUixDQURwQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsT0FERixHQUNjRCxjQURkLENBQ0VDLE9BREY7O0lBR0FDLFc7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWU7QUFDbkIsVUFBTUMsY0FBY0wsWUFBWU0sV0FBWixFQUFwQjs7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1FLGNBQWMsSUFBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxTQUFTTixPQUFmLENBRFMsQ0FDZTs7QUFFeEIsYUFBT00sTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw2SEFBbUJMLFdBQW5CO0FBQWtDOzs7O0VBbkJwQkosWTs7QUFzQjFCVSxPQUFPQyxPQUFQLEdBQWlCUCxXQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC90ZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvbk5vZGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gRXBzaWxvbk5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzRXBzaWxvblBhcnQoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGVwc2lsb25QYXJ0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZXBzaWxvbjsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShFcHNpbG9uUGFydCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUGFydDtcbiJdfQ==