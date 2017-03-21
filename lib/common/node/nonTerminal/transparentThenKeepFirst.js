'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../arrayUtil');

var TransparentThenKeepFirstNode = function () {
  function TransparentThenKeepFirstNode() {
    _classCallCheck(this, TransparentThenKeepFirstNode);
  }

  _createClass(TransparentThenKeepFirstNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      nodes = arrayUtil.keepFirst(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepFirstNode;
}();

module.exports = TransparentThenKeepFirstNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwRmlyc3QuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlbktlZXBGaXJzdE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwia2VlcEZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsb0JBQVIsQ0FBbEI7O0lBRU1DLDRCOzs7Ozs7OytDQUM4QkMsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZERCxjQUFRSCxVQUFVSyxTQUFWLENBQW9CRixLQUFwQixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLDRCQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5LZWVwRmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2FycmF5VXRpbCcpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5LZWVwRmlyc3ROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmtlZXBGaXJzdChub2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFRoZW5LZWVwRmlyc3ROb2RlO1xuIl19