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
            context = new Context(tokens, this.productions),
            production = firstProduction,
            ///
        nodes = production.parse(context);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJyZXF1aXJlIiwiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJ0b2tlbnMiLCJub2RlIiwicHJvZHVjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByb2R1Y3Rpb24iLCJmaXJzdCIsImNvbnRleHQiLCJwcm9kdWN0aW9uIiwibm9kZXMiLCJwYXJzZSIsIm5vZGVzTGVuZ3RoIiwiZmlyc3ROb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJuYW1lIiwiaW5kZXgiLCJpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZSIsImZvdW5kSW5kZXgiLCJzb21lIiwiZ2V0TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztJQUVNQyxZO0FBQ0osd0JBQVlDLFdBQVosRUFBeUI7QUFBQTs7QUFDdkIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzswQkFFS0MsTSxFQUFRO0FBQ1osVUFBSUMsT0FBTyxJQUFYO0FBQUEsVUFDSUMsb0JBQW9CLEtBQUtILFdBQUwsQ0FBaUJJLE1BRHpDOztBQUdBLFVBQUlELG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFJRSxrQkFBa0JDLE1BQU0sS0FBS04sV0FBWCxDQUF0QjtBQUFBLFlBQ0lPLFVBQVUsSUFBSVYsT0FBSixDQUFZSSxNQUFaLEVBQW9CLEtBQUtELFdBQXpCLENBRGQ7QUFBQSxZQUVJUSxhQUFhSCxlQUZqQjtBQUFBLFlBRWtDO0FBQzlCSSxnQkFBUUQsV0FBV0UsS0FBWCxDQUFpQkgsT0FBakIsQ0FIWjs7QUFLQSxZQUFJRSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsY0FBSUUsY0FBY0YsTUFBTUwsTUFBeEI7O0FBRUEsY0FBSU8sY0FBYyxDQUFsQixFQUFxQjtBQUNuQixnQkFBSUMsWUFBWU4sTUFBTUcsS0FBTixDQUFoQjs7QUFFQVAsbUJBQU9VLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGO0FBQ0Y7O0FBRUQsYUFBT1YsSUFBUDtBQUNEOzs7bUNBRWNXLGMsRUFBZ0I7QUFDN0IsVUFBSUMsT0FBT0QsY0FBWDtBQUFBLFVBQTRCO0FBQ3hCRSxjQUFRLEtBQUtDLHVCQUFMLENBQTZCRixJQUE3QixDQURaO0FBQUEsVUFFSU4sYUFBY08sVUFBVSxJQUFYLEdBQ0UsS0FBS2YsV0FBTCxDQUFpQmUsS0FBakIsQ0FERixHQUVJLElBSnJCOztBQU1BLGFBQU9QLFVBQVA7QUFDRDs7OzRDQUV1Qk0sSSxFQUFNO0FBQzVCLFVBQUlDLEtBQUo7QUFBQSxVQUNJRSxhQUFhLElBRGpCOztBQUdBLFdBQUtqQixXQUFMLENBQWlCa0IsSUFBakIsQ0FBc0IsVUFBU1YsVUFBVCxFQUFxQk8sS0FBckIsRUFBNEI7QUFDaEQsWUFBSUYsaUJBQWlCTCxXQUFXVyxPQUFYLEVBQXJCOztBQUVBLFlBQUlOLG1CQUFtQkMsSUFBdkIsRUFBNkI7QUFDM0JHLHVCQUFhRixLQUFiOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBQSxjQUFRRSxVQUFSLENBaEI0QixDQWdCUjs7QUFFcEIsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQnRCLFlBQWpCOztBQUVBLFNBQVNPLEtBQVQsQ0FBZWdCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zKSB7XG4gICAgdmFyIG5vZGUgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb24sIC8vL1xuICAgICAgICAgIG5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAobm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpLFxuICAgICAgICBwcm9kdWN0aW9uID0gKGluZGV4ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdGlvbnNbaW5kZXhdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cblxuICBpbmRleE9mUHJvZHVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgdmFyIGluZGV4LFxuICAgICAgICBmb3VuZEluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpbmRleCA9IGZvdW5kSW5kZXg7IC8vL1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==