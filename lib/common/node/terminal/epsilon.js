'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalNode = require('../terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonNode = function (_TerminalNode) {
  _inherits(EpsilonNode, _TerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    var significantToken = null,
        line = null;

    return _possibleConstructorReturn(this, (EpsilonNode.__proto__ || Object.getPrototypeOf(EpsilonNode)).call(this, significantToken, line));
  }

  _createClass(EpsilonNode, [{
    key: 'isEpsilonNode',
    value: function isEpsilonNode() {
      var epsilonNode = true;

      return epsilonNode;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var content = epsilon; ///

      return content;
    }
  }, {
    key: 'parseTreeFromLines',
    value: function parseTreeFromLines(lines) {
      var epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree; ///

      return parseTree;
    }
  }]);

  return EpsilonNode;
}(TerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25Ob2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImxpbmUiLCJlcHNpbG9uTm9kZSIsImNvbnRlbnQiLCJsaW5lcyIsImVwc2lsb25Ob2RlUGFyc2VUcmVlIiwiRXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSxhQUFSLENBQXJCOztBQUVNLElBQUVFLFFBQUYsR0FBZUgsTUFBZixDQUFFRyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLE9BRkYsR0FFY0QsY0FGZCxDQUVFQyxPQUZGOztJQUlBQyxXOzs7QUFDSix5QkFBYztBQUFBOztBQUNaLFFBQU1DLG1CQUFtQixJQUF6QjtBQUFBLFFBQ01DLE9BQU8sSUFEYjs7QUFEWSxxSEFJTkQsZ0JBSk0sRUFJWUMsSUFKWjtBQUtiOzs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxJQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1DLFVBQVVMLE9BQWhCLENBRFcsQ0FDZTs7QUFFMUIsYUFBT0ssT0FBUDtBQUNEOzs7dUNBRWtCQyxLLEVBQU87QUFDeEIsVUFBTUMsdUJBQXVCQyxxQkFBcUJDLFdBQXJCLEVBQTdCO0FBQUEsVUFDTUMsWUFBWUgsb0JBRGxCLENBRHdCLENBRWlCOztBQUV6QyxhQUFPRyxTQUFQO0FBQ0Q7Ozs7RUF6QnVCYixZOztBQTRCMUJjLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25Ob2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgbGluZSA9IG51bGw7XG5cbiAgICBzdXBlcihzaWduaWZpY2FudFRva2VuLCBsaW5lKTtcbiAgfVxuICBcbiAgaXNFcHNpbG9uTm9kZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBwYXJzZVRyZWVGcm9tTGluZXMobGluZXMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uTm9kZTtcbiJdfQ==