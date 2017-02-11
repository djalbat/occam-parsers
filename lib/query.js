'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread'),
    NonTerminalNode = require('./common/node/nonTerminal');

var Query = function () {
  function Query(infiniteDescent, productionNames, subQuery, spread) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.productionNames = productionNames;
    this.subQuery = subQuery;
    this.spread = spread;
  }

  _createClass(Query, [{
    key: 'nodesFromNode',
    value: function nodesFromNode(node) {
      var nodes = [];

      if (node instanceof NonTerminalNode) {
        var childNodes = node.getChildNodes(),
            nodeProductionName = node.getProductionName(),
            wildcard = this.productionNames === '*',
            found = this.productionNames.indexOf(nodeProductionName) > -1;

        if (wildcard || found) {
          if (this.spread.isBetween()) {
            if (this.subQuery === null) {
              nodes = [node];
            } else {
              nodes = childNodes.reduce(function (nodes, childNode) {
                var childNodeNodes = this.subQuery.nodesFromNode(childNode);

                nodes = nodes.concat(childNodeNodes);

                return nodes;
              }.bind(this), nodes);
            }
          }

          this.spread.incrementIndex();
        }

        if (this.infiniteDescent) {
          nodes = childNodes.reduce(function (nodes, childNode) {
            var childNodeNodes = this.nodesFromNode(childNode);

            nodes = nodes.concat(childNodeNodes);

            return nodes;
          }.bind(this), nodes);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      if (expression === undefined) {
        ///
        return null;
      }

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          infiniteDescent = secondMatch === '/',
          ///
      productionNames = thirdMatch.split('|'),
          ///
      subExpression = fifthMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subQuery = Query.fromExpression(subExpression),
          spread = Spread.fromExpression(spreadExpression),
          query = new Query(infiniteDescent, productionNames, subQuery, spread);

      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
function fourth(array) {
  return array[3];
}
function fifth(array) {
  return array[4];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUXVlcnkiLCJpbmZpbml0ZURlc2NlbnQiLCJwcm9kdWN0aW9uTmFtZXMiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJ3aWxkY2FyZCIsImZvdW5kIiwiaW5kZXhPZiIsImlzQmV0d2VlbiIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vZGVzIiwibm9kZXNGcm9tTm9kZSIsImNvbmNhdCIsImJpbmQiLCJpbmNyZW1lbnRJbmRleCIsImV4cHJlc3Npb24iLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwiZmlmdGhNYXRjaCIsImZpZnRoIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFVBQVIsQ0FBYjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSwyQkFBUixDQUR0Qjs7SUFHTUUsSztBQUNKLGlCQUFZQyxlQUFaLEVBQTZCQyxlQUE3QixFQUE4Q0MsUUFBOUMsRUFBd0RDLE1BQXhELEVBQWdFO0FBQUE7O0FBQzlELFNBQUtILGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2tDQUVhQyxJ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TUFBVCxDQUFnQlUsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTUixLQUFULENBQWVRLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWVzLCBzdWJRdWVyeSwgc3ByZWFkKSB7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZXMgPSBwcm9kdWN0aW9uTmFtZXM7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICB9XG4gIFxuICBub2Rlc0Zyb21Ob2RlKG5vZGUpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVQcm9kdWN0aW9uTmFtZSA9IG5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICB3aWxkY2FyZCA9ICh0aGlzLnByb2R1Y3Rpb25OYW1lcyA9PT0gJyonKSxcbiAgICAgICAgICBmb3VuZCA9ICh0aGlzLnByb2R1Y3Rpb25OYW1lcy5pbmRleE9mKG5vZGVQcm9kdWN0aW9uTmFtZSkgPiAtMSk7XG5cbiAgICAgIGlmICh3aWxkY2FyZCB8fCBmb3VuZCkge1xuICAgICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlTm9kZXMgPSB0aGlzLnN1YlF1ZXJ5Lm5vZGVzRnJvbU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCBub2Rlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdmFyIHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXFxdKT8oXFwvLiopPyQvLFxuICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWVzID0gdGhpcmRNYXRjaC5zcGxpdCgnfCcpLCAgLy8vXG4gICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pLFxuICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWVzLCBzdWJRdWVyeSwgc3ByZWFkKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cbiJdfQ==