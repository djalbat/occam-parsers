'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../../utilities/array'),
    NonTerminalNode = require('../nonTerminal');

var keepFirst = arrayUtilities.keepFirst;

var KeepFirstChildNode = function (_NonTerminalNode) {
  _inherits(KeepFirstChildNode, _NonTerminalNode);

  function KeepFirstChildNode() {
    _classCallCheck(this, KeepFirstChildNode);

    return _possibleConstructorReturn(this, (KeepFirstChildNode.__proto__ || Object.getPrototypeOf(KeepFirstChildNode)).apply(this, arguments));
  }

  _createClass(KeepFirstChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepFirstChildNode, ruleName, childNodes);

      return keepFirstChildNode;
    }
  }]);

  return KeepFirstChildNode;
}(NonTerminalNode);

module.exports = KeepFirstChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwRmlyc3RDaGlsZE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwia2VlcEZpcnN0IiwiS2VlcEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJrZWVwRmlyc3RDaGlsZE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsMEJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsZ0JBQVIsQ0FEeEI7O0lBR1FFLFMsR0FBY0gsYyxDQUFkRyxTOztJQUVGQyxrQjs7Ozs7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUMzQyxVQUFNQyxhQUFhSixVQUFVRSxLQUFWLENBQW5CO0FBQUEsVUFDTUcscUJBQXFCTixnQkFBZ0JPLHlCQUFoQixDQUEwQ0wsa0JBQTFDLEVBQThERSxRQUE5RCxFQUF3RUMsVUFBeEUsQ0FEM0I7O0FBR0EsYUFBT0Msa0JBQVA7QUFDRDs7OztFQU44Qk4sZTs7QUFTakNRLE9BQU9DLE9BQVAsR0FBaUJQLGtCQUFqQiIsImZpbGUiOiJrZWVwRmlyc3RDaGlsZE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IGtlZXBGaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEtlZXBGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0ga2VlcEZpcnN0KG5vZGVzKSxcbiAgICAgICAgICBrZWVwRmlyc3RDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhLZWVwRmlyc3RDaGlsZE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBrZWVwRmlyc3RDaGlsZE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZWVwRmlyc3RDaGlsZE5vZGU7XG4iXX0=