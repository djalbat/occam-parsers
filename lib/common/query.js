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

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+\])?(\/.*)?$/,
          matches = expression.match(regExp),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcXVlcnkuanMiXSwibmFtZXMiOlsiU3ByZWFkIiwicmVxdWlyZSIsIlF1ZXJ5IiwiaW5maW5pdGVEZXNjZW50IiwicHJvZHVjdGlvbk5hbWUiLCJzdWJRdWVyeSIsInNwcmVhZCIsIm5vZGUiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZVByb2R1Y3Rpb25OYW1lIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJpc0JldHdlZW4iLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsIm5vZGVzRnJvbU5vZGUiLCJjb25jYXQiLCJiaW5kIiwiaW5jcmVtZW50SW5kZXgiLCJleHByZXNzaW9uIiwidW5kZWZpbmVkIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJmb3VydGhNYXRjaCIsImZvdXJ0aCIsImZpZnRoTWF0Y2giLCJmaWZ0aCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsVUFBUixDQUFiOztJQUVNQyxLO0FBQ0osaUJBQVlDLGVBQVosRUFBNkJDLGNBQTdCLEVBQTZDQyxRQUE3QyxFQUF1REMsTUFBdkQsRUFBK0Q7QUFBQTs7QUFDN0QsU0FBS0gsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWFDLEksRUFBTTtBQUNsQixVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxhQUFhRixLQUFLRyxhQUFMLEVBRGpCO0FBQUEsVUFFSUMscUJBQXFCSixLQUFLSyxpQkFBTCxFQUZ6Qjs7QUFJQSxVQUFLLEtBQUtSLGNBQUwsS0FBd0IsR0FBekIsSUFDQyxLQUFLQSxjQUFMLEtBQXdCTyxrQkFEN0IsRUFDa0Q7O0FBRWhELFlBQUksS0FBS0wsTUFBTCxDQUFZTyxTQUFaLEVBQUosRUFBNkI7QUFDM0IsY0FBSSxLQUFLUixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCRyxvQkFBUSxDQUFDRCxJQUFELENBQVI7QUFDRCxXQUZELE1BRU87QUFDTEMsb0JBQVFDLFdBQVdLLE1BQVgsQ0FBa0IsVUFBU04sS0FBVCxFQUFnQk8sU0FBaEIsRUFBMkI7QUFDbkQsa0JBQUlDLGlCQUFpQixLQUFLWCxRQUFMLENBQWNZLGFBQWQsQ0FBNEJGLFNBQTVCLENBQXJCOztBQUVBUCxzQkFBUUEsTUFBTVUsTUFBTixDQUFhRixjQUFiLENBQVI7O0FBRUEscUJBQU9SLEtBQVA7QUFDRCxhQU55QixDQU14QlcsSUFOd0IsQ0FNbkIsSUFObUIsQ0FBbEIsRUFNTVgsS0FOTixDQUFSO0FBT0Q7QUFDRjs7QUFFRCxhQUFLRixNQUFMLENBQVljLGNBQVo7QUFDRDs7QUFFRCxVQUFJLEtBQUtqQixlQUFULEVBQTBCO0FBQ3hCSyxnQkFBUUMsV0FBV0ssTUFBWCxDQUFrQixVQUFTTixLQUFULEVBQWdCTyxTQUFoQixFQUEyQjtBQUNuRCxjQUFJQyxpQkFBaUIsS0FBS0MsYUFBTCxDQUFtQkYsU0FBbkIsQ0FBckI7O0FBRUFQLGtCQUFRQSxNQUFNVSxNQUFOLENBQWFGLGNBQWIsQ0FBUjs7QUFFQSxpQkFBT1IsS0FBUDtBQUNELFNBTnlCLENBTXhCVyxJQU53QixDQU1uQixJQU5tQixDQUFsQixFQU1NWCxLQU5OLENBQVI7QUFPRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzttQ0FFcUJhLFUsRUFBWTtBQUNoQyxVQUFJQSxlQUFlQyxTQUFuQixFQUE4QjtBQUFFO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlDLFNBQVMsd0NBQWI7QUFBQSxVQUNJQyxVQUFVSCxXQUFXSSxLQUFYLENBQWlCRixNQUFqQixDQURkO0FBQUEsVUFFSUcsY0FBY0MsT0FBT0gsT0FBUCxDQUZsQjtBQUFBLFVBR0lJLGFBQWFDLE1BQU1MLE9BQU4sQ0FIakI7QUFBQSxVQUlJTSxjQUFjQyxPQUFPUCxPQUFQLENBSmxCO0FBQUEsVUFLSVEsYUFBYUMsTUFBTVQsT0FBTixDQUxqQjtBQUFBLFVBTUlyQixrQkFBbUJ1QixnQkFBZ0IsR0FOdkM7QUFBQSxVQU04QztBQUMxQ3RCLHVCQUFpQndCLFVBUHJCO0FBQUEsVUFPa0M7QUFDOUJNLHNCQUFnQkYsVUFScEI7QUFBQSxVQVFpQztBQUM3QkcseUJBQW1CTCxXQVR2QjtBQUFBLFVBU3FDO0FBQ2pDekIsaUJBQVdILE1BQU1rQyxjQUFOLENBQXFCRixhQUFyQixDQVZmO0FBQUEsVUFXSTVCLFNBQVNOLE9BQU9vQyxjQUFQLENBQXNCRCxnQkFBdEIsQ0FYYjtBQUFBLFVBWUlFLFFBQVEsSUFBSW5DLEtBQUosQ0FBVUMsZUFBVixFQUEyQkMsY0FBM0IsRUFBMkNDLFFBQTNDLEVBQXFEQyxNQUFyRCxDQVpaOztBQWNBLGFBQU8rQixLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckMsS0FBakI7O0FBRUEsU0FBU3lCLE1BQVQsQ0FBZ0JhLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1gsS0FBVCxDQUFlVyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU1QsTUFBVCxDQUFnQlMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTUCxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJxdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyk7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoaW5maW5pdGVEZXNjZW50LCBwcm9kdWN0aW9uTmFtZSwgc3ViUXVlcnksIHNwcmVhZCkge1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLnN1YlF1ZXJ5ID0gc3ViUXVlcnk7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gIH1cbiAgXG4gIG5vZGVzRnJvbU5vZGUobm9kZSkge1xuICAgIHZhciBub2RlcyA9IFtdLFxuICAgICAgICBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vZGVQcm9kdWN0aW9uTmFtZSA9IG5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcblxuICAgIGlmICgodGhpcy5wcm9kdWN0aW9uTmFtZSA9PT0gJyonKSB8fFxuICAgICAgICAodGhpcy5wcm9kdWN0aW9uTmFtZSA9PT0gbm9kZVByb2R1Y3Rpb25OYW1lKSkge1xuXG4gICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG5vZGVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihub2RlcywgY2hpbGROb2RlKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGVOb2RlcyA9IHRoaXMubm9kZXNGcm9tTm9kZShjaGlsZE5vZGUpO1xuXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9LmJpbmQodGhpcyksIG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdmFyIHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXFxdKT8oXFwvLiopPyQvLFxuICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlyZE1hdGNoLCAgLy8vXG4gICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pLFxuICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KGluZmluaXRlRGVzY2VudCwgcHJvZHVjdGlvbk5hbWUsIHN1YlF1ZXJ5LCBzcHJlYWQpO1xuICAgIFxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuIl19