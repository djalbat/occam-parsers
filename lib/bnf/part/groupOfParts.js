'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupOfPartsPart = function () {
  function GroupOfPartsPart(parts) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, GroupOfPartsPart);

    this.parts = parts;
    this.noWhitespace = noWhitespace;
  }

  _createClass(GroupOfPartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = this.noWhitespace; ///

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
      var string = this.parts.reduce(function (string, part) {
        var partString = part.toString();

        if (string === null) {
          string = partString;
        } else {
          string = string + ' ' + partString;
        }

        return string;
      }, null);

      return string;
    }
  }]);

  return GroupOfPartsPart;
}();

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiR3JvdXBPZlBhcnRzUGFydCIsInBhcnRzIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsIm5vZGVzIiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0Iiwic3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInRvU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxnQjtBQUNKLDRCQUFZQyxLQUFaLEVBQXlDO0FBQUEsUUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZDLFNBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0QsWSxFQUFjO0FBQzNCQSxxQkFBZSxLQUFLQSxZQUFwQixDQUQyQixDQUNPOztBQUVsQyxVQUFJRSxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsa0JBQWtCLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDdEQsWUFBTUMsa0JBQWtCRCxLQUFLRSxLQUFMLENBQVdOLE9BQVgsRUFBb0JELFlBQXBCLENBQXhCO0FBQUEsWUFDTVEsYUFBY0Ysb0JBQW9CLElBRHhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZE4sa0JBQVFBLE1BQU1PLE1BQU4sQ0FBYUgsZUFBYixDQUFSOztBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BVHVCLENBQXhCOztBQVdBLFVBQUksQ0FBQ0gsZUFBTCxFQUFzQjtBQUNwQkQsZ0JBQVEsSUFBUjtBQUNEOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVEsU0FBUyxLQUFLWCxLQUFMLENBQVdZLE1BQVgsQ0FBa0IsVUFBU0QsTUFBVCxFQUFpQkwsSUFBakIsRUFBdUI7QUFDdEQsWUFBTU8sYUFBYVAsS0FBS1EsUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxXQUFXLElBQWYsRUFBcUI7QUFDbkJBLG1CQUFTRSxVQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLG1CQUFZQSxNQUFaLFNBQXNCRSxVQUF0QjtBQUNEOztBQUVELGVBQU9GLE1BQVA7QUFDRCxPQVZjLEVBVVosSUFWWSxDQUFmOztBQVlBLGFBQU9BLE1BQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJqQixnQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMsIG5vV2hpdGVzcGFjZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgcGFydCkge1xuICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQudG9TdHJpbmcoKTtcblxuICAgICAgaWYgKHN0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICBzdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNQYXJ0O1xuIl19