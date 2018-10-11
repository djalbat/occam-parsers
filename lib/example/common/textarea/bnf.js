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

    if (keyUpHandler) {
      _this.onKeyUp(keyUpHandler);
    }
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
    spellCheck: false
  },
  ignoredProperties: ['onKeyUp']
});

module.exports = BNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi90ZXh0YXJlYS9ibmYuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJCTkZUZXh0YXJlYSIsInNlbGVjdG9yIiwiY2hhbmdlSGFuZGxlciIsImtleVVwSGFuZGxlciIsIm9uS2V5VXAiLCJvbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRWYWx1ZSIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJwcm9wZXJ0aWVzIiwiYm5mVGV4dGFyZWEiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLFc7OztBQUNKLHVCQUFZQyxRQUFaLEVBQXNCQyxhQUF0QixFQUFxQ0MsWUFBckMsRUFBbUQ7QUFBQTs7QUFBQSwwSEFDM0NGLFFBRDJDLEVBQ2pDQyxhQURpQzs7QUFHakQsUUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFLQyxPQUFMLENBQWFELFlBQWI7QUFDRDtBQUxnRDtBQU1sRDs7Ozs0QkFFT0EsWSxFQUFjO0FBQ3BCLFdBQUtFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCRixZQUFqQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNRyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE1BQU1GLEtBRFosQ0FETyxDQUVhOztBQUVwQixhQUFPRSxHQUFQO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsVUFBTUYsUUFBUUUsR0FBZCxDQURVLENBQ1U7O0FBRXBCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxTQUFTLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFmO0FBQUEsVUFDTUMsU0FBUyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FEZjs7QUFHQSxhQUFRO0FBQ05ELHNCQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRVQsT0FBRixHQUFjUyxVQUFkLENBQUVULE9BQUY7QUFBQSxVQUNBRCxZQURBLEdBQ2VDLE9BRGY7QUFBQSxVQUVBVSxXQUZBLEdBRWNmLGFBQWFnQixjQUFiLENBQTRCZixXQUE1QixFQUF5Q2EsVUFBekMsRUFBcURWLFlBQXJELENBRmQ7OztBQUlOLGFBQU9XLFdBQVA7QUFDRDs7OztFQTFDdUJmLFk7O0FBNkMxQmlCLE9BQU9DLE1BQVAsQ0FBY2pCLFdBQWQsRUFBMkI7QUFDekJrQixXQUFTLFVBRGdCO0FBRXpCQyxxQkFBbUI7QUFDakJDLGVBQVcsS0FETTtBQUVqQkMsZ0JBQVk7QUFGSyxHQUZNO0FBTXpCQyxxQkFBbUIsQ0FDakIsU0FEaUI7QUFOTSxDQUEzQjs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQnhCLFdBQWpCIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGtleVVwSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKTtcblxuICAgIGlmIChrZXlVcEhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25LZXlVcChrZXlVcEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoa2V5VXBIYW5kbGVyKSB7XG4gICAgdGhpcy5vbigna2V5VXAnLCBrZXlVcEhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbktleVVwIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IG9uS2V5VXAsIC8vL1xuICAgICAgICAgIGJuZlRleHRhcmVhID0gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJORlRleHRhcmVhLCBwcm9wZXJ0aWVzLCBrZXlVcEhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGJuZlRleHRhcmVhO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnLFxuICAgIHNwZWxsQ2hlY2s6IGZhbHNlXG4gIH0sXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uS2V5VXAnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlRleHRhcmVhO1xuIl19