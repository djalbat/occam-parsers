'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

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
  tagName: 'input',
  defaultProperties: {
    type: 'text',
    className: 'rule-name',
    spellCheck: 'false'
  }
});
module.exports = RuleNameInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiUnVsZU5hbWVJbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYTs7Ozs7Ozs7Ozs7a0NBQ1U7QUFDWixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsUUFBUSxHQUFHRixLQURqQixDQURZLENBRWE7O0FBRXpCLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXBCO0FBRUEsYUFBUTtBQUNORCxRQUFBQSxXQUFXLEVBQVhBO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPUCxZQUFZLENBQUNRLGNBQWIsQ0FBNEJQLGFBQTVCLEVBQTJDTSxVQUEzQyxDQUFQO0FBQWdFOzs7O0VBaEIxRVAsWTs7QUFtQjVCUyxNQUFNLENBQUNDLE1BQVAsQ0FBY1QsYUFBZCxFQUE2QjtBQUMzQlUsRUFBQUEsT0FBTyxFQUFFLE9BRGtCO0FBRTNCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsSUFBSSxFQUFFLE1BRFc7QUFFakJDLElBQUFBLFNBQVMsRUFBRSxXQUZNO0FBR2pCQyxJQUFBQSxVQUFVLEVBQUU7QUFISztBQUZRLENBQTdCO0FBU0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUnVsZU5hbWVJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdmFsdWU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFJ1bGVOYW1lSW5wdXQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUnVsZU5hbWVJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjbGFzc05hbWU6ICdydWxlLW5hbWUnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVJbnB1dDtcbiJdfQ==