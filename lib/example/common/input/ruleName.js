"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require("easy");

var InputElement = easy.InputElement;

var RuleNameInput = /*#__PURE__*/function (_InputElement) {
  _inherits(RuleNameInput, _InputElement);

  function RuleNameInput() {
    _classCallCheck(this, RuleNameInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameInput).apply(this, arguments));
  }

  _createClass(RuleNameInput, [{
    key: "getRuleName",
    value: function getRuleName() {
      var value = this.getValue(),
          ruleName = value; ///

      return ruleName;
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getRuleName = this.getRuleName.bind(this);
      return {
        getRuleName: getRuleName
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(RuleNameInput, properties);
    }
  }]);

  return RuleNameInput;
}(InputElement);

Object.assign(RuleNameInput, {
  tagName: "input",
  defaultProperties: {
    type: "text",
    className: "rule-name",
    spellCheck: "false"
  }
});
module.exports = RuleNameInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiUnVsZU5hbWVJbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYTs7Ozs7Ozs7Ozs7a0NBQ1U7QUFDWixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsUUFBUSxHQUFHRixLQURqQixDQURZLENBRWE7O0FBRXpCLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXBCO0FBRUEsYUFBUTtBQUNORCxRQUFBQSxXQUFXLEVBQVhBO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPUCxZQUFZLENBQUNRLGNBQWIsQ0FBNEJQLGFBQTVCLEVBQTJDTSxVQUEzQyxDQUFQO0FBQWdFOzs7O0VBaEIxRVAsWTs7QUFtQjVCUyxNQUFNLENBQUNDLE1BQVAsQ0FBY1QsYUFBZCxFQUE2QjtBQUMzQlUsRUFBQUEsT0FBTyxFQUFFLE9BRGtCO0FBRTNCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFFakJDLElBQUFBLFNBQVMsRUFBRSxXQUZNO0FBR2pCQyxJQUFBQSxVQUFVLEVBQUU7QUFISztBQUZRLENBQTdCO0FBU0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhSdWxlTmFtZUlucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJ1bGVOYW1lSW5wdXQsIHtcbiAgdGFnTmFtZTogXCJpbnB1dFwiLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVJbnB1dDtcbiJdfQ==