'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../arrayUtil'),
    NonTerminalNode = require('../nonTerminal');

var KeepSecondChildNode = function (_NonTerminalNode) {
  _inherits(KeepSecondChildNode, _NonTerminalNode);

  function KeepSecondChildNode() {
    _classCallCheck(this, KeepSecondChildNode);

    return _possibleConstructorReturn(this, (KeepSecondChildNode.__proto__ || Object.getPrototypeOf(KeepSecondChildNode)).apply(this, arguments));
  }

  _createClass(KeepSecondChildNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepSecondChildNode);

      return keepSecondChildNode;
    }
  }]);

  return KeepSecondChildNode;
}(NonTerminalNode);

module.exports = KeepSecondChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwU2Vjb25kQ2hpbGQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIktlZXBTZWNvbmRDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImtlZXBTZWNvbmQiLCJrZWVwU2Vjb25kQ2hpbGROb2RlIiwiZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxvQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7OytDQUM4QkMsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQU1DLGFBQWFOLFVBQVVPLFVBQVYsQ0FBcUJILEtBQXJCLENBQW5CO0FBQUEsVUFDTUksc0JBQXNCTixnQkFBZ0JPLCtCQUFoQixDQUFnREosY0FBaEQsRUFBZ0VDLFVBQWhFLEVBQTRFSCxtQkFBNUUsQ0FENUI7O0FBR0EsYUFBT0ssbUJBQVA7QUFDRDs7OztFQU4rQk4sZTs7QUFTbENRLE9BQU9DLE9BQVAsR0FBaUJSLG1CQUFqQiIsImZpbGUiOiJrZWVwU2Vjb25kQ2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2FycmF5VXRpbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgS2VlcFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmtlZXBTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGtlZXBTZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgS2VlcFNlY29uZENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4ga2VlcFNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtlZXBTZWNvbmRDaGlsZE5vZGU7XG4iXX0=