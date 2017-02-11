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
      var nodes = [],
          wildcard = this.productionNames === '*';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiUXVlcnkiLCJpbmZpbml0ZURlc2NlbnQiLCJwcm9kdWN0aW9uTmFtZXMiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsIndpbGRjYXJkIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsImluZGV4T2YiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiZXhwcmVzc2lvbiIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZm91cnRoTWF0Y2giLCJmb3VydGgiLCJmaWZ0aE1hdGNoIiwiZmlmdGgiLCJzcGxpdCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsVUFBUixDQUFiO0FBQUEsSUFDSUMsZUFBZUQsUUFBUSx3QkFBUixDQURuQjtBQUFBLElBRUlFLGtCQUFrQkYsUUFBUSwyQkFBUixDQUZ0Qjs7SUFJTUcsSztBQUNKLGlCQUFZQyxlQUFaLEVBQTZCQyxlQUE3QixFQUE4Q0MsUUFBOUMsRUFBd0RDLE1BQXhELEVBQWdFO0FBQUE7O0FBQzlELFNBQUtILGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFo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WGI7QUFBQSxVQVlJRSxRQUFRLElBQUl2QyxLQUFKLENBQVVDLGVBQVYsRUFBMkJDLGVBQTNCLEVBQTRDQyxRQUE1QyxFQUFzREMsTUFBdEQsQ0FaWjs7QUFjQSxhQUFPbUMsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnpDLEtBQWpCOztBQUVBLFNBQVM0QixNQUFULENBQWdCYyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNaLEtBQVQsQ0FBZVksS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNWLE1BQVQsQ0FBZ0JVLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1IsS0FBVCxDQUFlUSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBTcHJlYWQgPSByZXF1aXJlKCcuL3NwcmVhZCcpLFxuICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vY29tbW9uL25vZGUvdGVybWluYWwnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZXMsIHN1YlF1ZXJ5LCBzcHJlYWQpIHtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lcyA9IHByb2R1Y3Rpb25OYW1lcztcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gIH1cbiAgXG4gIG5vZGVzRnJvbU5vZGUobm9kZSkge1xuICAgIHZhciBub2RlcyA9IFtdLFxuICAgICAgICB3aWxkY2FyZCA9ICh0aGlzLnByb2R1Y3Rpb25OYW1lcyA9PT0gJyonKTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGVybWluYWxOb2RlKSB7XG4gICAgICBpZiAod2lsZGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gbm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZvdW5kID0gKHRoaXMucHJvZHVjdGlvbk5hbWVzLmluZGV4T2YocHJvZHVjdGlvbk5hbWUpID4gLTEpO1xuXG4gICAgICBpZiAod2lsZGNhcmQgfHwgZm91bmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5ub2Rlc0Zyb21Ob2RlKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgbm9kZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICB2YXIgY2hpbGROb2RlTm9kZXMgPSB0aGlzLm5vZGVzRnJvbU5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBub2Rlcyk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICB2YXIgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStcXF0pPyhcXC8uKik/JC8sXG4gICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB0aGlyZE1hdGNoLnNwbGl0KCd8JyksICAvLy9cbiAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbiksXG4gICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZXMsIHN1YlF1ZXJ5LCBzcHJlYWQpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuIl19