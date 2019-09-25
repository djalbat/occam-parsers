'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var partTypes = require('../../partTypes'),
    arrayUtilities = require('../../../utilities/array'),
    NonTerminalPart = require('../../part/nonTerminal');

var ChoiceOfPartsPartType = partTypes.ChoiceOfPartsPartType,
    even = arrayUtilities.even,
    allButFirstAndLast = arrayUtilities.allButFirstAndLast;

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    var type = ChoiceOfPartsPartType; ///

    var _this = _possibleConstructorReturn(this, (ChoiceOfPartsPart.__proto__ || Object.getPrototypeOf(ChoiceOfPartsPart)).call(this, type));

    _this.parts = parts;
    return _this;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration) {
      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(configuration);

        if (partNodeOrNodes !== null) {
          nodes = partNodeOrNodes; ///

          return true;
        }
      });

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
          partsString = partsString + ' | ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(ChoiceOfPartsPart.prototype.__proto__ || Object.getPrototypeOf(ChoiceOfPartsPart.prototype), 'clone', this).call(this, ChoiceOfPartsPart, this.parts);
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = allButFirstAndLast(nodes);

      nodes = allButFirstAndLastNodes; ///

      var evenNodes = even(nodes);

      nodes = evenNodes; ///

      var noWhitespace = false,
          lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(noWhitespace, lookAhead);

        return part;
      }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(NonTerminalPart);

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbInBhcnRUeXBlcyIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsImV2ZW4iLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJDaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwiZXZlbk5vZGVzIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsd0JBQVIsQ0FGeEI7O0FBSU0sSUFBRUcscUJBQUYsR0FBNEJKLFNBQTVCLENBQUVJLHFCQUFGO0FBQUEsSUFDRUMsSUFERixHQUMrQkgsY0FEL0IsQ0FDRUcsSUFERjtBQUFBLElBQ1FDLGtCQURSLEdBQytCSixjQUQvQixDQUNRSSxrQkFEUjs7SUFHQUMsaUI7OztBQUNKLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFFBQU1DLE9BQU9MLHFCQUFiLENBRGlCLENBQ21COztBQURuQixzSUFHWEssSUFIVzs7QUFLakIsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBTGlCO0FBTWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0UsYSxFQUFlO0FBQ25CLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCLFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTCxhQUFYLENBQXhCOztBQUVBLFlBQUlJLG9CQUFvQixJQUF4QixFQUE4QjtBQUM1Qkgsa0JBQVFHLGVBQVIsQ0FENEIsQ0FDRjs7QUFFMUIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FSRDs7QUFVQSxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1LLGNBQWMsS0FBS1IsS0FBTCxDQUFXUyxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JILElBQXRCLEVBQTRCO0FBQzFELFlBQU1LLGFBQWFMLEtBQUtNLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCQSx3QkFBY0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRix3QkFBaUJBLFdBQWpCLFdBQWtDRSxVQUFsQztBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLGdCQUFjSixXQUFkLE9BWE47O0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx5SUFBbUJiLGlCQUFuQixFQUFzQyxLQUFLQyxLQUEzQztBQUFvRDs7OzhCQUU3Q0csSyxFQUFPO0FBQ3RCLFVBQU1VLDBCQUEwQmYsbUJBQW1CSyxLQUFuQixDQUFoQzs7QUFFQUEsY0FBUVUsdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsWUFBWWpCLEtBQUtNLEtBQUwsQ0FBbEI7O0FBRUFBLGNBQVFXLFNBQVIsQ0FQc0IsQ0FPRjs7QUFFcEIsVUFBTUMsZUFBZSxLQUFyQjtBQUFBLFVBQ01DLFlBQVksS0FEbEI7QUFBQSxVQUVNaEIsUUFBUUcsTUFBTWMsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFNYixPQUFPYSxLQUFLQyxZQUFMLENBQWtCSixZQUFsQixFQUFnQ0MsU0FBaEMsQ0FBYjs7QUFFQSxlQUFPWCxJQUFQO0FBQ0QsT0FKTyxDQUZkO0FBQUEsVUFPTWUsb0JBQW9CLElBQUlyQixpQkFBSixDQUFzQkMsS0FBdEIsQ0FQMUI7O0FBU0EsYUFBT29CLGlCQUFQO0FBQ0Q7Ozs7RUFuRTZCekIsZTs7QUFzRWhDMEIsT0FBT0MsT0FBUCxHQUFpQnZCLGlCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IGV2ZW4sIGFsbEJ1dEZpcnN0QW5kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuICAgIFxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gfCAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShDaG9pY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuICAgIFxuICAgIGNvbnN0IGV2ZW5Ob2RlcyA9IGV2ZW4obm9kZXMpO1xuXG4gICAgbm9kZXMgPSBldmVuTm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UsIGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNQYXJ0O1xuIl19