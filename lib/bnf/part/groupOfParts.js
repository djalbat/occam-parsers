'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupOfPartsPart = function () {
  function GroupOfPartsPart(parts, noWhitespace) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiR3JvdXBPZlBhcnRzUGFydCIsInBhcnRzIiwibm9XaGl0ZXNwYWNlIiwiY29udGV4dCIsIm5vZGVzIiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0Iiwic3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInRvU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxnQjtBQUNKLDRCQUFZQyxLQUFaLEVBQW1CQyxZQUFuQixFQUFpQztBQUFBOztBQUMvQixTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNELFksRUFBYztBQUMzQkEscUJBQWUsS0FBS0EsWUFBcEIsQ0FEMkIsQ0FDTzs7QUFFbEMsVUFBSUUsUUFBUSxFQUFaOztBQUVBLFVBQU1DLGtCQUFrQixLQUFLSixLQUFMLENBQVdLLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3RELFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTixPQUFYLEVBQW9CRCxZQUFwQixDQUF4QjtBQUFBLFlBQ01RLGFBQWNGLG9CQUFvQixJQUR4Qzs7QUFHQSxZQUFJRSxVQUFKLEVBQWdCO0FBQ2ROLGtCQUFRQSxNQUFNTyxNQUFOLENBQWFILGVBQWIsQ0FBUjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVR1QixDQUF4Qjs7QUFXQSxVQUFJLENBQUNILGVBQUwsRUFBc0I7QUFDcEJELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1RLFNBQVMsS0FBS1gsS0FBTCxDQUFXWSxNQUFYLENBQWtCLFVBQVNELE1BQVQsRUFBaUJMLElBQWpCLEVBQXVCO0FBQ3RELFlBQU1PLGFBQWFQLEtBQUtRLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsV0FBVyxJQUFmLEVBQXFCO0FBQ25CQSxtQkFBU0UsVUFBVDtBQUNELFNBRkQsTUFFTztBQUNMRixtQkFBWUEsTUFBWixTQUFzQkUsVUFBdEI7QUFDRDs7QUFFRCxlQUFPRixNQUFQO0FBQ0QsT0FWYyxFQVVaLElBVlksQ0FBZjs7QUFZQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCakIsZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuXG4gICAgICBpZiAoc3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgIHN0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1BhcnQ7XG4iXX0=