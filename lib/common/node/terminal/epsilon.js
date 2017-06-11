'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal'),
    EpsilonTerminalNodeParseTree = require('../../parseTree/terminalNode/epsilon');

var EpsilonTerminalNode = function (_TerminalNode) {
  _inherits(EpsilonTerminalNode, _TerminalNode);

  function EpsilonTerminalNode() {
    _classCallCheck(this, EpsilonTerminalNode);

    var significantToken = null,
        line = null;

    return _possibleConstructorReturn(this, (EpsilonTerminalNode.__proto__ || Object.getPrototypeOf(EpsilonTerminalNode)).call(this, significantToken, line));
  }

  _createClass(EpsilonTerminalNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = 'ε';

      return content;
    }
  }, {
    key: 'generateParseTree',
    value: function generateParseTree(lines) {
      var epsilonTerminalNode = this,
          ///
      epsilonTerminalNodeParseTree = EpsilonTerminalNodeParseTree.fromEpsilonTerminalNode(epsilonTerminalNode, lines),
          parseTree = epsilonTerminalNodeParseTree; ///

      return parseTree;
    }
  }]);

  return EpsilonTerminalNode;
}(TerminalNode);

module.exports = EpsilonTerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJsaW5lIiwiY29udGVudCIsImxpbmVzIiwiZXBzaWxvblRlcm1pbmFsTm9kZSIsImVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tRXBzaWxvblRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxhQUFSLENBQXJCO0FBQUEsSUFDTUMsK0JBQStCRCxRQUFRLHNDQUFSLENBRHJDOztJQUdNRSxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyxtQkFBbUIsSUFBekI7QUFBQSxRQUNNQyxPQUFPLElBRGI7O0FBRFkscUlBSU5ELGdCQUpNLEVBSVlDLElBSlo7QUFLYjs7OztpQ0FFWTtBQUNYLFVBQU1DLFVBQVUsR0FBaEI7O0FBRUEsYUFBT0EsT0FBUDtBQUNEOzs7c0NBRWlCQyxLLEVBQU87QUFDdkIsVUFBTUMsc0JBQXNCLElBQTVCO0FBQUEsVUFBbUM7QUFDN0JDLHFDQUErQlAsNkJBQTZCUSx1QkFBN0IsQ0FBcURGLG1CQUFyRCxFQUEwRUQsS0FBMUUsQ0FEckM7QUFBQSxVQUVNSSxZQUFZRiw0QkFGbEIsQ0FEdUIsQ0FHMEI7O0FBRWpELGFBQU9FLFNBQVA7QUFDRDs7OztFQXBCK0JYLFk7O0FBdUJsQ1ksT0FBT0MsT0FBUCxHQUFpQlYsbUJBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS9lcHNpbG9uJyk7XG5cbmNsYXNzIEVwc2lsb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICBsaW5lID0gbnVsbDtcbiAgICBcbiAgICBzdXBlcihzaWduaWZpY2FudFRva2VuLCBsaW5lKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9ICfOtSc7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZW5lcmF0ZVBhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbUVwc2lsb25UZXJtaW5hbE5vZGUoZXBzaWxvblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uVGVybWluYWxOb2RlO1xuIl19