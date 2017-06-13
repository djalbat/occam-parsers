'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    OptionalPartDefinition = require('../definition/optionalPart');

var OptionalPartProduction = function (_Production) {
  _inherits(OptionalPartProduction, _Production);

  function OptionalPartProduction() {
    _classCallCheck(this, OptionalPartProduction);

    var optionalPartDefinition = new OptionalPartDefinition(),
        name = 'optionalPart',
        optionalPart = [optionalPartDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (OptionalPartProduction.__proto__ || Object.getPrototypeOf(OptionalPartProduction)).call(this, name, optionalPart, Node));
  }

  return OptionalPartProduction;
}(Production);

module.exports = OptionalPartProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJPcHRpb25hbFBhcnREZWZpbml0aW9uIiwiT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiIsIm9wdGlvbmFsUGFydERlZmluaXRpb24iLCJuYW1lIiwib3B0aW9uYWxQYXJ0IiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLHlCQUF5QkYsUUFBUSw0QkFBUixDQUYvQjs7SUFJTUcsc0I7OztBQUNKLG9DQUFjO0FBQUE7O0FBQ1osUUFBTUMseUJBQXlCLElBQUlGLHNCQUFKLEVBQS9CO0FBQUEsUUFDTUcsT0FBTyxjQURiO0FBQUEsUUFFTUMsZUFBZSxDQUNiRixzQkFEYSxDQUZyQjtBQUFBLFFBS01HLE9BQU9OLGVBTGI7O0FBRFksMklBUU5JLElBUk0sRUFRQUMsWUFSQSxFQVFjQyxJQVJkO0FBU2I7OztFQVZrQ1IsVTs7QUFhckNTLE9BQU9DLE9BQVAsR0FBaUJOLHNCQUFqQiIsImZpbGUiOiJvcHRpb25hbFBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgT3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vb3B0aW9uYWxQYXJ0Jyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgb3B0aW9uYWxQYXJ0RGVmaW5pdGlvbiA9IG5ldyBPcHRpb25hbFBhcnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdvcHRpb25hbFBhcnQnLFxuICAgICAgICAgIG9wdGlvbmFsUGFydCA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBvcHRpb25hbFBhcnQsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQcm9kdWN0aW9uO1xuIl19