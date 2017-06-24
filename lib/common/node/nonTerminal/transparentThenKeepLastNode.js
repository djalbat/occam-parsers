'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../util/array');

var TransparentThenKeepLastNode = function () {
  function TransparentThenKeepLastNode() {
    _classCallCheck(this, TransparentThenKeepLastNode);
  }

  _createClass(TransparentThenKeepLastNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = arrayUtil.keepLast(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepLastNode;
}();

module.exports = TransparentThenKeepLastNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwTGFzdE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlbktlZXBMYXN0Tm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJrZWVwTGFzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLHFCQUFSLENBQWxCOztJQUVNQywyQjs7Ozs7Ozt5Q0FDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDRCxjQUFRSCxVQUFVSyxRQUFWLENBQW1CRixLQUFuQixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLDJCQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5LZWVwTGFzdE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuS2VlcExhc3ROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmtlZXBMYXN0KG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbktlZXBMYXN0Tm9kZTtcbiJdfQ==