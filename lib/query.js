'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread');

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
          childNodes = node.getChildNodes(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiUXVlcnkiLCJpbmZpbml0ZURlc2NlbnQiLCJwcm9kdWN0aW9uTmFtZXMiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJ3aWxkY2FyZCIsImZvdW5kIiwiaW5kZXhPZiIsImlzQmV0d2VlbiIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vZGVzIiwibm9kZXNGcm9tTm9kZSIsImNvbmNhdCIsImJpbmQiLCJpbmNyZW1lbnRJbmRleCIsImV4cHJlc3Npb24iLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwiZmlmdGhNYXRjaCIsImZpZnRoIiwic3BsaXQiLCJzdWJFeHByZXNzaW9uIiwic3ByZWFkRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFVBQVIsQ0FBYjs7SUFFTUMsSztBQUNKLGlCQUFZQyxlQUFaLEVBQTZCQyxlQUE3QixFQUE4Q0MsUUFBOUMsRUFBd0RDLE1BQXhELEVBQWdFO0FBQUE7O0FBQzlELFNBQUtILGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2tDQUVhQyxJLEVBQU07QUFDbEIsVUFBSUMsUUFBUSxFQUFaO0FBQUEsVUFDSUMsYUFBYUYsS0FBS0csYUFB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LFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ByZWFkID0gcmVxdWlyZSgnLi9zcHJlYWQnKTtcblxuY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihpbmZpbml0ZURlc2NlbnQsIHByb2R1Y3Rpb25OYW1lcywgc3ViUXVlcnksIHNwcmVhZCkge1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWVzID0gcHJvZHVjdGlvbk5hbWVzO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgfVxuICBcbiAgbm9kZXNGcm9tTm9kZShub2RlKSB7XG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9kZVByb2R1Y3Rpb25OYW1lID0gbm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICB3aWxkY2FyZCA9ICh0aGlzLnByb2R1Y3Rpb25OYW1lcyA9PT0gJyonKSxcbiAgICAgICAgZm91bmQgPSAodGhpcy5wcm9kdWN0aW9uTmFtZXMuaW5kZXhPZihub2RlUHJvZHVjdGlvbk5hbWUpID4gLTEpO1xuXG4gICAgaWYgKHdpbGRjYXJkIHx8IGZvdW5kKSB7XG4gICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihub2RlcywgY2hpbGROb2RlKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdmFyIHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXFxdKT8oXFwvLiopPyQvLFxuICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWVzID0gdGhpcmRNYXRjaC5zcGxpdCgnfCcpLCAgLy8vXG4gICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pLFxuICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWVzLCBzdWJRdWVyeSwgc3ByZWFkKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cbiJdfQ==