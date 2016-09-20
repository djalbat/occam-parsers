'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNode = function () {
  function NonTerminalNode(childNodes) {
    _classCallCheck(this, NonTerminalNode);

    this.childNodes = childNodes;
  }

  _createClass(NonTerminalNode, [{
    key: 'toString',
    value: function toString() {
      var str = this.childNodes.reduce(function (str, childNode) {
        var childNodeStr = childNode.toString();

        str += childNodeStr;

        return str;
      }, '');

      return str;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var childNodes = nodes,
          ///
      nonTerminalNode = new NonTerminalNode(childNodes);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJzdHIiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVTdHIiLCJ0b1N0cmluZyIsIm5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxlO0FBQ0osMkJBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OzsrQkFFVTtBQUNULFVBQUlDLE1BQU0sS0FBS0QsVUFBTCxDQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU0QsR0FBVCxFQUFjRSxTQUFkLEVBQXlCO0FBQ3hELFlBQUlDLGVBQWVELFVBQVVFLFFBQVYsRUFBbkI7O0FBRUFKLGVBQU9HLFlBQVA7O0FBRUEsZUFBT0gsR0FBUDtBQUNELE9BTlMsRUFNUCxFQU5PLENBQVY7O0FBUUEsYUFBT0EsR0FBUDtBQUNEOzs7OEJBRWdCSyxLLEVBQU87QUFDdEIsVUFBSU4sYUFBYU0sS0FBakI7QUFBQSxVQUF3QjtBQUNwQkMsd0JBQWtCLElBQUlSLGVBQUosQ0FBb0JDLFVBQXBCLENBRHRCOztBQUdBTSxjQUFRLENBQUNDLGVBQUQsQ0FBUixDQUpzQixDQUlLOztBQUUzQixhQUFPRCxLQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCVixlQUFqQiIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKHN0ciwgY2hpbGROb2RlKSB7XG4gICAgICB2YXIgY2hpbGROb2RlU3RyID0gY2hpbGROb2RlLnRvU3RyaW5nKCk7XG4gICAgICBcbiAgICAgIHN0ciArPSBjaGlsZE5vZGVTdHI7XG4gICAgICBcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSwgJycpO1xuICAgIFxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBOb25UZXJtaW5hbE5vZGUoY2hpbGROb2Rlcyk7XG5cbiAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG4iXX0=