'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalNode = require('../terminal'),
    EpsilonNodeParseTree = require('../../parseTree/epsilonNode');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonNode = function (_TerminalNode) {
  _inherits(EpsilonNode, _TerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    var significantToken = null;

    return _possibleConstructorReturn(this, (EpsilonNode.__proto__ || Object.getPrototypeOf(EpsilonNode)).call(this, significantToken));
  }

  _createClass(EpsilonNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = epsilon; ///

      return content;
    }
  }, {
    key: 'isEpsilonNode',
    value: function isEpsilonNode() {
      var epsilonNode = true;

      return epsilonNode;
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree; ///

      return parseTree;
    }
  }]);

  return EpsilonNode;
}(TerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJlcHNpbG9uIiwiRXBzaWxvbk5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImVwc2lsb25Ob2RlIiwidG9rZW5zIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxhQUFSLENBQXJCO0FBQUEsSUFDTUUsdUJBQXVCRixRQUFRLDZCQUFSLENBRDdCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLE9BRkYsR0FFY0QsY0FGZCxDQUVFQyxPQUZGOztJQUlBQyxXOzs7QUFDSix5QkFBYztBQUFBOztBQUNaLFFBQU1DLG1CQUFtQixJQUF6Qjs7QUFEWSxxSEFHTkEsZ0JBSE07QUFJYjs7OztpQ0FFWTtBQUNYLFVBQU1DLFVBQVVILE9BQWhCLENBRFcsQ0FDZTs7QUFFMUIsYUFBT0csT0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLElBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsVUFBTUMsdUJBQXVCVCxxQkFBcUJVLFdBQXJCLEVBQTdCO0FBQUEsVUFDTUMsWUFBWUYsb0JBRGxCLENBRGtCLENBRXVCOztBQUV6QyxhQUFPRSxTQUFQO0FBQ0Q7Ozs7RUF4QnVCWixZOztBQTJCMUJhLE9BQU9DLE9BQVAsR0FBaUJULFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvbk5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9wYXJzZVRyZWUvZXBzaWxvbk5vZGUnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFcHNpbG9uTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgc3VwZXIoc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlcHNpbG9uOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gRXBzaWxvbk5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBlcHNpbG9uTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25Ob2RlO1xuIl19