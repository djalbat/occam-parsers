'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNode = function () {
  function NonTerminalNode(childNodes, name) {
    _classCallCheck(this, NonTerminalNode);

    this.childNodes = childNodes;
    this.name = name;
  }

  _createClass(NonTerminalNode, [{
    key: 'toString',
    value: function toString() {
      var childNodesStr = this.childNodes.reduce(function (childNodesStr, childNode) {
        var childNodeStr = childNode.toString();

        childNodesStr += childNodeStr;

        return childNodesStr;
      }, ''),
          nameLength = this.name.length,
          length = Math.floor(nameLength / 2),
          leftMarginStr = leftMarginStrFromLength(length),
          str = leftMarginStr + this.name + '\n' + leftMarginStr + '|' + '\n';

      return str;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, name) {
      var childNodes = nodes,
          ///
      nonTerminalNode = new NonTerminalNode(childNodes, name);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function leftMarginStrFromLength(length) {
  var leftMarginStr = '';

  for (var count = 0; count < length; count++) {
    leftMarginStr += '.';
  }

  return leftMarginStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJuYW1lIiwiY2hpbGROb2Rlc1N0ciIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVN0ciIsInRvU3RyaW5nIiwibmFtZUxlbmd0aCIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsImxlZnRNYXJnaW5TdHIiLCJsZWZ0TWFyZ2luU3RyRnJvbUxlbmd0aCIsInN0ciIsIm5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGU7QUFDSiwyQkFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzsrQkFFVTtBQUNULFVBQUlDLGdCQUFnQixLQUFLRixVQUFMLENBQWdCRyxNQUFoQixDQUF1QixVQUFTRCxhQUFULEVBQXdCRSxTQUF4QixFQUFtQztBQUN4RSxZQUFJQyxlQUFlRCxVQUFVRSxRQUFWLEVBQW5COztBQUVBSix5QkFBaUJHLFlBQWpCOztBQUVBLGVBQU9ILGFBQVA7QUFDRCxPQU5lLEVBTWIsRUFOYSxDQUFwQjtBQUFBLFVBT0lLLGFBQWEsS0FBS04sSUFBTCxDQUFVTyxNQVAzQjtBQUFBLFVBUUlBLFNBQVNDLEtBQUtDLEtBQUwsQ0FBV0gsYUFBVyxDQUF0QixDQVJiO0FBQUEsVUFTSUksZ0JBQWdCQyx3QkFBd0JKLE1BQXhCLENBVHBCO0FBQUEsVUFVSUssTUFDRUYsZ0JBQWdCLEtBQUtWLElBQXJCLEdBQTRCLElBQTVCLEdBQ0FVLGFBREEsR0FDZ0IsR0FEaEIsR0FDc0IsSUFaNUI7O0FBY0EsYUFBT0UsR0FBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9iLEksRUFBTTtBQUM1QixVQUFJRCxhQUFhYyxLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCQyx3QkFBa0IsSUFBSWhCLGVBQUosQ0FBb0JDLFVBQXBCLEVBQWdDQyxJQUFoQyxDQUR0Qjs7QUFHQWEsY0FBUSxDQUFDQyxlQUFELENBQVIsQ0FKNEIsQ0FJRDs7QUFFM0IsYUFBT0QsS0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmxCLGVBQWpCOztBQUVBLFNBQVNhLHVCQUFULENBQWlDSixNQUFqQyxFQUF5QztBQUN2QyxNQUFJRyxnQkFBZ0IsRUFBcEI7O0FBRUEsT0FBSyxJQUFJTyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRVixNQUE1QixFQUFvQ1UsT0FBcEMsRUFBNkM7QUFDM0NQLHFCQUFpQixHQUFqQjtBQUNEOztBQUVELFNBQU9BLGFBQVA7QUFDRCIsImZpbGUiOiJub25UZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoY2hpbGROb2RlcywgbmFtZSkge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBcbiAgdG9TdHJpbmcoKSB7XG4gICAgdmFyIGNoaWxkTm9kZXNTdHIgPSB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkTm9kZXNTdHIsIGNoaWxkTm9kZSkge1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVTdHIgPSBjaGlsZE5vZGUudG9TdHJpbmcoKTtcblxuICAgICAgICAgIGNoaWxkTm9kZXNTdHIgKz0gY2hpbGROb2RlU3RyO1xuXG4gICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZXNTdHI7XG4gICAgICAgIH0sICcnKSxcbiAgICAgICAgbmFtZUxlbmd0aCA9IHRoaXMubmFtZS5sZW5ndGgsXG4gICAgICAgIGxlbmd0aCA9IE1hdGguZmxvb3IobmFtZUxlbmd0aC8yKSxcbiAgICAgICAgbGVmdE1hcmdpblN0ciA9IGxlZnRNYXJnaW5TdHJGcm9tTGVuZ3RoKGxlbmd0aCksXG4gICAgICAgIHN0ciA9XG4gICAgICAgICAgbGVmdE1hcmdpblN0ciArIHRoaXMubmFtZSArICdcXG4nICtcbiAgICAgICAgICBsZWZ0TWFyZ2luU3RyICsgJ3wnICsgJ1xcbic7XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgbmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKGNoaWxkTm9kZXMsIG5hbWUpO1xuXG4gICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBsZWZ0TWFyZ2luU3RyRnJvbUxlbmd0aChsZW5ndGgpIHtcbiAgdmFyIGxlZnRNYXJnaW5TdHIgPSAnJztcblxuICBmb3IgKHZhciBjb3VudCA9IDA7IGNvdW50IDwgbGVuZ3RoOyBjb3VudCsrKSB7XG4gICAgbGVmdE1hcmdpblN0ciArPSAnLic7XG4gIH1cblxuICByZXR1cm4gbGVmdE1hcmdpblN0cjtcbn0iXX0=