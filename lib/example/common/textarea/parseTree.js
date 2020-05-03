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

var ParseTreeTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
  }

  _createClass(ParseTreeTextarea, [{
    key: "showError",
    value: function showError() {
      this.addClass("error");
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.removeClass("error");
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
      var value = "";
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
  tagName: "textarea",
  defaultProperties: {
    className: "parse-tree",
    spellCheck: "false",
    readOnly: true
  }
});
module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlBhcnNlVHJlZVRleHRhcmVhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyUGFyc2VUcmVlIiwic2hvd0Vycm9yIiwiYmluZCIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGlCOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFdBQUtDLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7O2lDQUVZQyxTLEVBQVc7QUFDdEIsVUFBSUEsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCQSxRQUFBQSxTQUFTLENBQUNDLFNBQVYsR0FEc0IsQ0FDRTs7QUFFeEIsWUFBTUMsZUFBZSxHQUFHRixTQUFTLENBQUNHLFFBQVYsRUFBeEI7QUFBQSxZQUNNQyxLQUFLLEdBQUdGLGVBRGQsQ0FIc0IsQ0FJVTs7QUFFaEMsYUFBS0csUUFBTCxDQUFjRCxLQUFkO0FBQ0QsT0FQRCxNQU9PO0FBQ0wsYUFBS0UsY0FBTDtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZixVQUFNRixLQUFLLEdBQUcsRUFBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQUEsVUFDTUMsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUQsSUFBZixDQUFvQixJQUFwQixDQURsQjtBQUFBLFVBRU1FLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUZyQjtBQUFBLFVBR01GLGNBQWMsR0FBRyxLQUFLQSxjQUFMLENBQW9CRSxJQUFwQixDQUF5QixJQUF6QixDQUh2QjtBQUtBLGFBQVE7QUFDTkQsUUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5FLFFBQUFBLFNBQVMsRUFBVEEsU0FGTTtBQUdOQyxRQUFBQSxZQUFZLEVBQVpBLFlBSE07QUFJTkosUUFBQUEsY0FBYyxFQUFkQTtBQUpNLE9BQVI7QUFNRDs7O21DQUVxQkssVSxFQUFZO0FBQUUsYUFBT2YsWUFBWSxDQUFDZ0IsY0FBYixDQUE0QmYsaUJBQTVCLEVBQStDYyxVQUEvQyxDQUFQO0FBQW9FOzs7O0VBMUMxRWYsWTs7QUE2Q2hDaUIsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixpQkFBZCxFQUFpQztBQUMvQmtCLEVBQUFBLE9BQU8sRUFBRSxVQURzQjtBQUUvQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxZQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUUsT0FGSztBQUdqQkMsSUFBQUEsUUFBUSxFQUFFO0FBSE87QUFGWSxDQUFqQztBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoXCJlYXN5XCIpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzaG93RXJyb3IoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImVycm9yXCIpO1xuICB9XG5cbiAgaGlkZUVycm9yKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFcnJvciA9IHRoaXMuc2hvd0Vycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgaGlkZUVycm9yID0gdGhpcy5oaWRlRXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRQYXJzZVRyZWUgPSB0aGlzLnNldFBhcnNlVHJlZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyUGFyc2VUcmVlID0gdGhpcy5jbGVhclBhcnNlVHJlZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RXJyb3IsXG4gICAgICBoaWRlRXJyb3IsXG4gICAgICBzZXRQYXJzZVRyZWUsXG4gICAgICBjbGVhclBhcnNlVHJlZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJzZVRyZWVUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXJzZVRyZWVUZXh0YXJlYSwge1xuICB0YWdOYW1lOiBcInRleHRhcmVhXCIsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcInBhcnNlLXRyZWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlVGV4dGFyZWE7XG4iXX0=