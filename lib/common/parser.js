'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'parse',
    value: function parse(tokens) {
      var node = null,
          productionsLength = this.productions.length;

      if (productionsLength > 0) {
        var firstProduction = first(this.productions),
            context = new Context(tokens),
            production = firstProduction,
            ///
        noWhitespace = false,
            nodes = production.parse(context, this.productions, noWhitespace),
            firstNode = first(nodes);

        node = firstNode; ///
      }

      return node;
    }
  }, {
    key: 'parseGivenProductionName',
    value: function parseGivenProductionName(tokens, productionName) {
      var node = null,
          context = new Context(tokens),
          production = this.findProduction(productionName),
          noWhitespace = false,
          nodes = production.parse(context, this.productions, noWhitespace);

      if (nodes !== null) {
        var nextSignificantToken = context.getNextSignificantToken();

        if (nextSignificantToken === null) {
          var firstNode = first(nodes);

          node = firstNode; ///
        }
      }

      return node;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName) {
      var name = productionName,
          ///
      index = this.indexOfProductionByName(name),
          production = index !== null ? this.productions[index] : null;

      return production;
    }
  }, {
    key: 'indexOfProductionByName',
    value: function indexOfProductionByName(name) {
      var index,
          foundIndex = null;

      this.productions.some(function (production, index) {
        var productionName = production.getName();

        if (productionName === name) {
          foundIndex = index;

          return true;
        } else {
          return false;
        }
      });

      index = foundIndex; ///

      return index;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJub2RlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJwcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwYXJzZSIsImZpcnN0Tm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZmluZFByb2R1Y3Rpb24iLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmFtZSIsImluZGV4IiwiaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUiLCJmb3VuZEluZGV4Iiwic29tZSIsImdldE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLFdBQVIsQ0FBZDs7SUFFTUMsWTtBQUNKLHdCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7MEJBRUtDLE0sRUFBUTtBQUNaLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lDLG9CQUFvQixLQUFLSCxXQUFMLENBQWlCSSxNQUR6Qzs7QUFHQSxVQUFJRCxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBSUUsa0JBQWtCQyxNQUFNLEtBQUtOLFdBQVgsQ0FBdEI7QUFBQSxZQUNJTyxVQUFVLElBQUlWLE9BQUosQ0FBWUksTUFBWixDQURkO0FBQUEsWUFFSU8sYUFBYUgsZUFGakI7QUFBQSxZQUVrQztBQUM5QkksdUJBQWUsS0FIbkI7QUFBQSxZQUlJQyxRQUFRRixXQUFXRyxLQUFYLENBQWlCSixPQUFqQixFQUEwQixLQUFLUCxXQUEvQixFQUE0Q1MsWUFBNUMsQ0FKWjtBQUFBLFlBS0lHLFlBQVlOLE1BQU1JLEtBQU4sQ0FMaEI7O0FBT0FSLGVBQU9VLFNBQVAsQ0FSeUIsQ0FRUDtBQUNuQjs7QUFFRCxhQUFPVixJQUFQO0FBQ0Q7Ozs2Q0FFd0JELE0sRUFBUVksYyxFQUFnQjtBQUMvQyxVQUFJWCxPQUFPLElBQVg7QUFBQSxVQUNJSyxVQUFVLElBQUlWLE9BQUosQ0FBWUksTUFBWixDQURkO0FBQUEsVUFFSU8sYUFBYSxLQUFLTSxjQUFMLENBQW9CRCxjQUFwQixDQUZqQjtBQUFBLFVBR0lKLGVBQWUsS0FIbkI7QUFBQSxVQUlJQyxRQUFRRixXQUFXRyxLQUFYLENBQWlCSixPQUFqQixFQUEwQixLQUFLUCxXQUEvQixFQUE0Q1MsWUFBNUMsQ0FKWjs7QUFNQSxVQUFJQyxVQUFVLElBQWQsRUFBb0I7QUFDbEIsWUFBSUssdUJBQXVCUixRQUFRUyx1QkFBUixFQUEzQjs7QUFFQSxZQUFJRCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsY0FBSUgsWUFBWU4sTUFBTUksS0FBTixDQUFoQjs7QUFFQVIsaUJBQU9VLFNBQVAsQ0FIaUMsQ0FHZjtBQUNuQjtBQUNGOztBQUVELGFBQU9WLElBQVA7QUFDRDs7O21DQUVjVyxjLEVBQWdCO0FBQzdCLFVBQUlJLE9BQU9KLGNBQVg7QUFBQSxVQUE0QjtBQUN4QkssY0FBUSxLQUFLQyx1QkFBTCxDQUE2QkYsSUFBN0IsQ0FEWjtBQUFBLFVBRUlULGFBQWNVLFVBQVUsSUFBWCxHQUNFLEtBQUtsQixXQUFMLENBQWlCa0IsS0FBakIsQ0FERixHQUVJLElBSnJCOztBQU1BLGFBQU9WLFVBQVA7QUFDRDs7OzRDQUV1QlMsSSxFQUFNO0FBQzVCLFVBQUlDLEtBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUtwQixXQUFMLENBQWlCcUIsSUFBakIsQ0FBc0IsVUFBU2IsVUFBVCxFQUFxQlUsS0FBckIsRUFBNEI7QUFDaEQsWUFBSUwsaUJBQWlCTCxXQUFXYyxPQUFYLEVBQXJCOztBQUVBLFlBQUlULG1CQUFtQkksSUFBdkIsRUFBNkI7QUFDM0JHLHVCQUFhRixLQUFiOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBQSxjQUFRRSxVQUFSLENBaEI0QixDQWdCUjs7QUFFcEIsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnpCLFlBQWpCOztBQUVBLFNBQVNPLEtBQVQsQ0FBZW1CLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBwYXJzZSh0b2tlbnMpIHtcbiAgICB2YXIgbm9kZSA9IG51bGwsXG4gICAgICAgIHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyksXG4gICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucyksXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbiwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlR2l2ZW5Qcm9kdWN0aW9uTmFtZSh0b2tlbnMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIG5vZGUgPSBudWxsLFxuICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgcHJvZHVjdGlvbiA9IHRoaXMuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgbm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIHRoaXMucHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBpZiAobm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpLFxuICAgICAgICBwcm9kdWN0aW9uID0gKGluZGV4ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdGlvbnNbaW5kZXhdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgdmFyIGluZGV4LFxuICAgICAgICBmb3VuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRleCA9IGZvdW5kSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==