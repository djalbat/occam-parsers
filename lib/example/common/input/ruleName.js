'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var RuleNameInput = function (_InputElement) {
  _inherits(RuleNameInput, _InputElement);

  function RuleNameInput() {
    _classCallCheck(this, RuleNameInput);

    return _possibleConstructorReturn(this, (RuleNameInput.__proto__ || Object.getPrototypeOf(RuleNameInput)).apply(this, arguments));
  }

  _createClass(RuleNameInput, [{
    key: 'getRuleName',
    value: function getRuleName() {
      var value = this.getValue(),
          ruleName = value; ///

      return ruleName;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getRuleName = this.getRuleName.bind(this);

      return {
        getRuleName: getRuleName
      };
    }
  }], [{
    key: 'fromProperties',
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
    className: 'ruleName',
    spellCheck: false
  }
});

module.exports = RuleNameInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi9pbnB1dC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlJ1bGVOYW1lSW5wdXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImJpbmQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGE7Ozs7Ozs7Ozs7O2tDQUNVO0FBQ1osVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxXQUFXRixLQURqQixDQURZLENBRWE7O0FBRXpCLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFwQjs7QUFFQSxhQUFRO0FBQ05EO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPUCxhQUFhUSxjQUFiLENBQTRCUCxhQUE1QixFQUEyQ00sVUFBM0MsQ0FBUDtBQUFnRTs7OztFQWhCMUVQLFk7O0FBbUI1QlMsT0FBT0MsTUFBUCxDQUFjVCxhQUFkLEVBQTZCO0FBQzNCVSxXQUFTLE9BRGtCO0FBRTNCQyxxQkFBbUI7QUFDakJDLFVBQU0sTUFEVztBQUVqQkMsZUFBVyxVQUZNO0FBR2pCQyxnQkFBWTtBQUhLO0FBRlEsQ0FBN0I7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUJoQixhQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhSdWxlTmFtZUlucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJ1bGVOYW1lSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY2xhc3NOYW1lOiAncnVsZU5hbWUnLFxuICAgIHNwZWxsQ2hlY2s6IGZhbHNlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lSW5wdXQ7XG4iXX0=