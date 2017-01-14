'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var MissingSecondChildNode = function (_NonTerminalNode) {
  _inherits(MissingSecondChildNode, _NonTerminalNode);

  function MissingSecondChildNode() {
    _classCallCheck(this, MissingSecondChildNode);

    return _possibleConstructorReturn(this, (MissingSecondChildNode.__proto__ || Object.getPrototypeOf(MissingSecondChildNode)).apply(this, arguments));
  }

  _createClass(MissingSecondChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var firstNode = first(nodes),
          thirdNodeOnwards = thirdOnwards(nodes),
          childNodes = [].concat(firstNode).concat(thirdNodeOnwards),
          missingSecondChildNode = new MissingSecondChildNode(childNodes, productionName);

      nodes = [missingSecondChildNode]; ///

      return nodes;
    }
  }]);

  return MissingSecondChildNode;
}(NonTerminalNode);

module.exports = MissingSecondChildNode;

function first(array) {
  return array[0];
}
function thirdOnwards(array) {
  return array.slice(2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9taXNzaW5nU2Vjb25kQ2hpbGQuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIk1pc3NpbmdTZWNvbmRDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZmlyc3ROb2RlIiwiZmlyc3QiLCJ0aGlyZE5vZGVPbndhcmRzIiwidGhpcmRPbndhcmRzIiwiY2hpbGROb2RlcyIsImNvbmNhdCIsIm1pc3NpbmdTZWNvbmRDaGlsZE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsNEJBQVIsQ0FBdEI7O0lBRU1DLHNCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLFlBQVlDLE1BQU1ILEtBQU4sQ0FBaEI7QUFBQSxVQUNJSSxtQkFBbUJDLGFBQWFMLEtBQWIsQ0FEdkI7QUFBQSxVQUVJTSxhQUFhLEdBQUdDLE1BQUgsQ0FBVUwsU0FBVixFQUFxQkssTUFBckIsQ0FBNEJILGdCQUE1QixDQUZqQjtBQUFBLFVBR0lJLHlCQUF5QixJQUFJVCxzQkFBSixDQUEyQk8sVUFBM0IsRUFBdUNMLGNBQXZDLENBSDdCOztBQUtBRCxjQUFRLENBQUNRLHNCQUFELENBQVIsQ0FOc0MsQ0FNSjs7QUFFbEMsYUFBT1IsS0FBUDtBQUNEOzs7O0VBVmtDSCxlOztBQWFyQ1ksT0FBT0MsT0FBUCxHQUFpQlgsc0JBQWpCOztBQUVBLFNBQVNJLEtBQVQsQ0FBZVEsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNOLFlBQVQsQ0FBc0JNLEtBQXRCLEVBQTZCO0FBQUUsU0FBT0EsTUFBTUMsS0FBTixDQUFZLENBQVosQ0FBUDtBQUF3QiIsImZpbGUiOiJtaXNzaW5nU2Vjb25kQ2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9ibmYvbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBNaXNzaW5nU2Vjb25kQ2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICB0aGlyZE5vZGVPbndhcmRzID0gdGhpcmRPbndhcmRzKG5vZGVzKSxcbiAgICAgICAgY2hpbGROb2RlcyA9IFtdLmNvbmNhdChmaXJzdE5vZGUpLmNvbmNhdCh0aGlyZE5vZGVPbndhcmRzKSxcbiAgICAgICAgbWlzc2luZ1NlY29uZENoaWxkTm9kZSA9IG5ldyBNaXNzaW5nU2Vjb25kQ2hpbGROb2RlKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW21pc3NpbmdTZWNvbmRDaGlsZE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pc3NpbmdTZWNvbmRDaGlsZE5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gdGhpcmRPbndhcmRzKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgyKTsgfVxuIl19