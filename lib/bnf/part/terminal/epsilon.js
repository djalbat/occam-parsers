"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var TerminalPart = require("../../part/terminal"),
    EpsilonNode = require("../../../common/node/terminal/epsilon");

var specialSymbols = lexers.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(EpsilonPart, _TerminalPart);

  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonPart).apply(this, arguments));
  }

  _createClass(EpsilonPart, [{
    key: "parse",
    value: function parse(configuration) {
      var epsilonNode = EpsilonNode.fromNothing();
      return epsilonNode;
    }
  }, {
    key: "isEpsilonPart",
    value: function isEpsilonPart() {
      var epsilonPart = true;
      return epsilonPart;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = epsilon; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(EpsilonPart.prototype), "clone", this).call(this, EpsilonPart);
    }
  }]);

  return EpsilonPart;
}(TerminalPart);

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsUGFydCIsIkVwc2lsb25Ob2RlIiwic3BlY2lhbFN5bWJvbHMiLCJlcHNpbG9uIiwiRXBzaWxvblBhcnQiLCJjb25maWd1cmF0aW9uIiwiZXBzaWxvbk5vZGUiLCJmcm9tTm90aGluZyIsImVwc2lsb25QYXJ0Iiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBNUI7QUFBQSxJQUNNRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyx1Q0FBRCxDQUQzQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsT0FERixHQUNjRCxjQURkLENBQ0VDLE9BREY7O0lBR0FDLFc7Ozs7Ozs7Ozs7OzBCQUNFQyxhLEVBQWU7QUFDbkIsVUFBTUMsV0FBVyxHQUFHTCxXQUFXLENBQUNNLFdBQVosRUFBcEI7QUFFQSxhQUFPRCxXQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1FLFdBQVcsR0FBRyxJQUFwQjtBQUVBLGFBQU9BLFdBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUMsTUFBTSxHQUFHTixPQUFmLENBRFMsQ0FDZTs7QUFFeEIsYUFBT00sTUFBUDtBQUNEOzs7NEJBRU87QUFBRSxvRkFBbUJMLFdBQW5CO0FBQWtDOzs7O0VBbkJwQkosWTs7QUFzQjFCVSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCIpLFxuICAgICAgRXBzaWxvbk5vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvblwiKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRXBzaWxvblBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBFcHNpbG9uTm9kZS5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgaXNFcHNpbG9uUGFydCgpIHtcbiAgICBjb25zdCBlcHNpbG9uUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBlcHNpbG9uOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVwc2lsb25QYXJ0KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0O1xuIl19