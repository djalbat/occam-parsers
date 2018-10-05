'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(token) {
    _classCallCheck(this, TerminalNode);

    this.token = token;
  }

  _createClass(TerminalNode, [{
    key: 'getToken',
    value: function getToken() {
      return this.token;
    }
  }, {
    key: 'getFirstToken',
    value: function getFirstToken() {
      var firstToken = this.token; ///

      return firstToken;
    }
  }, {
    key: 'getLastToken',
    value: function getLastToken() {
      var lastToken = this.token; ///

      return lastToken;
    }
  }, {
    key: 'isEpsilonNode',
    value: function isEpsilonNode() {
      var epsilonNode = false;

      return epsilonNode;
    }
  }, {
    key: 'isTerminalNode',
    value: function isTerminalNode() {
      var terminalNode = true;

      return terminalNode;
    }
  }, {
    key: 'isNonTerminalNode',
    value: function isNonTerminalNode() {
      var nonTerminalNode = false;

      return nonTerminalNode;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.token.getContent();
    }
  }, {
    key: 'asParseTree',
    value: function asParseTree(tokens) {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromToken',
    value: function fromToken(Class, token) {
      if (token === undefined) {
        token = Class;
        Class = TerminalNode;
      }

      var terminalNode = new Class(token);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwidG9rZW4iLCJmaXJzdFRva2VuIiwibGFzdFRva2VuIiwiZXBzaWxvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE5Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGFBQWEsS0FBS0QsS0FBeEIsQ0FEYyxDQUNrQjs7QUFFaEMsYUFBT0MsVUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxZQUFZLEtBQUtGLEtBQXZCLENBRGEsQ0FDa0I7O0FBRS9CLGFBQU9FLFNBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxlQUFlLElBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxrQkFBa0IsS0FBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7aUNBRVk7QUFBRSxhQUFPLEtBQUtMLEtBQUwsQ0FBV00sVUFBWCxFQUFQO0FBQWlDOzs7Z0NBRXBDQyxNLEVBQVE7QUFDbEIsVUFBTUgsZUFBZSxJQUFyQjtBQUFBLFVBQTRCO0FBQ3RCSSw4QkFBd0JYLHNCQUFzQlkseUJBQXRCLENBQWdETCxZQUFoRCxFQUE4REcsTUFBOUQsQ0FEOUI7QUFBQSxVQUVNRyxZQUFZRixxQkFGbEIsQ0FEa0IsQ0FHd0I7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkMsSyxFQUFPWCxLLEVBQU87QUFDN0IsVUFBSUEsVUFBVVksU0FBZCxFQUF5QjtBQUN2QlosZ0JBQVFXLEtBQVI7QUFDQUEsZ0JBQVFaLFlBQVI7QUFDRDs7QUFFRCxVQUFNSyxlQUFlLElBQUlPLEtBQUosQ0FBVVgsS0FBVixDQUFyQjs7QUFFQSxhQUFPSSxZQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCZixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcih0b2tlbikge1xuICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RUb2tlbigpIHtcbiAgICBjb25zdCBmaXJzdFRva2VuID0gdGhpcy50b2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0VG9rZW47XG4gIH1cblxuICBnZXRMYXN0VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFRva2VuID0gdGhpcy50b2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RUb2tlbjtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7IHJldHVybiB0aGlzLnRva2VuLmdldENvbnRlbnQoKTsgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbihDbGFzcywgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdG9rZW4gPSBDbGFzcztcbiAgICAgIENsYXNzID0gVGVybWluYWxOb2RlXG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHRva2VuKTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19