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

var BNFTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(BNFTextarea).apply(this, arguments));
  }

  _createClass(BNFTextarea, [{
    key: "getBNF",
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: "setBNF",
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);
      return {
        getBNF: getBNF,
        setBNF: setBNF
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(BNFTextarea, properties);
    }
  }]);

  return BNFTextarea;
}(InputElement);

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false'
  }
});
module.exports = BNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkJORlRleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldFZhbHVlIiwiZ2V0Qk5GIiwiYmluZCIsInNldEJORiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxXOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxHQUFHLEdBQUdGLEtBRFosQ0FETyxDQUVhOztBQUVwQixhQUFPRSxHQUFQO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsVUFBTUYsS0FBSyxHQUFHRSxHQUFkLENBRFUsQ0FDVTs7QUFFcEIsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1JLE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZjtBQUFBLFVBQ01DLE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FEZjtBQUdBLGFBQVE7QUFDTkQsUUFBQUEsTUFBTSxFQUFOQSxNQURNO0FBRU5FLFFBQUFBLE1BQU0sRUFBTkE7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9ULFlBQVksQ0FBQ1UsY0FBYixDQUE0QlQsV0FBNUIsRUFBeUNRLFVBQXpDLENBQVA7QUFBOEQ7Ozs7RUF4QjFFVCxZOztBQTJCMUJXLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxXQUFkLEVBQTJCO0FBQ3pCWSxFQUFBQSxPQUFPLEVBQUUsVUFEZ0I7QUFFekJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsS0FETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFO0FBRks7QUFGTSxDQUEzQjtBQVFBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQk5GVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GVGV4dGFyZWE7XG4iXX0=