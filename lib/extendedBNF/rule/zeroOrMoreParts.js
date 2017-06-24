'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ZeroOrMorePartsNode = require('../node/zeroOrMoreParts'),
    ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

var ZeroOrMorePartsRule = function (_Rule) {
  _inherits(ZeroOrMorePartsRule, _Rule);

  function ZeroOrMorePartsRule() {
    _classCallCheck(this, ZeroOrMorePartsRule);

    var zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
        name = 'zeroOrMoreParts',
        zeroOrMoreParts = [zeroOrMorePartsDefinition],
        Node = ZeroOrMorePartsNode;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsRule.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsRule)).call(this, name, zeroOrMoreParts, Node));
  }

  return ZeroOrMorePartsRule;
}(Rule);

module.exports = ZeroOrMorePartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c05vZGUiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiWmVyb09yTW9yZVBhcnRzUnVsZSIsInplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiemVyb09yTW9yZVBhcnRzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsc0JBQXNCRCxRQUFRLHlCQUFSLENBRDVCO0FBQUEsSUFFTUUsNEJBQTRCRixRQUFRLCtCQUFSLENBRmxDOztJQUlNRyxtQjs7O0FBQ0osaUNBQWM7QUFBQTs7QUFDWixRQUFNQyw0QkFBNEIsSUFBSUYseUJBQUosRUFBbEM7QUFBQSxRQUNNRyxPQUFPLGlCQURiO0FBQUEsUUFFTUMsa0JBQWtCLENBQ2hCRix5QkFEZ0IsQ0FGeEI7QUFBQSxRQUtNRyxPQUFPTixtQkFMYjs7QUFEWSxxSUFRTkksSUFSTSxFQVFBQyxlQVJBLEVBUWlCQyxJQVJqQjtBQVNiOzs7RUFWK0JSLEk7O0FBYWxDUyxPQUFPQyxPQUFQLEdBQWlCTixtQkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgWmVyb09yTW9yZVBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uID0gbmV3IFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ3plcm9Pck1vcmVQYXJ0cycsXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzID0gW1xuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFplcm9Pck1vcmVQYXJ0c05vZGU7XG5cbiAgICBzdXBlcihuYW1lLCB6ZXJvT3JNb3JlUGFydHMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNSdWxlO1xuIl19