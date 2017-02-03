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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJub2RlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJwcm9kdWN0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwYXJzZSIsImZpcnN0Tm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZmluZFByb2R1Y3Rpb24iLCJuYW1lIiwiaW5kZXgiLCJpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZSIsImZvdW5kSW5kZXgiLCJzb21lIiwiZ2V0TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsTSxFQUFRO0FBQ1osVUFBSUMsT0FBTyxJQUFYO0FBQUEsVUFDSUMsb0JBQW9CLEtBQUtILFdBQUwsQ0FBaUJJLE1BRHpDOztBQUdBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFJRSxrQkFBa0JDLE1BQU0sS0FBS04sV0FBWCxDQUF0QjtBQUFBLFlBQ0lPLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxZQUVJTyxhQUFhSCxlQUZqQjtBQUFBLFlBRWtDO0FBQzlCSSx1QkFBZSxLQUhuQjtBQUFBLFlBSUlDLFFBQVFGLFdBQVdHLEtBQVgsQ0FBaUJKLE9BQWpCLEVBQTBCLEtBQUtQLFdBQS9CLEVBQTRDUyxZQUE1QyxDQUpaO0FBQUEsWUFLSUcsWUFBWU4sTUFBTUksS0FBTixDQUxoQjs7QUFPQVIsZUFBT1UsU0FBUCxDQVJ5QixDQVFQO0FBQ25COztBQUVELGFBQU9WLElBQVA7QUFDRDs7OzZDQUV3QkQsTSxFQUFRWSxjLEVBQWdCO0FBQy9DLFVBQUlYLE9BQU8sSUFBWDtBQUFBLFVBQ0lLLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLENBRGQ7QUFBQSxVQUVJTyxhQUFhLEtBQUtNLGNBQUwsQ0FBb0JELGNBQXBCLENBRmpCO0FBQUEsVUFHSUosZUFBZSxLQUhuQjtBQUFBLFVBSUlDLFFBQVFGLFdBQVdHLEtBQVgsQ0FBaUJKLE9BQWpCLEVBQTBCLEtBQUtQLFdBQS9CLEVBQTRDUyxZQUE1QyxDQUpaOztBQU1BLFVBQUlDLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixZQUFJRSxZQUFZTixNQUFNSSxLQUFOLENBQWhCOztBQUVBUixlQUFPVSxTQUFQLENBSGtCLENBR0E7QUFDbkI7O0FBRUQsYUFBT1YsSUFBUDtBQUNEOzs7bUNBRWNXLGMsRUFBZ0I7QUFDN0IsVUFBSUUsT0FBT0YsY0FBWDtBQUFBLFVBQTRCO0FBQ3hCRyxjQUFRLEtBQUtDLHVCQUFMLENBQTZCRixJQUE3QixDQURaO0FBQUEsVUFFSVAsYUFBY1EsVUFBVSxJQUFYLEdBQ0UsS0FBS2hCLFdBQUwsQ0FBaUJnQixLQUFqQixDQURGLEdBRUksSUFKckI7O0FBTUEsYUFBT1IsVUFBUDtBQUNEOzs7NENBRXVCTyxJLEVBQU07QUFDNUIsVUFBSUMsS0FBSjtBQUFBLFVBQ0lFLGFBQWEsSUFEakI7O0FBR0EsV0FBS2xCLFdBQUwsQ0FBaUJtQixJQUFqQixDQUFzQixVQUFTWCxVQUFULEVBQXFCUSxLQUFyQixFQUE0QjtBQUNoRCxZQUFJSCxpQkFBaUJMLFdBQVdZLE9BQVgsRUFBckI7O0FBRUEsWUFBSVAsbUJBQW1CRSxJQUF2QixFQUE2QjtBQUMzQkcsdUJBQWFGLEtBQWI7O0FBRUEsaUJBQU8sSUFBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BVkQ7O0FBWUFBLGNBQVFFLFVBQVIsQ0FoQjRCLENBZ0JSOztBQUVwQixhQUFPRixLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCdkIsWUFBakI7O0FBRUEsU0FBU08sS0FBVCxDQUFlaUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cbiAgXG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBub2RlID0gbnVsbCxcbiAgICAgICAgcHJvZHVjdGlvbnNMZW5ndGggPSB0aGlzLnByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIHZhciBmaXJzdFByb2R1Y3Rpb24gPSBmaXJzdCh0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gZmlyc3RQcm9kdWN0aW9uLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2VHaXZlblByb2R1Y3Rpb25OYW1lKHRva2VucywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG51bGwsXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMpLFxuICAgICAgICBwcm9kdWN0aW9uID0gdGhpcy5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBub2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgdGhpcy5wcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcbiAgICAgIFxuICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpLFxuICAgICAgICBwcm9kdWN0aW9uID0gKGluZGV4ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdGlvbnNbaW5kZXhdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgdmFyIGluZGV4LFxuICAgICAgICBmb3VuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRleCA9IGZvdW5kSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==