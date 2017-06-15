'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

      var everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);

          return true;
        }
      });

      if (!everyPartParsed) {
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
  }]);

  return GroupOfPartsPart;
}();

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiR3JvdXBPZlBhcnRzUGFydCIsInBhcnRzIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0IiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGdCO0FBQ0osNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsWSxFQUFjO0FBQzNCQSxxQkFBZSxLQUFmLENBRDJCLENBQ0w7O0FBRXRCLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFNQyxrQkFBa0IsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUN0RCxZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV1AsT0FBWCxFQUFvQkMsWUFBcEIsQ0FBeEI7QUFBQSxZQUNNTyxhQUFjRixvQkFBb0IsSUFEeEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkTixrQkFBUUEsTUFBTU8sTUFBTixDQUFhSCxlQUFiLENBQVI7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FUdUIsQ0FBeEI7O0FBV0EsVUFBSSxDQUFDSCxlQUFMLEVBQXNCO0FBQ3BCRCxnQkFBUSxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNUSxjQUFjLEtBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCTCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNTyxhQUFhUCxLQUFLUSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixTQUFnQ0UsVUFBaEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJsQixnQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUGFydDtcbiJdfQ==