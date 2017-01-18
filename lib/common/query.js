'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread');

var Query = function () {
  function Query(infiniteDescent, productionName, subQuery, spread) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.productionName = productionName;
    this.subQuery = subQuery;
    this.spread = spread;
  }

  _createClass(Query, [{
    key: 'nodesFromNode',
    value: function nodesFromNode(node) {
      var nodes = [],
          childNodes = node.getChildNodes(),
          nodeProductionName = node.getProductionName();

      if (this.productionName === '*' || this.productionName === nodeProductionName) {

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

      var matches = expression.match(/^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          infiniteDescent = secondMatch === '/',
          ///
      productionName = thirdMatch,
          ///
      subExpression = fifthMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subQuery = Query.fromExpression(subExpression),
          spread = Spread.fromExpression(spreadExpression),
          query = new Query(infiniteDescent, productionName, subQuery, spread);

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

/*

 Rule
 Premises
 A
 B
 C
 Conclusion
 D

 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcXVlcnkuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwicmVxdWlyZSIsIlF1ZXJ5IiwiaW5maW5pdGVEZXNjZW50IiwicHJvZHVjdGlvbk5hbWUiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJpc0JldHdlZW4iLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiaW5jcmVtZW50SW5kZXgiLCJleHByZXNzaW9uIiwidW5kZWZpbmVkIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsImZpZnRoTWF0Y2giLCJmaWZ0aCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsVUFBUixDQUFiOztJQUVNQyxLO0FBQ0osaUJBQVlDLGVBQVosRUFBNkJDLGNBQTdCLEVBQTZDQyxRQUE3QyxFQUF1REMsTUFBdkQsRUFBK0Q7QUFBQTs7QUFDN0QsU0FBS0gsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWFDLEksRUFBTTtBQUNsQixVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxhQUFhRixLQUFLRyxhQUFMLEVBRGpCO0FBQUEsVUFFSUMscUJBQXFCSixLQUFLSyxpQkFBTCxFQUZ6Qjs7QUFJQSxVQUFLLEtBQUtSLGNBQUwsS0FBd0IsR0FBekIsSUFDQyxLQUFLQSxjQUFMLEtBQXdCTyxrQkFEN0IsRUFDa0Q7O0FBRWhELFlBQUksS0FBS0wsTUFBTCxDQUFZTyxTQUFaLEVBQUosRUFBNkI7QUFDM0IsY0FBSSxLQUFLUixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCRyxvQkFBUSxDQUFDRCxJQUFELENBQVI7QUFDRCxXQUZELE1BRU87QUFDTEMsb0JBQVFDLFdBQVdLLE1BQVgsQ0FBa0IsVUFBU04sS0FBVCxFQUFnQk8sU0FBaEIsRUFBMkI7QUFDbkQsa0JBQUlDLGlCQUFpQixLQUFLWCxRQUFMLENBQWNZLGFBQWQsQ0FBNEJGLFNBQTVCLENBQXJCOztBQUVBUCxzQkFBUUEsTUFBTVUsTUFBTixDQUFhRixjQUFiLENBQVI7O0FBRUEscUJBQU9SLEtBQVA7QUFDRCxhQU55QixDQU14QlcsSUFOd0IsQ0FNbkIsSUFObUIsQ0FBbEIsRUFNTVgsS0FOTixDQUFSO0FBT0Q7QUFDRjs7QUFFRCxhQUFLRixNQUFMLENBQVljLGNBQVo7QUFDRDs7QUFFRCxVQUFJLEtBQUtqQixlQUFULEVBQTBCO0FBQ3hCSyxnQkFBUUMsV0FBV0ssTUFBWCxDQUFrQixVQUFTTixLQUFULEVBQWdCTyxTQUFoQixFQUEyQjtBQUNuRCxjQUFJQyxpQkFBaUIsS0FBS0MsYUFBTCxDQUFtQkYsU0FBbkIsQ0FBckI7O0FBRUFQLGtCQUFRQSxNQUFNVSxNQUFOLENBQWFGLGNBQWIsQ0FBUjs7QUFFQSxpQkFBT1IsS0FBUDtBQUNELFNBTnlCLENBTXhCVyxJQU53QixDQU1uQixJQU5tQixDQUFsQixFQU1NWCxLQU5OLENBQVI7QUFPRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzttQ0FFcUJhLFUsRUFBWTtBQUNoQyxVQUFJQSxlQUFlQyxTQUFuQixFQUE4QjtBQUFFO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlDLFVBQVVGLFdBQVdHLEtBQVgsQ0FBaUIsd0NBQWpCLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGNBQWNDLE9BQU9QLE9BQVAsQ0FIbEI7QUFBQSxVQUlJUSxhQUFhQyxNQUFNVCxPQUFOLENBSmpCO0FBQUEsVUFLSXBCLGtCQUFtQnNCLGdCQUFnQixHQUx2QztBQUFBLFVBSzhDO0FBQzFDckIsdUJBQWlCdUIsVUFOckI7QUFBQSxVQU1rQztBQUM5Qk0sc0JBQWdCRixVQVBwQjtBQUFBLFVBT2lDO0FBQzdCRyx5QkFBbUJMLFdBUnZCO0FBQUEsVUFRcUM7QUFDakN4QixpQkFBV0gsTUFBTWlDLGNBQU4sQ0FBcUJGLGFBQXJCLENBVGY7QUFBQSxVQVVJM0IsU0FBU04sT0FBT21DLGNBQVAsQ0FBc0JELGdCQUF0QixDQVZiO0FBQUEsVUFXSUUsUUFBUSxJQUFJbEMsS0FBSixDQUFVQyxlQUFWLEVBQTJCQyxjQUEzQixFQUEyQ0MsUUFBM0MsRUFBcURDLE1BQXJELENBWFo7O0FBYUEsYUFBTzhCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJwQyxLQUFqQjs7QUFFQSxTQUFTd0IsTUFBVCxDQUFnQmEsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWCxLQUFULENBQWVXLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTVCxNQUFULENBQWdCUyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzNDLFNBQVNQLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCOztBQUUxQyIsImZpbGUiOiJxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyk7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZSwgc3ViUXVlcnksIHNwcmVhZCkge1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gIH1cbiAgXG4gIG5vZGVzRnJvbU5vZGUobm9kZSkge1xuICAgIHZhciBub2RlcyA9IFtdLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vZGVQcm9kdWN0aW9uTmFtZSA9IG5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcblxuICAgIGlmICgodGhpcy5wcm9kdWN0aW9uTmFtZSA9PT0gJyonKSB8fFxuICAgICAgICAodGhpcy5wcm9kdWN0aW9uTmFtZSA9PT0gbm9kZVByb2R1Y3Rpb25OYW1lKSkge1xuXG4gICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihub2RlcywgY2hpbGROb2RlKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdmFyIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXFxdKT8oXFwvLiopPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSAnLycpLCAgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdGhpcmRNYXRjaCwgIC8vL1xuICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2gsICAvLy9cbiAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21FeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShpbmZpbml0ZURlc2NlbnQsIHByb2R1Y3Rpb25OYW1lLCBzdWJRdWVyeSwgc3ByZWFkKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuLypcblxuIFJ1bGVcbiBQcmVtaXNlc1xuIEFcbiBCXG4gQ1xuIENvbmNsdXNpb25cbiBEXG5cbiAqLyJdfQ==