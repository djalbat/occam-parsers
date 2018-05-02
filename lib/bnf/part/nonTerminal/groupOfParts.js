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
        var partNodeOrNodes = part.parse(configuration, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);
        }

        return partParsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZGlzY2FyZExhc3RUaGVuRmlyc3QiLCJ0eXBlIiwiR3JvdXBPZlBhcnRzUGFydCIsInBhcnRzIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJldmVyeVBhcnRQYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsd0JBQVIsQ0FBeEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7O0lBR1FFLG9CLEdBQXlCRCxjLENBQXpCQyxvQjs7O0FBRVIsSUFBTUMsT0FBTyxjQUFiOztJQUVNQyxnQjs7O0FBQ0osNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDWEYsSUFEVzs7QUFHakIsVUFBS0UsS0FBTCxHQUFhQSxLQUFiO0FBSGlCO0FBSWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0MsYSxFQUFlQyxZLEVBQWM7QUFDakNBLHFCQUFlLEtBQWYsQ0FEaUMsQ0FDWDs7QUFFdEIsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQU1DLGFBQWFILGNBQWNJLGFBQWQsRUFBbkI7QUFBQSxVQUNNQyxrQkFBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUNoRCxZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV1QsYUFBWCxFQUEwQkMsWUFBMUIsQ0FBeEI7QUFBQSxZQUNNUyxhQUFjRixvQkFBb0IsSUFEeEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkUixrQkFBUUEsTUFBTVMsTUFBTixDQUFhSCxlQUFiLENBQVI7QUFDRDs7QUFFRCxlQUFPRSxVQUFQO0FBQ0QsT0FUaUIsQ0FEeEI7O0FBWUEsVUFBSSxDQUFDTCxlQUFMLEVBQXNCO0FBQ3BCTCxzQkFBY1ksU0FBZCxDQUF3QlQsVUFBeEI7O0FBRUFELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLGNBQWMsS0FBS2QsS0FBTCxDQUFXZSxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JOLElBQXRCLEVBQTRCO0FBQzFELFlBQU1RLGFBQWFSLEtBQUtTLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFNBQWdDRSxVQUFoQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLGdCQUFjSixXQUFkLE9BWE47O0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7OEJBRWdCZixLLEVBQU87QUFDdEJBLGNBQVFOLHFCQUFxQk0sS0FBckIsQ0FBUjs7QUFFQSxVQUFNRCxlQUFlLEtBQXJCO0FBQUEsVUFDTUYsUUFBUUcsTUFBTWdCLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDL0IsWUFBTVosT0FBT1ksS0FBS0MsWUFBTCxDQUFrQm5CLFlBQWxCLENBQWI7O0FBRUEsZUFBT00sSUFBUDtBQUNELE9BSk8sQ0FEZDtBQUFBLFVBTU1jLG1CQUFtQixJQUFJdkIsZ0JBQUosQ0FBcUJDLEtBQXJCLENBTnpCOztBQVFBLGFBQU9zQixnQkFBUDtBQUNEOzs7O0VBbEU0QjVCLGU7O0FBcUUvQjZCLE9BQU9DLE1BQVAsQ0FBY3pCLGdCQUFkLEVBQWdDO0FBQzlCRCxRQUFNQTtBQUR3QixDQUFoQzs7QUFJQTJCLE9BQU9DLE9BQVAsR0FBaUIzQixnQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGRpc2NhcmRMYXN0VGhlbkZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgdHlwZSA9ICdHcm91cE9mUGFydHMnO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuICAgIFxuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbmZpZ3VyYXRpb24uZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBub2RlcyA9IGRpc2NhcmRMYXN0VGhlbkZpcnN0KG5vZGVzKTtcblxuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGdyb3VwT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihHcm91cE9mUGFydHNQYXJ0LCB7XG4gIHR5cGU6IHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1BhcnQ7XG4iXX0=