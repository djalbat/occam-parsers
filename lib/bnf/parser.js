'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    ProductionsProduction = require('./production/productions'),
    ProductionProduction = require('./production/production'),
    RulesProduction = require('./production/rules'),
    RuleProduction = require('./production/rule'),
    PartProduction = require('./production/part'),
    ProductionNameProduction = require('./production/productionName'),
    RegularExpressionProduction = require('./production/regularExpression'),
    TerminalSymbolProduction = require('./production/terminalSymbol'),
    NoWhitespaceProduction = require('./production/noWhitespace'),
    EndOfLineProduction = require('./production/endOfLine');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var productionsProduction = new ProductionsProduction(),
          productionProduction = new ProductionProduction(),
          rulesProduction = new RulesProduction(),
          ruleProduction = new RuleProduction(),
          partProduction = new PartProduction(),
          productionNameProduction = new ProductionNameProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          productions = [productionsProduction, productionProduction, rulesProduction, ruleProduction, partProduction, productionNameProduction, regularExpressionProduction, terminalSymbolProduction, noWhitespaceProduction, endOfLineProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlJ1bGVzUHJvZHVjdGlvbiIsIlJ1bGVQcm9kdWN0aW9uIiwiUGFydFByb2R1Y3Rpb24iLCJQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24iLCJSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24iLCJUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24iLCJOb1doaXRlc3BhY2VQcm9kdWN0aW9uIiwiRW5kT2ZMaW5lUHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicnVsZXNQcm9kdWN0aW9uIiwicnVsZVByb2R1Y3Rpb24iLCJwYXJ0UHJvZHVjdGlvbiIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsInJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiIsInRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiIsIm5vV2hpdGVzcGFjZVByb2R1Y3Rpb24iLCJlbmRPZkxpbmVQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJibmZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMEJBQVIsQ0FEOUI7QUFBQSxJQUVNRSx1QkFBdUJGLFFBQVEseUJBQVIsQ0FGN0I7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNSSxpQkFBaUJKLFFBQVEsbUJBQVIsQ0FKdkI7QUFBQSxJQUtNSyxpQkFBaUJMLFFBQVEsbUJBQVIsQ0FMdkI7QUFBQSxJQU1NTSwyQkFBMkJOLFFBQVEsNkJBQVIsQ0FOakM7QUFBQSxJQU9NTyw4QkFBOEJQLFFBQVEsZ0NBQVIsQ0FQcEM7QUFBQSxJQVFNUSwyQkFBMkJSLFFBQVEsNkJBQVIsQ0FSakM7QUFBQSxJQVNNUyx5QkFBeUJULFFBQVEsMkJBQVIsQ0FUL0I7QUFBQSxJQVVNVSxzQkFBc0JWLFFBQVEsd0JBQVIsQ0FWNUI7O0lBWU1XLFM7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyx3QkFBd0IsSUFBSVgscUJBQUosRUFBOUI7QUFBQSxVQUNNWSx1QkFBdUIsSUFBSVgsb0JBQUosRUFEN0I7QUFBQSxVQUVNWSxrQkFBa0IsSUFBSVgsZUFBSixFQUZ4QjtBQUFBLFVBR01ZLGlCQUFpQixJQUFJWCxjQUFKLEVBSHZCO0FBQUEsVUFJTVksaUJBQWlCLElBQUlYLGNBQUosRUFKdkI7QUFBQSxVQUtNWSwyQkFBMkIsSUFBSVgsd0JBQUosRUFMakM7QUFBQSxVQU1NWSw4QkFBOEIsSUFBSVgsMkJBQUosRUFOcEM7QUFBQSxVQU9NWSwyQkFBMkIsSUFBSVgsd0JBQUosRUFQakM7QUFBQSxVQVFNWSx5QkFBeUIsSUFBSVgsc0JBQUosRUFSL0I7QUFBQSxVQVNNWSxzQkFBc0IsSUFBSVgsbUJBQUosRUFUNUI7QUFBQSxVQVVNWSxjQUFjLENBQ1pWLHFCQURZLEVBRVpDLG9CQUZZLEVBR1pDLGVBSFksRUFJWkMsY0FKWSxFQUtaQyxjQUxZLEVBTVpDLHdCQU5ZLEVBT1pDLDJCQVBZLEVBUVpDLHdCQVJZLEVBU1pDLHNCQVRZLEVBVVpDLG1CQVZZLENBVnBCO0FBQUEsVUFzQk1FLFlBQVksSUFBSVosU0FBSixDQUFjVyxXQUFkLENBdEJsQjs7QUF3QkEsYUFBT0MsU0FBUDtBQUNEOzs7O0VBM0JxQnhCLFk7O0FBOEJ4QnlCLE9BQU9DLE9BQVAsR0FBaUJkLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBSdWxlc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZXMnKSxcbiAgICAgIFJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3J1bGUnKSxcbiAgICAgIFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3BhcnQnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlJyksXG4gICAgICBFbmRPZkxpbmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2VuZE9mTGluZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uID0gbmV3IFJ1bGVzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uID0gbmV3IFJ1bGVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uID0gbmV3IEVuZE9mTGluZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19