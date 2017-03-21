'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread'),
    TerminalNode = require('./common/node/terminal'),
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

      var wildcard = this.productionNames === '*';

      if (false) {} else if (node instanceof TerminalNode) {
        if (wildcard) {
          if (this.spread.isBetween()) {
            if (this.subQuery === null) {
              nodes = [node];
            }
          }

          this.spread.incrementIndex();
        }
      } else if (node instanceof NonTerminalNode) {
        var childNodes = node.getChildNodes(),
            productionName = node.getProductionName(),
            found = this.productionNames.indexOf(productionName) > -1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiUXVlcnkiLCJpbmZpbml0ZURlc2NlbnQiLCJwcm9kdWN0aW9uTmFtZXMiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsIndpbGRjYXJkIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsImluZGV4T2YiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiZXhwcmVzc2lvbiIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJmaWZ0aE1hdGNoIiwiZmlmdGgiLCJzcGxpdCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwyQkFBUixDQUZ4Qjs7SUFJTUcsSztBQUNKLGlCQUFZQyxlQUFaLEVBQTZCQyxlQUE3QixFQUE4Q0MsUUFBOUMsRUFBd0RDLE1BQXhELEVBQWdFO0FBQUE7O0FBQzlELFNBQUtILGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFo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LENBWGY7QUFBQSxVQVlNRSxRQUFRLElBQUl2QyxLQUFKLENBQVVDLGVBQVYsRUFBMkJDLGVBQTNCLEVBQTRDQyxRQUE1QyxFQUFzREMsTUFBdEQsQ0FaZDs7QUFjQSxhQUFPbUMsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnpDLEtBQWpCOztBQUVBLFNBQVM0QixNQUFULENBQWdCYyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNaLEtBQVQsQ0FBZVksS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNWLE1BQVQsQ0FBZ0JVLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1IsS0FBVCxDQUFlUSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgICBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZXMsIHN1YlF1ZXJ5LCBzcHJlYWQpIHtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lcyA9IHByb2R1Y3Rpb25OYW1lcztcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gIH1cbiAgXG4gIG5vZGVzRnJvbU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHdpbGRjYXJkID0gKHRoaXMucHJvZHVjdGlvbk5hbWVzID09PSAnKicpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGlmICh3aWxkY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gbm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgZm91bmQgPSAodGhpcy5wcm9kdWN0aW9uTmFtZXMuaW5kZXhPZihwcm9kdWN0aW9uTmFtZSkgPiAtMSk7XG5cbiAgICAgIGlmICh3aWxkY2FyZCB8fCBmb3VuZCkge1xuICAgICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihub2RlcywgY2hpbGROb2RlKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9kZXMgPSB0aGlzLm5vZGVzRnJvbU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBub2Rlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXFxdKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB0aGlyZE1hdGNoLnNwbGl0KCd8JyksICAvLy9cbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21FeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWVzLCBzdWJRdWVyeSwgc3ByZWFkKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cbiJdfQ==