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

      var nonWhitespace = false,
          lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(nonWhitespace, lookAhead);

        return part;
      }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(NonTerminalPart);

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbInBhcnRUeXBlcyIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsImV2ZW4iLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJDaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwiZXZlbk5vZGVzIiwibm9uV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRnhCOztBQUlNLElBQUVHLHFCQUFGLEdBQTRCSixTQUE1QixDQUFFSSxxQkFBRjtBQUFBLElBQ0VDLElBREYsR0FDK0JILGNBRC9CLENBQ0VHLElBREY7QUFBQSxJQUNRQyxrQkFEUixHQUMrQkosY0FEL0IsQ0FDUUksa0JBRFI7O0lBR0FDLGlCOzs7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixRQUFNQyxPQUFPTCxxQkFBYixDQURpQixDQUNtQjs7QUFEbkIsc0lBR1hLLElBSFc7O0FBS2pCLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxRQUFRLElBQVo7O0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QixZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV0wsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJILGtCQUFRRyxlQUFSLENBRDRCLENBQ0Y7O0FBRTFCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxjQUFjLEtBQUtSLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNSyxhQUFhTCxLQUFLTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUlBQW1CYixpQkFBbkIsRUFBc0MsS0FBS0MsS0FBM0M7QUFBb0Q7Ozs4QkFFN0NHLEssRUFBTztBQUN0QixVQUFNVSwwQkFBMEJmLG1CQUFtQkssS0FBbkIsQ0FBaEM7O0FBRUFBLGNBQVFVLHVCQUFSLENBSHNCLENBR1k7O0FBRWxDLFVBQU1DLFlBQVlqQixLQUFLTSxLQUFMLENBQWxCOztBQUVBQSxjQUFRVyxTQUFSLENBUHNCLENBT0Y7O0FBRXBCLFVBQU1DLGdCQUFnQixLQUF0QjtBQUFBLFVBQ01DLFlBQVksS0FEbEI7QUFBQSxVQUVNaEIsUUFBUUcsTUFBTWMsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFNYixPQUFPYSxLQUFLQyxZQUFMLENBQWtCSixhQUFsQixFQUFpQ0MsU0FBakMsQ0FBYjs7QUFFQSxlQUFPWCxJQUFQO0FBQ0QsT0FKTyxDQUZkO0FBQUEsVUFPTWUsb0JBQW9CLElBQUlyQixpQkFBSixDQUFzQkMsS0FBdEIsQ0FQMUI7O0FBU0EsYUFBT29CLGlCQUFQO0FBQ0Q7Ozs7RUFuRTZCekIsZTs7QUFzRWhDMEIsT0FBT0MsT0FBUCxHQUFpQnZCLGlCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IGV2ZW4sIGFsbEJ1dEZpcnN0QW5kTGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENob2ljZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuICAgIFxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gfCAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShDaG9pY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuICAgIFxuICAgIGNvbnN0IGV2ZW5Ob2RlcyA9IGV2ZW4obm9kZXMpO1xuXG4gICAgbm9kZXMgPSBldmVuTm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IG5vbldoaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9uV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1BhcnQ7XG4iXX0=