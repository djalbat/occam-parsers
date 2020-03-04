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

var ParseTreeTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
  }

  _createClass(ParseTreeTextarea, [{
    key: "showError",
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: "setParseTree",
    value: function setParseTree(parseTree) {
      if (parseTree !== null) {
        parseTree.shiftLine(); //

        var parseTreeString = parseTree.asString(),
            value = parseTreeString; ///

        this.setValue(value);
      } else {
        this.clearParseTree();
      }
    }
  }, {
    key: "clearParseTree",
    value: function clearParseTree() {
      var value = '';
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var showError = this.showError.bind(this),
          hideError = this.hideError.bind(this),
          setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);
      return {
        showError: showError,
        hideError: hideError,
        setParseTree: setParseTree,
        clearParseTree: clearParseTree
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(ParseTreeTextarea, properties);
    }
  }]);

  return ParseTreeTextarea;
}(InputElement);

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  }
});
module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlBhcnNlVHJlZVRleHRhcmVhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyUGFyc2VUcmVlIiwic2hvd0Vycm9yIiwiYmluZCIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGlCOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFdBQUtDLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7O2lDQUVZQyxTLEVBQVc7QUFDdEIsVUFBSUEsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCQSxRQUFBQSxTQUFTLENBQUNDLFNBQVYsR0FEc0IsQ0FDRTs7QUFFeEIsWUFBTUMsZUFBZSxHQUFHRixTQUFTLENBQUNHLFFBQVYsRUFBeEI7QUFBQSxZQUNNQyxLQUFLLEdBQUdGLGVBRGQsQ0FIc0IsQ0FJVTs7QUFFaEMsYUFBS0csUUFBTCxDQUFjRCxLQUFkO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS0UsY0FBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRixLQUFLLEdBQUcsRUFBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQUEsVUFDTUMsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUQsSUFBZixDQUFvQixJQUFwQixDQURsQjtBQUFBLFVBRU1FLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUZyQjtBQUFBLFVBR01GLGNBQWMsR0FBRyxLQUFLQSxjQUFMLENBQW9CRSxJQUFwQixDQUF5QixJQUF6QixDQUh2QjtBQUtBLGFBQVE7QUFDTkQsUUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5FLFFBQUFBLFNBQVMsRUFBVEEsU0FGTTtBQUdOQyxRQUFBQSxZQUFZLEVBQVpBLFlBSE07QUFJTkosUUFBQUEsY0FBYyxFQUFkQTtBQUpNLE9BQVI7QUFNRDs7O21DQUVxQkssVSxFQUFZO0FBQUUsYUFBT2YsWUFBWSxDQUFDZ0IsY0FBYixDQUE0QmYsaUJBQTVCLEVBQStDYyxVQUEvQyxDQUFQO0FBQW9FOzs7O0VBMUMxRWYsWTs7QUE2Q2hDaUIsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixpQkFBZCxFQUFpQztBQUMvQmtCLEVBQUFBLE9BQU8sRUFBRSxVQURzQjtBQUUvQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxZQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUUsT0FGSztBQUdqQkMsSUFBQUEsUUFBUSxFQUFFO0FBSE87QUFGWSxDQUFqQztBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHNob3dFcnJvcigpIHtcbiAgICB0aGlzLmFkZENsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgaGlkZUVycm9yKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gJyc7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Vycm9yID0gdGhpcy5zaG93RXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBoaWRlRXJyb3IgPSB0aGlzLmhpZGVFcnJvci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFBhcnNlVHJlZSA9IHRoaXMuc2V0UGFyc2VUcmVlLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJQYXJzZVRyZWUgPSB0aGlzLmNsZWFyUGFyc2VUcmVlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dFcnJvcixcbiAgICAgIGhpZGVFcnJvcixcbiAgICAgIHNldFBhcnNlVHJlZSxcbiAgICAgIGNsZWFyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnNlVHJlZVRleHRhcmVhLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFBhcnNlVHJlZVRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAncGFyc2UtdHJlZScsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICByZWFkT25seTogdHJ1ZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWVUZXh0YXJlYTtcbiJdfQ==