'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../util/array');

var GroupOfPartsPart = function () {
  function GroupOfPartsPart(parts) {
    _classCallCheck(this, GroupOfPartsPart);

    this.parts = parts;
  }

  _createClass(GroupOfPartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);
        }

        return partParsed;
      });

      if (!everyPartParsed) {
        context.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      nodes = arrayUtil.discardFirstAndLast(nodes);

      var noWhitespace = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(noWhitespace);

        return part;
      }),
          groupOfPartsPart = new GroupOfPartsPart(parts);

      return groupOfPartsPart;
    }
  }]);

  return GroupOfPartsPart;
}();

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJldmVyeVBhcnRQYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsImRpc2NhcmRGaXJzdEFuZExhc3QiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwiZ3JvdXBPZlBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCOztJQUVNQyxnQjtBQUNKLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFksRUFBYztBQUMzQkEscUJBQWUsS0FBZixDQUQyQixDQUNMOztBQUV0QixVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsYUFBYUgsUUFBUUcsVUFBUixFQUFuQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLTCxLQUFMLENBQVdNLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ2hELFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXUixPQUFYLEVBQW9CQyxZQUFwQixDQUF4QjtBQUFBLFlBQ01RLGFBQWNGLG9CQUFvQixJQUR4Qzs7QUFHQSxZQUFJRSxVQUFKLEVBQWdCO0FBQ2RQLGtCQUFRQSxNQUFNUSxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNEOztBQUVELGVBQU9FLFVBQVA7QUFDRCxPQVRpQixDQUR4Qjs7QUFZQSxVQUFJLENBQUNMLGVBQUwsRUFBc0I7QUFDcEJKLGdCQUFRVyxTQUFSLENBQWtCUixVQUFsQjs7QUFFQUQsZ0JBQVEsSUFBUjtBQUNEOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVUsY0FBYyxLQUFLYixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQk4sSUFBdEIsRUFBNEI7QUFDMUQsWUFBTVEsYUFBYVIsS0FBS1MsUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJBLHdCQUFjRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLHdCQUFpQkEsV0FBakIsU0FBZ0NFLFVBQWhDO0FBQ0Q7O0FBRUQsZUFBT0YsV0FBUDtBQUNELE9BVmEsRUFVWCxJQVZXLENBQXBCO0FBQUEsVUFXTUksZ0JBQWNKLFdBQWQsT0FYTjs7QUFhQSxhQUFPSSxNQUFQO0FBQ0Q7Ozs4QkFFZ0JkLEssRUFBTztBQUN0QkEsY0FBUU4sVUFBVXFCLG1CQUFWLENBQThCZixLQUE5QixDQUFSOztBQUVBLFVBQU1ELGVBQWUsS0FBckI7QUFBQSxVQUNNRixRQUFRRyxNQUFNZ0IsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFNYixPQUFPYSxLQUFLQyxZQUFMLENBQWtCbkIsWUFBbEIsQ0FBYjs7QUFFQSxlQUFPSyxJQUFQO0FBQ0QsT0FKTyxDQURkO0FBQUEsVUFNTWUsbUJBQW1CLElBQUl2QixnQkFBSixDQUFxQkMsS0FBckIsQ0FOekI7O0FBUUEsYUFBT3NCLGdCQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCekIsZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG4gICAgXG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgR3JvdXBPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZ3JvdXBPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1BhcnQ7XG4iXX0=