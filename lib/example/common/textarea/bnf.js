'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var BNFTextarea = function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  function BNFTextarea(selector, changeHandler, keyUpHandler) {
    _classCallCheck(this, BNFTextarea);

    var _this = _possibleConstructorReturn(this, (BNFTextarea.__proto__ || Object.getPrototypeOf(BNFTextarea)).call(this, selector, changeHandler));

    _this.onKeyUp(keyUpHandler);
    return _this;
  }

  _createClass(BNFTextarea, [{
    key: 'onKeyUp',
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: 'getBNF',
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: 'setBNF',
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);

      return {
        getBNF: getBNF,
        setBNF: setBNF
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onKeyUp = properties.onKeyUp,
          keyUpHandler = onKeyUp,
          bnfTextarea = InputElement.fromProperties(BNFTextarea, properties, keyUpHandler);


      return bnfTextarea;
    }
  }]);

  return BNFTextarea;
}(InputElement);

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellcheck: false
  }
});

module.exports = BNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9ibmYuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJCTkZUZXh0YXJlYSIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImtleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRWYWx1ZSIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJwcm9wZXJ0aWVzIiwiYm5mVGV4dGFyZWEiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsY2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxXOzs7QUFDSix1QkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLFlBQXJDLEVBQW1EO0FBQUE7O0FBQUEsMEhBQzNDRixRQUQyQyxFQUNqQ0MsYUFEaUM7O0FBR2pELFVBQUtFLE9BQUwsQ0FBYUQsWUFBYjtBQUhpRDtBQUlsRDs7Ozs0QkFFT0EsWSxFQUFjO0FBQ3BCLFdBQUtFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCRixZQUFqQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNRyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE1BQU1GLEtBRFosQ0FETyxDQUVhOztBQUVwQixhQUFPRSxHQUFQO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsVUFBTUYsUUFBUUUsR0FBZCxDQURVLENBQ1U7O0FBRXBCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxTQUFTLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFmO0FBQUEsVUFDTUMsU0FBUyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FEZjs7QUFHQSxhQUFRO0FBQ05ELHNCQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRVQsT0FBRixHQUFjUyxVQUFkLENBQUVULE9BQUY7QUFBQSxVQUNBRCxZQURBLEdBQ2VDLE9BRGY7QUFBQSxVQUVBVSxXQUZBLEdBRWNmLGFBQWFnQixjQUFiLENBQTRCZixXQUE1QixFQUF5Q2EsVUFBekMsRUFBcURWLFlBQXJELENBRmQ7OztBQUlOLGFBQU9XLFdBQVA7QUFDRDs7OztFQXhDdUJmLFk7O0FBMkMxQmlCLE9BQU9DLE1BQVAsQ0FBY2pCLFdBQWQsRUFBMkI7QUFDekJrQixXQUFTLFVBRGdCO0FBRXpCQyxxQkFBbUI7QUFDakJDLGVBQVcsS0FETTtBQUVqQkMsZ0JBQVk7QUFGSztBQUZNLENBQTNCOztBQVFBQyxPQUFPQyxPQUFQLEdBQWlCdkIsV0FBakIiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgQk5GVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gIH1cblxuICBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2tleVVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIGdldEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBibmYgPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldEJORihibmYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGJuZjsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEJORiA9IHRoaXMuZ2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Qk5GLFxuICAgICAgc2V0Qk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSBvbktleVVwLCAvLy9cbiAgICAgICAgICBibmZUZXh0YXJlYSA9IElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhCTkZUZXh0YXJlYSwgcHJvcGVydGllcywga2V5VXBIYW5kbGVyKTtcblxuICAgIHJldHVybiBibmZUZXh0YXJlYTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJyxcbiAgICBzcGVsbGNoZWNrOiBmYWxzZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZUZXh0YXJlYTtcbiJdfQ==