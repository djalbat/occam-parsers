'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../arrayUtil');

var TransparentThenKeepLastNode = function () {
  function TransparentThenKeepLastNode() {
    _classCallCheck(this, TransparentThenKeepLastNode);
  }

  _createClass(TransparentThenKeepLastNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      nodes = arrayUtil.keepLast(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepLastNode;
}();

module.exports = TransparentThenKeepLastNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwTGFzdC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcExhc3ROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImtlZXBMYXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsb0JBQVIsQ0FBbEI7O0lBRU1DLDJCOzs7Ozs7OytDQUM4QkMsSyxFQUFPQyxjLEVBQWdCO0FBQ3ZERCxjQUFRSCxVQUFVSyxRQUFWLENBQW1CRixLQUFuQixDQUFSOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLDJCQUFqQiIsImZpbGUiOiJ0cmFuc3BhcmVudFRoZW5LZWVwTGFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vYXJyYXlVdGlsJyk7XG5cbmNsYXNzIFRyYW5zcGFyZW50VGhlbktlZXBMYXN0Tm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5rZWVwTGFzdChub2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFRoZW5LZWVwTGFzdE5vZGU7XG4iXX0=