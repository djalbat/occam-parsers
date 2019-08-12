'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var partTypes = require('../../partTypes'),
    arrayUtilities = require('../../../utilities/array'),
    NonTerminalPart = require('../../part/nonTerminal');

var allButFirstAndLast = arrayUtilities.allButFirstAndLast,
    GroupOfPartsPartType = partTypes.GroupOfPartsPartType;

var GroupOfPartsPart = function (_NonTerminalPart) {
  _inherits(GroupOfPartsPart, _NonTerminalPart);

  function GroupOfPartsPart(parts) {
    _classCallCheck(this, GroupOfPartsPart);

    var type = GroupOfPartsPartType; ///

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
          parsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace);

        if (partNodeOrNodes !== null) {
          nodes = nodes.concat(partNodeOrNodes);

          return true;
        }
      });

      if (!parsed) {
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
  }, {
    key: 'clone',
    value: function clone() {
      return _get(GroupOfPartsPart.prototype.__proto__ || Object.getPrototypeOf(GroupOfPartsPart.prototype), 'clone', this).call(this, GroupOfPartsPart, this.parts);
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = allButFirstAndLast(nodes);

      nodes = allButFirstAndLastNodes; ///

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

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsicGFydFR5cGVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiTm9uVGVybWluYWxQYXJ0IiwiYWxsQnV0Rmlyc3RBbmRMYXN0IiwiR3JvdXBPZlBhcnRzUGFydFR5cGUiLCJHcm91cE9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsImNvbmNhdCIsImJhY2t0cmFjayIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwiZ3JvdXBPZlBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRnhCOztBQUlNLElBQUVHLGtCQUFGLEdBQXlCRixjQUF6QixDQUFFRSxrQkFBRjtBQUFBLElBQ0VDLG9CQURGLEdBQzJCTCxTQUQzQixDQUNFSyxvQkFERjs7SUFHQUMsZ0I7OztBQUNKLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFFBQU1DLE9BQU9ILG9CQUFiLENBRGlCLENBQ2tCOztBQURsQixvSUFHWEcsSUFIVzs7QUFLakIsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBTGlCO0FBTWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0UsYSxFQUFlQyxZLEVBQWM7QUFDakNBLHFCQUFlLEtBQWYsQ0FEaUMsQ0FDWDs7QUFFdEIsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQU1DLGFBQWFILGNBQWNJLGFBQWQsRUFBbkI7QUFBQSxVQUNNQyxTQUFTLEtBQUtQLEtBQUwsQ0FBV1EsS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDdkMsWUFBTUMsa0JBQWtCRCxLQUFLRSxLQUFMLENBQVdULGFBQVgsRUFBMEJDLFlBQTFCLENBQXhCOztBQUVBLFlBQUlPLG9CQUFvQixJQUF4QixFQUE4QjtBQUM1Qk4sa0JBQVFBLE1BQU1RLE1BQU4sQ0FBYUYsZUFBYixDQUFSOztBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUlEsQ0FEZjs7QUFXQSxVQUFJLENBQUNILE1BQUwsRUFBYTtBQUNYTCxzQkFBY1csU0FBZCxDQUF3QlIsVUFBeEI7O0FBRUFELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLGNBQWMsS0FBS2QsS0FBTCxDQUFXZSxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JMLElBQXRCLEVBQTRCO0FBQzFELFlBQU1PLGFBQWFQLEtBQUtRLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFNBQWdDRSxVQUFoQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLGdCQUFjSixXQUFkLE9BWE47O0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx1SUFBbUJuQixnQkFBbkIsRUFBcUMsS0FBS0MsS0FBMUM7QUFBbUQ7Ozs4QkFFNUNJLEssRUFBTztBQUN0QixVQUFNZSwwQkFBMEJ0QixtQkFBbUJPLEtBQW5CLENBQWhDOztBQUVBQSxjQUFRZSx1QkFBUixDQUhzQixDQUdZOztBQUVsQyxVQUFNaEIsZUFBZSxLQUFyQjtBQUFBLFVBQ01ILFFBQVFJLE1BQU1nQixHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQy9CLFlBQU1aLE9BQU9ZLEtBQUtDLFlBQUwsQ0FBa0JuQixZQUFsQixDQUFiOztBQUVBLGVBQU9NLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NYyxtQkFBbUIsSUFBSXhCLGdCQUFKLENBQXFCQyxLQUFyQixDQU56Qjs7QUFRQSxhQUFPdUIsZ0JBQVA7QUFDRDs7OztFQXZFNEIzQixlOztBQTBFL0I0QixPQUFPQyxPQUFQLEdBQWlCMUIsZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFydFR5cGVzID0gcmVxdWlyZSgnLi4vLi4vcGFydFR5cGVzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IEdyb3VwT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBHcm91cE9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuICAgIFxuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKEdyb3VwT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGdyb3VwT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNQYXJ0O1xuIl19