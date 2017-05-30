'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    EndOfLinePart = require('../part/endOfLine'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var ProductionRule = function (_Rule) {
  _inherits(ProductionRule, _Rule);

  function ProductionRule() {
    _classCallCheck(this, ProductionRule);

    var noWhitespace = false,
        productionNameProductionName = 'productionName',
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
        separatorSymbol = '::=',
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorSymbol, noWhitespace),
        rulesProductionName = 'rules',
        rulesProductionNamePart = new ProductionNamePart(rulesProductionName, noWhitespace),
        endOfLinePart = new EndOfLinePart(),
        parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, rulesProductionNamePart, endOfLinePart];

    return _possibleConstructorReturn(this, (ProductionRule.__proto__ || Object.getPrototypeOf(ProductionRule)).call(this, parts));
  }

  return ProductionRule;
}(Rule);

module.exports = ProductionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiRW5kT2ZMaW5lUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlByb2R1Y3Rpb25SdWxlIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0Iiwic2VwYXJhdG9yU3ltYm9sIiwic2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0IiwicnVsZXNQcm9kdWN0aW9uTmFtZSIsInJ1bGVzUHJvZHVjdGlvbk5hbWVQYXJ0IiwiZW5kT2ZMaW5lUGFydCIsInBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsbUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FIM0I7O0lBS01JLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsZUFBZSxLQUFyQjtBQUFBLFFBQ01DLCtCQUErQixnQkFEckM7QUFBQSxRQUVNQyxtQ0FBbUMsSUFBSUosa0JBQUosQ0FBdUJHLDRCQUF2QixFQUFxREQsWUFBckQsQ0FGekM7QUFBQSxRQUdNRyxrQkFBa0IsS0FIeEI7QUFBQSxRQUlNQyw4QkFBOEIsSUFBSVAsa0JBQUosQ0FBdUJNLGVBQXZCLEVBQXdDSCxZQUF4QyxDQUpwQztBQUFBLFFBS01LLHNCQUFzQixPQUw1QjtBQUFBLFFBTU1DLDBCQUEwQixJQUFJUixrQkFBSixDQUF1Qk8sbUJBQXZCLEVBQTRDTCxZQUE1QyxDQU5oQztBQUFBLFFBT01PLGdCQUFnQixJQUFJWCxhQUFKLEVBUHRCO0FBQUEsUUFRTVksUUFBUSxDQUNOTixnQ0FETSxFQUVORSwyQkFGTSxFQUdORSx1QkFITSxFQUlOQyxhQUpNLENBUmQ7O0FBRFksMkhBZ0JOQyxLQWhCTTtBQWlCYjs7O0VBbEIwQmQsSTs7QUFxQjdCZSxPQUFPQyxPQUFQLEdBQWlCWCxjQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZW5kT2ZMaW5lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNlcGFyYXRvclN5bWJvbCA9ICc6Oj0nLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yU3ltYm9sLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChydWxlc1Byb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydCgpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIGVuZE9mTGluZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvblJ1bGU7XG4iXX0=