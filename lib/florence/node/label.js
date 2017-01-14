'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelNode = function () {
  function LabelNode() {
    _classCallCheck(this, LabelNode);
  }

  _createClass(LabelNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var firstNode = first(nodes),
          terminalNode = firstNode,
          ///
      significantToken = terminalNode.getSignificantToken(),
          significantTokenType = 'label'; ///

      significantToken.setType(significantTokenType);

      nodes = [terminalNode]; ///

      return nodes;
    }
  }]);

  return LabelNode;
}();

module.exports = LabelNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2xhYmVsLmpzIl0sIm5hbWVzIjpbIkxhYmVsTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzZXRUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxZQUFZQyxNQUFNSCxLQUFOLENBQWhCO0FBQUEsVUFDSUksZUFBZUYsU0FEbkI7QUFBQSxVQUMrQjtBQUMzQkcseUJBQW1CRCxhQUFhRSxtQkFBYixFQUZ2QjtBQUFBLFVBR0lDLHVCQUF1QixPQUgzQixDQURzQyxDQUlGOztBQUVwQ0YsdUJBQWlCRyxPQUFqQixDQUF5QkQsb0JBQXpCOztBQUVBUCxjQUFRLENBQUNJLFlBQUQsQ0FBUixDQVJzQyxDQVFkOztBQUV4QixhQUFPSixLQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCWCxTQUFqQjs7QUFFQSxTQUFTSSxLQUFULENBQWVRLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTGFiZWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdE5vZGUsICAvLy9cbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gJ2xhYmVsJzsgLy8vXG5cbiAgICBzaWduaWZpY2FudFRva2VuLnNldFR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYWJlbE5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19