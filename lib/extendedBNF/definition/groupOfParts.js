'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ProductionNamePart = require('../part/productionName');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var GroupOfPartsDefinition = function (_Definition) {
      _inherits(GroupOfPartsDefinition, _Definition);

      function GroupOfPartsDefinition() {
            _classCallCheck(this, GroupOfPartsDefinition);

            var partProductionName = 'part',
                openBracketTerminalSymbolContent = openBracket,
                closeBracketTerminalSymbolContent = closeBracket,
                partProductionNamePart = new ProductionNamePart(partProductionName),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
                oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart),
                parts = [openBracketTerminalSymbolPart, oneOrMorePartProductionNamePartsPart, closeBracketTerminalSymbolPart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIm9wZW5CcmFja2V0IiwiY2xvc2VCcmFja2V0IiwiR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiIsInBhcnRQcm9kdWN0aW9uTmFtZSIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50IiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsIm9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0IiwiY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0Iiwib25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRyxxQkFBcUJILFFBQVEsd0JBQVIsQ0FGM0I7QUFBQSxJQUdNSSxxQkFBcUJKLFFBQVEsd0JBQVIsQ0FIM0I7O0FBS00sSUFBRUssZ0JBQUYsR0FBdUJOLE1BQXZCLENBQUVNLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxXQUZGLEdBRWdDRCxjQUZoQyxDQUVFQyxXQUZGO0FBQUEsSUFFZUMsWUFGZixHQUVnQ0YsY0FGaEMsQ0FFZUUsWUFGZjs7SUFJQUMsc0I7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLHFCQUFxQixNQUEzQjtBQUFBLGdCQUNNQyxtQ0FBbUNKLFdBRHpDO0FBQUEsZ0JBRU1LLG9DQUFvQ0osWUFGMUM7QUFBQSxnQkFHTUsseUJBQXlCLElBQUlULGtCQUFKLENBQXVCTSxrQkFBdkIsQ0FIL0I7QUFBQSxnQkFJTUksZ0NBQWdDLElBQUlYLGtCQUFKLENBQXVCUSxnQ0FBdkIsQ0FKdEM7QUFBQSxnQkFLTUksaUNBQWlDLElBQUlaLGtCQUFKLENBQXVCUyxpQ0FBdkIsQ0FMdkM7QUFBQSxnQkFNTUksdUNBQXVDLElBQUlkLGtCQUFKLENBQXVCVyxzQkFBdkIsQ0FON0M7QUFBQSxnQkFPTUksUUFBUSxDQUNOSCw2QkFETSxFQUVORSxvQ0FGTSxFQUdORCw4QkFITSxDQVBkOztBQURZLG1KQWNORSxLQWRNO0FBZWI7OztFQWhCa0NoQixVOztBQW1CckNpQixPQUFPQyxPQUFQLEdBQWlCVixzQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY29uc3QgeyBFeHRlbmRlZEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBFeHRlbmRlZEJORkxleGVyLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==