'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var parserUtil = require('../../util/parser');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var ProductionNamePart = function () {
  function ProductionNamePart(productionName) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, ProductionNamePart);

    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(ProductionNamePart, [{
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive(productionName) {
      var leftRecursive = this.productionName === productionName;

      return leftRecursive;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var productions = context.getProductions(),
          production = parserUtil.findProduction(this.productionName, productions);

      if (production !== null) {
        nodeOrNodes = production.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + this.productionName;

      return string;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFyc2VyVXRpbCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJub1doaXRlc3BhY2UiLCJsZWZ0UmVjdXJzaXZlIiwiY29udGV4dCIsIm5vZGVPck5vZGVzIiwicHJvZHVjdGlvbnMiLCJnZXRQcm9kdWN0aW9ucyIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInBhcnNlIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsbUJBQVIsQ0FBbkI7O0FBRU0sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjs7SUFJQUMsa0I7QUFDSiw4QkFBWUMsY0FBWixFQUFrRDtBQUFBLFFBQXRCQyxZQUFzQix1RUFBUCxLQUFPOztBQUFBOztBQUNoRCxTQUFLRCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0QsY0FBWjtBQUNEOzs7b0NBRWVBLGMsRUFBZ0I7QUFDOUIsVUFBTUUsZ0JBQWlCLEtBQUtGLGNBQUwsS0FBd0JBLGNBQS9DOztBQUVBLGFBQU9FLGFBQVA7QUFDRDs7OzBCQUVLQyxPLEVBQVNGLFksRUFBYztBQUMzQkEscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQUQyQixDQUN1Qjs7QUFFbEQsVUFBSUcsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxjQUFjRixRQUFRRyxjQUFSLEVBQXBCO0FBQUEsVUFDTUMsYUFBYVosV0FBV2EsY0FBWCxDQUEwQixLQUFLUixjQUEvQixFQUErQ0ssV0FBL0MsQ0FEbkI7O0FBR0EsVUFBSUUsZUFBZSxJQUFuQixFQUF5QjtBQUN2Qkgsc0JBQWNHLFdBQVdFLEtBQVgsQ0FBaUJOLE9BQWpCLEVBQTBCRixZQUExQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT0csV0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTSxxQkFBcUIsS0FBS1QsWUFBTCxHQUNFSCxhQURGLEdBRUksRUFGL0I7QUFBQSxVQUdNYSxjQUFZRCxrQkFBWixHQUFpQyxLQUFLVixjQUg1Qzs7QUFLQSxhQUFPVyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCZCxrQkFBakIiLCJmaWxlIjoicHJvZHVjdGlvbk5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlID0gZmFsc2UpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlID0gKHRoaXMucHJvZHVjdGlvbk5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9JHt0aGlzLnByb2R1Y3Rpb25OYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJ0O1xuIl19