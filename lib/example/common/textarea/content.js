'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var ContentTextarea = function (_InputElement) {
  _inherits(ContentTextarea, _InputElement);

  function ContentTextarea(selector, changeHandler, keyUpHandler) {
    _classCallCheck(this, ContentTextarea);

    var _this = _possibleConstructorReturn(this, (ContentTextarea.__proto__ || Object.getPrototypeOf(ContentTextarea)).call(this, selector, changeHandler));

    _this.onKeyUp(keyUpHandler);
    return _this;
  }

  _createClass(ContentTextarea, [{
    key: 'onKeyUp',
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var value = this.getValue(),
          content = value; ///

      return content;
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      var value = content;

      this.setValue(value);
    }
  }, {
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this),
          showError = this.showError.bind(this),
          hideError = this.hideError.bind(this);

      return {
        getContent: getContent,
        setContent: setContent,
        showError: showError,
        hideError: hideError
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onKeyUp = properties.onKeyUp,
          keyUpHandler = onKeyUp,
          contentTextarea = InputElement.fromProperties(ContentTextarea, properties, keyUpHandler);


      return contentTextarea;
    }
  }]);

  return ContentTextarea;
}(InputElement);

Object.assign(ContentTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'content',
    spellCheck: false
  },
  ignoredProperties: ['onKeyUp']
});

module.exports = ContentTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50LmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiQ29udGVudFRleHRhcmVhIiwic2VsZWN0b3IiLCJjaGFuZ2VIYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwib25LZXlVcCIsIm9uIiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJzZXRWYWx1ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJnZXRDb250ZW50IiwiYmluZCIsInNldENvbnRlbnQiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJwcm9wZXJ0aWVzIiwiY29udGVudFRleHRhcmVhIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxlOzs7QUFDSiwyQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLFlBQXJDLEVBQW1EO0FBQUE7O0FBQUEsa0lBQzNDRixRQUQyQyxFQUNqQ0MsYUFEaUM7O0FBR2pELFVBQUtFLE9BQUwsQ0FBYUQsWUFBYjtBQUhpRDtBQUlsRDs7Ozs0QkFFT0EsWSxFQUFjO0FBQ3BCLFdBQUtFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCRixZQUFqQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNRyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFVBQVVGLEtBRGhCLENBRFcsQ0FFWTs7QUFFdkIsYUFBT0UsT0FBUDtBQUNEOzs7K0JBRVVBLE8sRUFBUztBQUNsQixVQUFNRixRQUFRRSxPQUFkOztBQUVBLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLSSxRQUFMLENBQWMsT0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLQyxXQUFMLENBQWlCLE9BQWpCO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGFBQWEsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbkI7QUFBQSxVQUNNQyxhQUFhLEtBQUtBLFVBQUwsQ0FBZ0JELElBQWhCLENBQXFCLElBQXJCLENBRG5CO0FBQUEsVUFFTUUsWUFBWSxLQUFLQSxTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsQ0FGbEI7QUFBQSxVQUdNRyxZQUFZLEtBQUtBLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUhsQjs7QUFLQSxhQUFRO0FBQ05ELDhCQURNO0FBRU5FLDhCQUZNO0FBR05DLDRCQUhNO0FBSU5DO0FBSk0sT0FBUjtBQU1EOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRWIsT0FBRixHQUFjYSxVQUFkLENBQUViLE9BQUY7QUFBQSxVQUNBRCxZQURBLEdBQ2VDLE9BRGY7QUFBQSxVQUVBYyxlQUZBLEdBRWtCbkIsYUFBYW9CLGNBQWIsQ0FBNEJuQixlQUE1QixFQUE2Q2lCLFVBQTdDLEVBQXlEZCxZQUF6RCxDQUZsQjs7O0FBSU4sYUFBT2UsZUFBUDtBQUNEOzs7O0VBcEQyQm5CLFk7O0FBdUQ5QnFCLE9BQU9DLE1BQVAsQ0FBY3JCLGVBQWQsRUFBK0I7QUFDN0JzQixXQUFTLFVBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVcsU0FETTtBQUVqQkMsZ0JBQVk7QUFGSyxHQUZVO0FBTTdCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFOVSxDQUEvQjs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQjVCLGVBQWpCIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBDb250ZW50VGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50O1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBzaG93RXJyb3IoKSB7XG4gICAgdGhpcy5hZGRDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIGhpZGVFcnJvcigpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Q29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgaGlkZUVycm9yID0gdGhpcy5oaWRlRXJyb3IuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHNldENvbnRlbnQsXG4gICAgICBzaG93RXJyb3IsXG4gICAgICBoaWRlRXJyb3JcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbktleVVwIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IG9uS2V5VXAsIC8vL1xuICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYSA9IElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250ZW50VGV4dGFyZWEsIHByb3BlcnRpZXMsIGtleVVwSGFuZGxlcik7XG5cbiAgICByZXR1cm4gY29udGVudFRleHRhcmVhO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29udGVudFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnY29udGVudCcsXG4gICAgc3BlbGxDaGVjazogZmFsc2VcbiAgfSxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25LZXlVcCdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGVudFRleHRhcmVhO1xuIl19