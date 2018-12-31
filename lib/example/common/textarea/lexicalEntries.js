'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalEntriesTextarea = function (_InputElement) {
  _inherits(LexicalEntriesTextarea, _InputElement);

  function LexicalEntriesTextarea(selector, changeHandler, keyUpHandler) {
    _classCallCheck(this, LexicalEntriesTextarea);

    var _this = _possibleConstructorReturn(this, (LexicalEntriesTextarea.__proto__ || Object.getPrototypeOf(LexicalEntriesTextarea)).call(this, selector, changeHandler));

    if (keyUpHandler) {
      _this.onKeyUp(keyUpHandler);
    }
    return _this;
  }

  _createClass(LexicalEntriesTextarea, [{
    key: 'onKeyUp',
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: 'getLexicalEntries',
    value: function getLexicalEntries() {
      var value = this.getValue(),
          lexicalEntries = JSON.parse(value);

      return lexicalEntries;
    }
  }, {
    key: 'setLexicalEntries',
    value: function setLexicalEntries(lexicalEntries) {
      var value = JSON.stringify(lexicalEntries, null, '  ');

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);

      return {
        getLexicalEntries: getLexicalEntries,
        setLexicalEntries: setLexicalEntries
      };
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJvbktleVVwIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbEVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldExleGljYWxFbnRyaWVzIiwiYmluZCIsInNldExleGljYWxFbnRyaWVzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLHNCOzs7QUFDSixrQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLFlBQXJDLEVBQW1EO0FBQUE7O0FBQUEsZ0pBQzNDRixRQUQyQyxFQUNqQ0MsYUFEaUM7O0FBR2pELFFBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBS0MsT0FBTCxDQUFhRCxZQUFiO0FBQ0Q7QUFMZ0Q7QUFNbEQ7Ozs7NEJBRU9BLFksRUFBYztBQUNwQixXQUFLRSxFQUFMLENBQVEsT0FBUixFQUFpQkYsWUFBakI7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNRyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGlCQUFpQkMsS0FBS0MsS0FBTCxDQUFXSixLQUFYLENBRHZCOztBQUdBLGFBQU9FLGNBQVA7QUFDRDs7O3NDQUVpQkEsYyxFQUFnQjtBQUNoQyxVQUFNRixRQUFRRyxLQUFLRSxTQUFMLENBQWVILGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FBZDs7QUFFQSxXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTU8sb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUExQjtBQUFBLFVBQ01DLG9CQUFvQixLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEMUI7O0FBR0EsYUFBUTtBQUNORCw0Q0FETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT2pCLGFBQWFrQixjQUFiLENBQTRCakIsc0JBQTVCLEVBQW9EZ0IsVUFBcEQsQ0FBUDtBQUF5RTs7OztFQXBDMUVqQixZOztBQXVDckNtQixPQUFPQyxNQUFQLENBQWNuQixzQkFBZCxFQUFzQztBQUNwQ29CLFdBQVMsVUFEMkI7QUFFcENDLHFCQUFtQjtBQUNqQkMsZUFBVyxpQkFETTtBQUVqQkMsZ0JBQVk7QUFGSztBQUZpQixDQUF0Qzs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQnpCLHNCQUFqQiIsImZpbGUiOiJsZXhpY2FsRW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgaWYgKGtleVVwSGFuZGxlcikge1xuICAgICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChrZXlVcEhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdrZXlVcCcsIGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBnZXRMZXhpY2FsRW50cmllcygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xuICB9XG5cbiAgc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCAnICAnKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsRW50cmllcyA9IHRoaXMuc2V0TGV4aWNhbEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbEVudHJpZXMsXG4gICAgICBzZXRMZXhpY2FsRW50cmllc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhMZXhpY2FsRW50cmllc1RleHRhcmVhLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKExleGljYWxFbnRyaWVzVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdsZXhpY2FsLWVudHJpZXMnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiJdfQ==