'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../util/array');

var TransparentThenDiscardLastNode = function () {
  function TransparentThenDiscardLastNode() {
    _classCallCheck(this, TransparentThenDiscardLastNode);
  }

  _createClass(TransparentThenDiscardLastNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = arrayUtil.discardLast(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardLastNode;
}();

module.exports = TransparentThenDiscardLastNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRMYXN0Tm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJkaXNjYXJkTGFzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCOztJQUVNQyw4Qjs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDRCxjQUFRSCxVQUFVSyxXQUFWLENBQXNCRixLQUF0QixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLDhCQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5EaXNjYXJkTGFzdE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZExhc3ROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRMYXN0KG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRMYXN0Tm9kZTtcbiJdfQ==