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

    _this.onKeyUp(keyUpHandler);
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
      var onKeyUp = properties.onKeyUp,
          keyUpHandler = onKeyUp,
          lexicalEntriesTextarea = InputElement.fromProperties(LexicalEntriesTextarea, properties, keyUpHandler);


      return lexicalEntriesTextarea;
    }
  }]);

  return LexicalEntriesTextarea;
}(InputElement);

Object.assign(LexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'lexicalEntries',
    spellcheck: false
  }
});

module.exports = LexicalEntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJvbktleVVwIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbEVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldExleGljYWxFbnRyaWVzIiwiYmluZCIsInNldExleGljYWxFbnRyaWVzIiwicHJvcGVydGllcyIsImxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsY2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxzQjs7O0FBQ0osa0NBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDQyxZQUFyQyxFQUFtRDtBQUFBOztBQUFBLGdKQUMzQ0YsUUFEMkMsRUFDakNDLGFBRGlDOztBQUdqRCxVQUFLRSxPQUFMLENBQWFELFlBQWI7QUFIaUQ7QUFJbEQ7Ozs7NEJBRU9BLFksRUFBYztBQUNwQixXQUFLRSxFQUFMLENBQVEsT0FBUixFQUFpQkYsWUFBakI7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNRyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGlCQUFpQkMsS0FBS0MsS0FBTCxDQUFXSixLQUFYLENBRHZCOztBQUdBLGFBQU9FLGNBQVA7QUFDRDs7O3NDQUVpQkEsYyxFQUFnQjtBQUNoQyxVQUFNRixRQUFRRyxLQUFLRSxTQUFMLENBQWVILGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FBZDs7QUFFQSxXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTU8sb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUExQjtBQUFBLFVBQ01DLG9CQUFvQixLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEMUI7O0FBR0EsYUFBUTtBQUNORCw0Q0FETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQzFCLFVBQUVaLE9BQUYsR0FBY1ksVUFBZCxDQUFFWixPQUFGO0FBQUEsVUFDQUQsWUFEQSxHQUNlQyxPQURmO0FBQUEsVUFFQWEsc0JBRkEsR0FFeUJsQixhQUFhbUIsY0FBYixDQUE0QmxCLHNCQUE1QixFQUFvRGdCLFVBQXBELEVBQWdFYixZQUFoRSxDQUZ6Qjs7O0FBSU4sYUFBT2Msc0JBQVA7QUFDRDs7OztFQXhDa0NsQixZOztBQTJDckNvQixPQUFPQyxNQUFQLENBQWNwQixzQkFBZCxFQUFzQztBQUNwQ3FCLFdBQVMsVUFEMkI7QUFFcENDLHFCQUFtQjtBQUNqQkMsZUFBVyxnQkFETTtBQUVqQkMsZ0JBQVk7QUFGSztBQUZpQixDQUF0Qzs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQjFCLHNCQUFqQiIsImZpbGUiOiJsZXhpY2FsRW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxFbnRyaWVzID0gdGhpcy5zZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSBvbktleVVwLCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhID0gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExleGljYWxFbnRyaWVzVGV4dGFyZWEsIHByb3BlcnRpZXMsIGtleVVwSGFuZGxlcik7XG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExleGljYWxFbnRyaWVzVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdsZXhpY2FsRW50cmllcycsXG4gICAgc3BlbGxjaGVjazogZmFsc2VcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiJdfQ==