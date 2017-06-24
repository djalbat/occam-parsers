'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    arrayUtil = require('../util/array'),
    parserUtil = require('../util/parser');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'getProductions',
    value: function getProductions() {
      return this.productions;
    }
  }, {
    key: 'nodeFromLines',
    value: function nodeFromLines(lines, production) {
      var tokens = parserUtil.tokensFromLines(lines),
          node = this.parse(tokens, production);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var node = null;

      if (production === null) {
        var productionsLength = this.productions.length;

        if (productionsLength > 0) {
          var firstProduction = arrayUtil.first(this.productions);

          production = firstProduction; ///
        }
      }

      if (production !== null) {
        var context = new Context(tokens, this.productions),
            noWhitespace = false,
            ///
        nodeOrNodes = production.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? arrayUtil.first(nodeOrNodes) : nodeOrNodes;
        }
      }

      return node;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var maximumProductionNameLength = this.productions.reduce(function (maximumProductionNameLength, production) {
        var productionName = production.getName(),
            productionNameLength = productionName.length;

        maximumProductionNameLength = Math.max(maximumProductionNameLength, productionNameLength);

        return maximumProductionNameLength;
      }, 0),
          string = this.productions.reduce(function (string, production) {
        var productionString = production.toString(maximumProductionNameLength);

        string += productionString;

        return string;
      }, '');

      return string;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName) {
      var productions = this.getProductions();

      return parserUtil.findProduction(productionName, productions);
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwicGFyc2VyVXRpbCIsIkNvbW1vblBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJwcm9kdWN0aW9uIiwidG9rZW5zIiwidG9rZW5zRnJvbUxpbmVzIiwibm9kZSIsInBhcnNlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicmVkdWNlIiwicHJvZHVjdGlvbk5hbWUiLCJnZXROYW1lIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJNYXRoIiwibWF4Iiwic3RyaW5nIiwicHJvZHVjdGlvblN0cmluZyIsInRvU3RyaW5nIiwiZ2V0UHJvZHVjdGlvbnMiLCJmaW5kUHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGVBQVIsQ0FEbEI7QUFBQSxJQUVNRSxhQUFhRixRQUFRLGdCQUFSLENBRm5COztJQUlNRyxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtBLFdBQVo7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLFUsRUFBWTtBQUMvQixVQUFNQyxTQUFTTCxXQUFXTSxlQUFYLENBQTJCSCxLQUEzQixDQUFmO0FBQUEsVUFDTUksT0FBTyxLQUFLQyxLQUFMLENBQVdILE1BQVgsRUFBbUJELFVBQW5CLENBRGI7O0FBR0EsYUFBT0csSUFBUDtBQUNEOzs7MEJBRUtGLE0sRUFBMkI7QUFBQSxVQUFuQkQsVUFBbUIsdUVBQU4sSUFBTTs7QUFDL0IsVUFBSUcsT0FBTyxJQUFYOztBQUVBLFVBQUlILGVBQWUsSUFBbkIsRUFBeUI7QUFDdkIsWUFBTUssb0JBQW9CLEtBQUtQLFdBQUwsQ0FBaUJRLE1BQTNDOztBQUVBLFlBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixjQUFNRSxrQkFBa0JaLFVBQVVhLEtBQVYsQ0FBZ0IsS0FBS1YsV0FBckIsQ0FBeEI7O0FBRUFFLHVCQUFhTyxlQUFiLENBSHlCLENBR0s7QUFDL0I7QUFDRjs7QUFFRCxVQUFJUCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQU1TLFVBQVUsSUFBSWhCLE9BQUosQ0FBWVEsTUFBWixFQUFvQixLQUFLSCxXQUF6QixDQUFoQjtBQUFBLFlBQ01ZLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNYLFdBQVdJLEtBQVgsQ0FBaUJLLE9BQWpCLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJSLGlCQUFRUSx1QkFBdUJDLEtBQXhCLEdBQ0VqQixVQUFVYSxLQUFWLENBQWdCRyxXQUFoQixDQURGLEdBRUlBLFdBRlg7QUFHRDtBQUNGOztBQUVELGFBQU9SLElBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVUsOEJBQThCLEtBQUtmLFdBQUwsQ0FBaUJnQixNQUFqQixDQUF3QixVQUFTRCwyQkFBVCxFQUFzQ2IsVUFBdEMsRUFBa0Q7QUFDdEcsWUFBTWUsaUJBQWlCZixXQUFXZ0IsT0FBWCxFQUF2QjtBQUFBLFlBQ01DLHVCQUF1QkYsZUFBZVQsTUFENUM7O0FBR0FPLHNDQUE4QkssS0FBS0MsR0FBTCxDQUFTTiwyQkFBVCxFQUFzQ0ksb0JBQXRDLENBQTlCOztBQUVBLGVBQU9KLDJCQUFQO0FBQ0QsT0FQNkIsRUFPM0IsQ0FQMkIsQ0FBcEM7QUFBQSxVQVFNTyxTQUFTLEtBQUt0QixXQUFMLENBQWlCZ0IsTUFBakIsQ0FBd0IsVUFBU00sTUFBVCxFQUFpQnBCLFVBQWpCLEVBQTZCO0FBQzVELFlBQU1xQixtQkFBbUJyQixXQUFXc0IsUUFBWCxDQUFvQlQsMkJBQXBCLENBQXpCOztBQUVBTyxrQkFBVUMsZ0JBQVY7O0FBRUEsZUFBT0QsTUFBUDtBQUNELE9BTlEsRUFNTixFQU5NLENBUmY7O0FBZ0JBLGFBQU9BLE1BQVA7QUFDRDs7O21DQUVjTCxjLEVBQWdCO0FBQzdCLFVBQU1qQixjQUFjLEtBQUt5QixjQUFMLEVBQXBCOztBQUVBLGFBQU8zQixXQUFXNEIsY0FBWCxDQUEwQlQsY0FBMUIsRUFBMENqQixXQUExQyxDQUFQO0FBQ0Q7Ozs7OztBQUdIMkIsT0FBT0MsT0FBUCxHQUFpQjdCLFlBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VyJyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIG5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCB0b2tlbnMgPSBwYXJzZXJVdGlsLnRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcHJvZHVjdGlvbiA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocHJvZHVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb24gPSBhcnJheVV0aWwuZmlyc3QodGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgYXJyYXlVdGlsLmZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCwgcHJvZHVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gcHJvZHVjdGlvbk5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCwgcHJvZHVjdGlvbk5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5wcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBwcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uU3RyaW5nID0gcHJvZHVjdGlvbi50b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHN0cmluZyArPSBwcm9kdWN0aW9uU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgfSwgJycpO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gdGhpcy5nZXRQcm9kdWN0aW9ucygpO1xuXG4gICAgcmV0dXJuIHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcbiJdfQ==