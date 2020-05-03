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

var NonTerminalPart = require("../../part/nonTerminal");

var SequenceOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(SequenceOfPartsPart, _NonTerminalPart);

  function SequenceOfPartsPart(type, part) {
    var _this;

    _classCallCheck(this, SequenceOfPartsPart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsPart).call(this, type));
    _this.part = part;
    return _this;
  }

  _createClass(SequenceOfPartsPart, [{
    key: "getPart",
    value: function getPart() {
      return this.part;
    }
  }, {
    key: "asString",
    value: function asString(operatorString) {
      var partString = this.part.asString(),
          string = "".concat(partString).concat(operatorString);
      return string;
    }
  }, {
    key: "clone",
    value: function clone(Part) {
      return _get(_getPrototypeOf(SequenceOfPartsPart.prototype), "clone", this).call(this, Part, this.part);
    }
  }]);

  return SequenceOfPartsPart;
}(NonTerminalPart);

module.exports = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnQiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInR5cGUiLCJwYXJ0Iiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBR0MsT0FBTyxDQUFDLHdCQUFELENBQS9COztJQUVNQyxtQjs7O0FBQ0osK0JBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLDZGQUFNRCxJQUFOO0FBRUEsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHNCO0FBSXZCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozs2QkFFUUMsYyxFQUFnQjtBQUN2QixVQUFNQyxVQUFVLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxRQUFWLEVBQW5CO0FBQUEsVUFDTUMsTUFBTSxhQUFNRixVQUFOLFNBQW1CRCxjQUFuQixDQURaO0FBR0EsYUFBT0csTUFBUDtBQUNEOzs7MEJBRUtDLEksRUFBTTtBQUFFLDRGQUFtQkEsSUFBbkIsRUFBeUIsS0FBS0wsSUFBOUI7QUFBc0M7Ozs7RUFsQnBCSixlOztBQXFCbENVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCIpO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuICBcbiAgYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoUGFydCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUGFydCwgdGhpcy5wYXJ0KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4iXX0=