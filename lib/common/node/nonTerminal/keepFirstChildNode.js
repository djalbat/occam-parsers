'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var KeepFirstChildNode = function (_NonTerminalNode) {
  _inherits(KeepFirstChildNode, _NonTerminalNode);

  function KeepFirstChildNode() {
    _classCallCheck(this, KeepFirstChildNode);

    return _possibleConstructorReturn(this, (KeepFirstChildNode.__proto__ || Object.getPrototypeOf(KeepFirstChildNode)).apply(this, arguments));
  }

  _createClass(KeepFirstChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(KeepFirstChildNode, ruleName, childNodes);

      return keepFirstChildNode;
    }
  }]);

  return KeepFirstChildNode;
}(NonTerminalNode);

module.exports = KeepFirstChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9rZWVwRmlyc3RDaGlsZE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIktlZXBGaXJzdENoaWxkTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwia2VlcEZpcnN0Iiwia2VlcEZpcnN0Q2hpbGROb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxxQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUsa0I7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTUMsYUFBYU4sVUFBVU8sU0FBVixDQUFvQkgsS0FBcEIsQ0FBbkI7QUFBQSxVQUNNSSxxQkFBcUJOLGdCQUFnQk8seUJBQWhCLENBQTBDTixrQkFBMUMsRUFBOERFLFFBQTlELEVBQXdFQyxVQUF4RSxDQUQzQjs7QUFHQSxhQUFPRSxrQkFBUDtBQUNEOzs7O0VBTjhCTixlOztBQVNqQ1EsT0FBT0MsT0FBUCxHQUFpQlIsa0JBQWpCIiwiZmlsZSI6ImtlZXBGaXJzdENoaWxkTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgS2VlcEZpcnN0Q2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwua2VlcEZpcnN0KG5vZGVzKSxcbiAgICAgICAgICBrZWVwRmlyc3RDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhLZWVwRmlyc3RDaGlsZE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBrZWVwRmlyc3RDaGlsZE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZWVwRmlyc3RDaGlsZE5vZGU7XG4iXX0=