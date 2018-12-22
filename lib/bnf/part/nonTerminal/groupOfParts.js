'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalPart = require('../../part/nonTerminal'),
    arrayUtilities = require('../../../utilities/array');

var discardLastThenFirst = arrayUtilities.discardLastThenFirst;


var type = 'GroupOfParts';

var GroupOfPartsPart = function (_NonTerminalPart) {
  _inherits(GroupOfPartsPart, _NonTerminalPart);

  function GroupOfPartsPart(parts) {
    _classCallCheck(this, GroupOfPartsPart);

    var _this = _possibleConstructorReturn(this, (GroupOfPartsPart.__proto__ || Object.getPrototypeOf(GroupOfPartsPart)).call(this, type));

    _this.parts = parts;
    return _this;
  }

  _createClass(GroupOfPartsPart, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var savedIndex = configuration.getSavedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace);

        if (partNodeOrNodes !== null) {
          nodes = nodes.concat(partNodeOrNodes);

          return true;
        }
      });

      if (!everyPartParsed) {
        configuration.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

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
      nodes = discardLastThenFirst(nodes);

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
}(NonTerminalPart);

Object.assign(GroupOfPartsPart, {
  type: type
});

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGlzY2FyZExhc3RUaGVuRmlyc3QiLCJ0eXBlIiwiR3JvdXBPZlBhcnRzUGFydCIsInBhcnRzIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJldmVyeVBhcnRQYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsImNvbmNhdCIsImJhY2t0cmFjayIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsImdyb3VwT2ZQYXJ0c1BhcnQiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSx3QkFBUixDQUF4QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2Qjs7SUFHUUUsb0IsR0FBeUJELGMsQ0FBekJDLG9COzs7QUFFUixJQUFNQyxPQUFPLGNBQWI7O0lBRU1DLGdCOzs7QUFDSiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYRixJQURXOztBQUdqQixVQUFLRSxLQUFMLEdBQWFBLEtBQWI7QUFIaUI7QUFJbEI7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzBCQUVLQyxhLEVBQWVDLFksRUFBYztBQUNqQ0EscUJBQWUsS0FBZixDQURpQyxDQUNYOztBQUV0QixVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsYUFBYUgsY0FBY0ksYUFBZCxFQUFuQjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLTixLQUFMLENBQVdPLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ2hELFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXVCxhQUFYLEVBQTBCQyxZQUExQixDQUF4Qjs7QUFFQSxZQUFJTyxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJOLGtCQUFRQSxNQUFNUSxNQUFOLENBQWFGLGVBQWIsQ0FBUjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVJpQixDQUR4Qjs7QUFXQSxVQUFJLENBQUNILGVBQUwsRUFBc0I7QUFDcEJMLHNCQUFjVyxTQUFkLENBQXdCUixVQUF4Qjs7QUFFQUQsZ0JBQVEsSUFBUjtBQUNEOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVUsY0FBYyxLQUFLYixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBU0QsV0FBVCxFQUFzQkwsSUFBdEIsRUFBNEI7QUFDMUQsWUFBTU8sYUFBYVAsS0FBS1EsUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJBLHdCQUFjRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLHdCQUFpQkEsV0FBakIsU0FBZ0NFLFVBQWhDO0FBQ0Q7O0FBRUQsZUFBT0YsV0FBUDtBQUNELE9BVmEsRUFVWCxJQVZXLENBQXBCO0FBQUEsVUFXTUksZ0JBQWNKLFdBQWQsT0FYTjs7QUFhQSxhQUFPSSxNQUFQO0FBQ0Q7Ozs4QkFFZ0JkLEssRUFBTztBQUN0QkEsY0FBUU4scUJBQXFCTSxLQUFyQixDQUFSOztBQUVBLFVBQU1ELGVBQWUsS0FBckI7QUFBQSxVQUNNRixRQUFRRyxNQUFNZSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQy9CLFlBQU1YLE9BQU9XLEtBQUtDLFlBQUwsQ0FBa0JsQixZQUFsQixDQUFiOztBQUVBLGVBQU9NLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NYSxtQkFBbUIsSUFBSXRCLGdCQUFKLENBQXFCQyxLQUFyQixDQU56Qjs7QUFRQSxhQUFPcUIsZ0JBQVA7QUFDRDs7OztFQWpFNEIzQixlOztBQW9FL0I0QixPQUFPQyxNQUFQLENBQWN4QixnQkFBZCxFQUFnQztBQUM5QkQ7QUFEOEIsQ0FBaEM7O0FBSUEwQixPQUFPQyxPQUFQLEdBQWlCMUIsZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBkaXNjYXJkTGFzdFRoZW5GaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGUgPSAnR3JvdXBPZlBhcnRzJztcblxuY2xhc3MgR3JvdXBPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIG5vZGVzID0gZGlzY2FyZExhc3RUaGVuRmlyc3Qobm9kZXMpO1xuXG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgR3JvdXBPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZ3JvdXBPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEdyb3VwT2ZQYXJ0c1BhcnQsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUGFydDtcbiJdfQ==