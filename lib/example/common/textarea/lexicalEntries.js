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

var LexicalEntriesTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(LexicalEntriesTextarea, _InputElement);

  function LexicalEntriesTextarea(selector, changeHandler, keyUpHandler) {
    var _this;

    _classCallCheck(this, LexicalEntriesTextarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LexicalEntriesTextarea).call(this, selector, changeHandler));

    if (keyUpHandler) {
      _this.onKeyUp(keyUpHandler);
    }

    return _this;
  }

  _createClass(LexicalEntriesTextarea, [{
    key: "onKeyUp",
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: "getLexicalEntries",
    value: function getLexicalEntries() {
      var value = this.getValue(),
          lexicalEntries = JSON.parse(value);
      return lexicalEntries;
    }
  }, {
    key: "setLexicalEntries",
    value: function setLexicalEntries(lexicalEntries) {
      var value = JSON.stringify(lexicalEntries, null, '  ');
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);
      return {
        getLexicalEntries: getLexicalEntries,
        setLexicalEntries: setLexicalEntries
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(LexicalEntriesTextarea, properties);
    }
  }]);

  return LexicalEntriesTextarea;
}(InputElement);

Object.assign(LexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'lexical-entries',
    spellCheck: 'false'
  }
});
module.exports = LexicalEntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImtleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJiaW5kIiwic2V0TGV4aWNhbEVudHJpZXMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsc0I7OztBQUNKLGtDQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsWUFBckMsRUFBbUQ7QUFBQTs7QUFBQTs7QUFDakQsZ0dBQU1GLFFBQU4sRUFBZ0JDLGFBQWhCOztBQUVBLFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0MsT0FBTCxDQUFhRCxZQUFiO0FBQ0Q7O0FBTGdEO0FBTWxEOzs7OzRCQUVPQSxZLEVBQWM7QUFDcEIsV0FBS0UsRUFBTCxDQUFRLE9BQVIsRUFBaUJGLFlBQWpCO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUcsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQVgsQ0FEdkI7QUFHQSxhQUFPRSxjQUFQO0FBQ0Q7OztzQ0FFaUJBLGMsRUFBZ0I7QUFDaEMsVUFBTUYsS0FBSyxHQUFHRyxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsY0FBZixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxDQUFkO0FBRUEsV0FBS0ksUUFBTCxDQUFjTixLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1PLGlCQUFpQixHQUFHLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUExQjtBQUFBLFVBQ01DLGlCQUFpQixHQUFHLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUQxQjtBQUdBLGFBQVE7QUFDTkQsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFETTtBQUVORSxRQUFBQSxpQkFBaUIsRUFBakJBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPakIsWUFBWSxDQUFDa0IsY0FBYixDQUE0QmpCLHNCQUE1QixFQUFvRGdCLFVBQXBELENBQVA7QUFBeUU7Ozs7RUFwQzFFakIsWTs7QUF1Q3JDbUIsTUFBTSxDQUFDQyxNQUFQLENBQWNuQixzQkFBZCxFQUFzQztBQUNwQ29CLEVBQUFBLE9BQU8sRUFBRSxVQUQyQjtBQUVwQ0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxpQkFETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFO0FBRks7QUFGaUIsQ0FBdEM7QUFRQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekIsc0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyLCBrZXlVcEhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcik7XG5cbiAgICBpZiAoa2V5VXBIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uS2V5VXAoa2V5VXBIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxFbnRyaWVzID0gdGhpcy5zZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExleGljYWxFbnRyaWVzVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGV4aWNhbEVudHJpZXNUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2xleGljYWwtZW50cmllcycsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMZXhpY2FsRW50cmllc1RleHRhcmVhO1xuIl19