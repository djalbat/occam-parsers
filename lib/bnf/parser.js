'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    ProductionsProduction = require('./production/productions'),
    ProductionProduction = require('./production/production'),
    ProductionNameProduction = require('./production/productionName'),
    RulesProduction = require('./production/rules'),
    OrThenRuleProduction = require('./production/orThenRule'),
    RuleProduction = require('./production/rule'),
    PartProduction = require('./production/part');

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
          productionNameProduction = new ProductionNameProduction(),
          rulesProduction = new RulesProduction(),
          orThenRuleProduction = new OrThenRuleProduction(),
          ruleProduction = new RuleProduction(),
          partProduction = new PartProduction(),
          productions = [productionsProduction, productionProduction, productionNameProduction, rulesProduction, orThenRuleProduction, ruleProduction, partProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbW1vblBhcnNlciIsInJlcXVpcmUiLCJQcm9kdWN0aW9uc1Byb2R1Y3Rpb24iLCJQcm9kdWN0aW9uUHJvZHVjdGlvbiIsIlByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiIsIlJ1bGVzUHJvZHVjdGlvbiIsIk9yVGhlblJ1bGVQcm9kdWN0aW9uIiwiUnVsZVByb2R1Y3Rpb24iLCJQYXJ0UHJvZHVjdGlvbiIsIkJORlBhcnNlciIsInByb2R1Y3Rpb25zUHJvZHVjdGlvbiIsInByb2R1Y3Rpb25Qcm9kdWN0aW9uIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIiwicnVsZXNQcm9kdWN0aW9uIiwib3JUaGVuUnVsZVByb2R1Y3Rpb24iLCJydWxlUHJvZHVjdGlvbiIsInBhcnRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJibmZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMEJBQVIsQ0FEOUI7QUFBQSxJQUVNRSx1QkFBdUJGLFFBQVEseUJBQVIsQ0FGN0I7QUFBQSxJQUdNRywyQkFBMkJILFFBQVEsNkJBQVIsQ0FIakM7QUFBQSxJQUlNSSxrQkFBa0JKLFFBQVEsb0JBQVIsQ0FKeEI7QUFBQSxJQUtNSyx1QkFBdUJMLFFBQVEseUJBQVIsQ0FMN0I7QUFBQSxJQU1NTSxpQkFBaUJOLFFBQVEsbUJBQVIsQ0FOdkI7QUFBQSxJQU9NTyxpQkFBaUJQLFFBQVEsbUJBQVIsQ0FQdkI7O0lBU01RLFM7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyx3QkFBd0IsSUFBSVIscUJBQUosRUFBOUI7QUFBQSxVQUNNUyx1QkFBdUIsSUFBSVIsb0JBQUosRUFEN0I7QUFBQSxVQUVNUywyQkFBMkIsSUFBSVIsd0JBQUosRUFGakM7QUFBQSxVQUdNUyxrQkFBa0IsSUFBSVIsZUFBSixFQUh4QjtBQUFBLFVBSU1TLHVCQUF1QixJQUFJUixvQkFBSixFQUo3QjtBQUFBLFVBS01TLGlCQUFpQixJQUFJUixjQUFKLEVBTHZCO0FBQUEsVUFNTVMsaUJBQWlCLElBQUlSLGNBQUosRUFOdkI7QUFBQSxVQU9NUyxjQUFjLENBQ1pQLHFCQURZLEVBRVpDLG9CQUZZLEVBR1pDLHdCQUhZLEVBSVpDLGVBSlksRUFLWkMsb0JBTFksRUFNWkMsY0FOWSxFQU9aQyxjQVBZLENBUHBCO0FBQUEsVUFnQk1FLFlBQVksSUFBSVQsU0FBSixDQUFjUSxXQUFkLENBaEJsQjs7QUFrQkEsYUFBT0MsU0FBUDtBQUNEOzs7O0VBckJxQmxCLFk7O0FBd0J4Qm1CLE9BQU9DLE9BQVAsR0FBaUJYLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlcycpLFxuICAgICAgT3JUaGVuUnVsZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vb3JUaGVuUnVsZScpLFxuICAgICAgUnVsZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZScpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvclRoZW5SdWxlUHJvZHVjdGlvbiA9IG5ldyBPclRoZW5SdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uID0gbmV3IFJ1bGVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgb3JUaGVuUnVsZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIl19