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
            nodes = production.parse(context, this.productions, noWhitespace);

        if (nodes !== null) {
          var nodesLength = nodes.length;

          if (nodesLength > 0) {
            var firstNode = first(nodes);

            node = firstNode; ///
          }
        }
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
        var firstNode = first(nodes);

        node = firstNode; ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJub2RlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJwcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwYXJzZSIsIm5vZGVzTGVuZ3RoIiwiZmlyc3ROb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmaW5kUHJvZHVjdGlvbiIsIm5hbWUiLCJpbmRleCIsImluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lIiwiZm91bmRJbmRleCIsInNvbWUiLCJnZXROYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxXQUFSLENBQWQ7O0lBRU1DLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxNLEVBQVE7QUFDWixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxvQkFBb0IsS0FBS0gsV0FBTCxDQUFpQkksTUFEekM7O0FBR0EsVUFBSUQsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQUlFLGtCQUFrQkMsTUFBTSxLQUFLTixXQUFYLENBQXRCO0FBQUEsWUFDSU8sVUFBVSxJQUFJVixPQUFKLENBQVlJLE1BQVosQ0FEZDtBQUFBLFlBRUlPLGFBQWFILGVBRmpCO0FBQUEsWUFFa0M7QUFDOUJJLHVCQUFlLEtBSG5CO0FBQUEsWUFJSUMsUUFBUUYsV0FBV0csS0FBWCxDQUFpQkosT0FBakIsRUFBMEIsS0FBS1AsV0FBL0IsRUFBNENTLFlBQTVDLENBSlo7O0FBTUEsWUFBSUMsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLGNBQUlFLGNBQWNGLE1BQU1OLE1BQXhCOztBQUVBLGNBQUlRLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsZ0JBQUlDLFlBQVlQLE1BQU1JLEtBQU4sQ0FBaEI7O0FBRUFSLG1CQUFPVyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjtBQUNGOztBQUVELGFBQU9YLElBQVA7QUFDRDs7OzZDQUV3QkQsTSxFQUFRYSxjLEVBQWdCO0FBQy9DLFVBQUlaLE9BQU8sSUFBWDtBQUFBLFVBQ0lLLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxVQUVJTyxhQUFhLEtBQUtPLGNBQUwsQ0FBb0JELGNBQXBCLENBRmpCO0FBQUEsVUFHSUwsZUFBZSxLQUhuQjtBQUFBLFVBSUlDLFFBQVFGLFdBQVdHLEtBQVgsQ0FBaUJKLE9BQWpCLEVBQTBCLEtBQUtQLFdBQS9CLEVBQTRDUyxZQUE1QyxDQUpaOztBQU1BLFVBQUlDLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJRyxZQUFZUCxNQUFNSSxLQUFOLENBQWhCOztBQUVBUixlQUFPVyxTQUFQLENBSGtCLENBR0E7QUFDbkI7O0FBRUQsYUFBT1gsSUFBUDtBQUNEOzs7bUNBRWNZLGMsRUFBZ0I7QUFDN0IsVUFBSUUsT0FBT0YsY0FBWDtBQUFBLFVBQTRCO0FBQ3hCRyxjQUFRLEtBQUtDLHVCQUFMLENBQTZCRixJQUE3QixDQURaO0FBQUEsVUFFSVIsYUFBY1MsVUFBVSxJQUFYLEdBQ0UsS0FBS2pCLFdBQUwsQ0FBaUJpQixLQUFqQixDQURGLEdBRUksSUFKckI7O0FBTUEsYUFBT1QsVUFBUDtBQUNEOzs7NENBRXVCUSxJLEVBQU07QUFDNUIsVUFBSUMsS0FBSjtBQUFBLFVBQ0lFLGFBQWEsSUFEakI7O0FBR0EsV0FBS25CLFdBQUwsQ0FBaUJvQixJQUFqQixDQUFzQixVQUFTWixVQUFULEVBQXFCUyxLQUFyQixFQUE0QjtBQUNoRCxZQUFJSCxpQkFBaUJOLFdBQVdhLE9BQVgsRUFBckI7O0FBRUEsWUFBSVAsbUJBQW1CRSxJQUF2QixFQUE2QjtBQUMzQkcsdUJBQWFGLEtBQWI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUFBLGNBQVFFLFVBQVIsQ0FoQjRCLENBZ0JSOztBQUVwQixhQUFPRixLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCeEIsWUFBakI7O0FBRUEsU0FBU08sS0FBVCxDQUFla0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBub2RlID0gbnVsbCxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gZmlyc3RQcm9kdWN0aW9uLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAobm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZUdpdmVuUHJvZHVjdGlvbk5hbWUodG9rZW5zLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBub2RlID0gbnVsbCxcbiAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRva2VucyksXG4gICAgICAgIHByb2R1Y3Rpb24gPSB0aGlzLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIG5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCB0aGlzLnByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSksXG4gICAgICAgIHByb2R1Y3Rpb24gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0aW9uc1tpbmRleF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIGluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpIHtcbiAgICB2YXIgaW5kZXgsXG4gICAgICAgIGZvdW5kSW5kZXggPSBudWxsO1xuXG4gICAgdGhpcy5wcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25OYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGluZGV4ID0gZm91bmRJbmRleDsgLy8vXG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19