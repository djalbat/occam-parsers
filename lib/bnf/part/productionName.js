'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = function () {
  function ProductionNamePart(productionName, noWhitespace) {
    _classCallCheck(this, ProductionNamePart);

    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(ProductionNamePart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var productions = context.getProductions(),
          production = ProductionNamePart.findProduction(this.productionName, productions);

      if (production !== null) {
        nodeOrNodes = production.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(name, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var productionNamePart = production.getName();

        if (name === productionNamePart) {
          foundProduction = production;

          return true;
        } else {
          return false;
        }
      });

      var production = foundProduction;

      return production;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsImNvbnRleHQiLCJub2RlT3JOb2RlcyIsInByb2R1Y3Rpb25zIiwiZ2V0UHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJwYXJzZSIsIm5hbWUiLCJmb3VuZFByb2R1Y3Rpb24iLCJzb21lIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwiZ2V0TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsa0I7QUFDSiw4QkFBWUMsY0FBWixFQUE0QkMsWUFBNUIsRUFBMEM7QUFBQTs7QUFDeEMsU0FBS0QsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNELFksRUFBYztBQUMzQkEscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUQyQixDQUN1Qjs7QUFFbEQsVUFBSUUsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxjQUFjRixRQUFRRyxjQUFSLEVBQXBCO0FBQUEsVUFDTUMsYUFBYVAsbUJBQW1CUSxjQUFuQixDQUFrQyxLQUFLUCxjQUF2QyxFQUF1REksV0FBdkQsQ0FEbkI7O0FBR0EsVUFBSUUsZUFBZSxJQUFuQixFQUF5QjtBQUN2Qkgsc0JBQWNHLFdBQVdFLEtBQVgsQ0FBaUJOLE9BQWpCLEVBQTBCRCxZQUExQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT0UsV0FBUDtBQUNEOzs7bUNBRXFCTSxJLEVBQU1MLFcsRUFBYTtBQUN2QyxVQUFJTSxrQkFBa0IsSUFBdEI7O0FBRUFOLGtCQUFZTyxJQUFaLENBQWlCLFVBQVNMLFVBQVQsRUFBcUI7QUFDcEMsWUFBTU0scUJBQXFCTixXQUFXTyxPQUFYLEVBQTNCOztBQUVBLFlBQUlKLFNBQVNHLGtCQUFiLEVBQWlDO0FBQy9CRiw0QkFBa0JKLFVBQWxCOztBQUVBLGlCQUFPLElBQVA7QUFDRCxTQUpELE1BSU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVZEOztBQVlBLFVBQU1BLGFBQWFJLGVBQW5COztBQUVBLGFBQU9KLFVBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJoQixrQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFydCB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gY29udGV4dC5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUHJvZHVjdGlvbihuYW1lLCBwcm9kdWN0aW9ucykge1xuICAgIGxldCBmb3VuZFByb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgcHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZVBhcnQgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IHByb2R1Y3Rpb25OYW1lUGFydCkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJ0O1xuIl19