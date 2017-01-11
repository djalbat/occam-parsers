'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var MissingFirstChildNode = function (_NonTerminalNode) {
  _inherits(MissingFirstChildNode, _NonTerminalNode);

  function MissingFirstChildNode() {
    _classCallCheck(this, MissingFirstChildNode);

    return _possibleConstructorReturn(this, (MissingFirstChildNode.__proto__ || Object.getPrototypeOf(MissingFirstChildNode)).apply(this, arguments));
  }

  _createClass(MissingFirstChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes.slice(1),
          ///
      missingFirstChildNode = new MissingFirstChildNode(childNodes, productionName);

      nodes = [missingFirstChildNode]; ///

      return nodes;
    }
  }]);

  return MissingFirstChildNode;
}(NonTerminalNode);

module.exports = MissingFirstChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL21pc3NpbmdGaXJzdENoaWxkLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJNaXNzaW5nRmlyc3RDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsInNsaWNlIiwibWlzc2luZ0ZpcnN0Q2hpbGROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsNEJBQVIsQ0FBdEI7O0lBRU1DLHFCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFGLE1BQU1HLEtBQU4sQ0FBWSxDQUFaLENBQWpCO0FBQUEsVUFBaUM7QUFDN0JDLDhCQUF3QixJQUFJTCxxQkFBSixDQUEwQkcsVUFBMUIsRUFBc0NELGNBQXRDLENBRDVCOztBQUdBRCxjQUFRLENBQUNJLHFCQUFELENBQVIsQ0FKc0MsQ0FJTDs7QUFFakMsYUFBT0osS0FBUDtBQUNEOzs7O0VBUmlDSCxlOztBQVdwQ1EsT0FBT0MsT0FBUCxHQUFpQlAscUJBQWpCIiwiZmlsZSI6Im1pc3NpbmdGaXJzdENoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vYm5mL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgTWlzc2luZ0ZpcnN0Q2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVzLnNsaWNlKDEpLCAvLy9cbiAgICAgICAgbWlzc2luZ0ZpcnN0Q2hpbGROb2RlID0gbmV3IE1pc3NpbmdGaXJzdENoaWxkTm9kZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFttaXNzaW5nRmlyc3RDaGlsZE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pc3NpbmdGaXJzdENoaWxkTm9kZTtcbiJdfQ==