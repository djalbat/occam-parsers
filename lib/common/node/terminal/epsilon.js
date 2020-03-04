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

var lexers = require('occam-lexers');

var TerminalNode = require('../terminal'),
    EpsilonNodeParseTree = require('../../parseTree/epsilonNode');

var specialSymbols = lexers.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(EpsilonNode, _TerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNode).apply(this, arguments));
  }

  _createClass(EpsilonNode, [{
    key: "getContent",
    value: function getContent() {
      var content = epsilon; ///

      return content;
    }
  }, {
    key: "isEpsilonNode",
    value: function isEpsilonNode() {
      var epsilonNode = true;
      return epsilonNode;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var significantToken = null,
          epsilonNode = TerminalNode.fromSignificantToken(EpsilonNode, significantToken);
      return epsilonNode;
    }
  }]);

  return EpsilonNode;
}(TerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlRlcm1pbmFsTm9kZSIsIkVwc2lsb25Ob2RlUGFyc2VUcmVlIiwic3BlY2lhbFN5bWJvbHMiLCJlcHNpbG9uIiwiRXBzaWxvbk5vZGUiLCJjb250ZW50IiwiZXBzaWxvbk5vZGUiLCJ0b2tlbnMiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBQTVCO0FBQUEsSUFDTUUsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQyw2QkFBRCxDQURwQzs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsT0FERixHQUNjRCxjQURkLENBQ0VDLE9BREY7O0lBR0FDLFc7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsT0FBTyxHQUFHRixPQUFoQixDQURXLENBQ2U7O0FBRTFCLGFBQU9FLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixVQUFNQyxvQkFBb0IsR0FBR1Asb0JBQW9CLENBQUNRLFdBQXJCLEVBQTdCO0FBQUEsVUFDTUMsU0FBUyxHQUFHRixvQkFEbEIsQ0FEa0IsQ0FFdUI7O0FBRXpDLGFBQU9FLFNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQyxnQkFBZ0IsR0FBRyxJQUF6QjtBQUFBLFVBQ01MLFdBQVcsR0FBR04sWUFBWSxDQUFDWSxvQkFBYixDQUFrQ1IsV0FBbEMsRUFBK0NPLGdCQUEvQyxDQURwQjtBQUdBLGFBQU9MLFdBQVA7QUFDRDs7OztFQXpCdUJOLFk7O0FBNEIxQmEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL3BhcnNlVHJlZS9lcHNpbG9uTm9kZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFcHNpbG9uTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb247ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGVQYXJzZVRyZWUgPSBFcHNpbG9uTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVwc2lsb25Ob2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIGVwc2lsb25Ob2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVwc2lsb25Ob2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25Ob2RlO1xuIl19