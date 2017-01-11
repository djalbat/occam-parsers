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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9taXNzaW5nRmlyc3RDaGlsZC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiTWlzc2luZ0ZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImNoaWxkTm9kZXMiLCJzbGljZSIsIm1pc3NpbmdGaXJzdENoaWxkTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLDRCQUFSLENBQXRCOztJQUVNQyxxQjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxhQUFhRixNQUFNRyxLQUFOLENBQVksQ0FBWixDQUFqQjtBQUFBLFVBQWlDO0FBQzdCQyw4QkFBd0IsSUFBSUwscUJBQUosQ0FBMEJHLFVBQTFCLEVBQXNDRCxjQUF0QyxDQUQ1Qjs7QUFHQUQsY0FBUSxDQUFDSSxxQkFBRCxDQUFSLENBSnNDLENBSUw7O0FBRWpDLGFBQU9KLEtBQVA7QUFDRDs7OztFQVJpQ0gsZTs7QUFXcENRLE9BQU9DLE9BQVAsR0FBaUJQLHFCQUFqQiIsImZpbGUiOiJtaXNzaW5nRmlyc3RDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIE1pc3NpbmdGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBub2Rlcy5zbGljZSgxKSwgLy8vXG4gICAgICAgIG1pc3NpbmdGaXJzdENoaWxkTm9kZSA9IG5ldyBNaXNzaW5nRmlyc3RDaGlsZE5vZGUoY2hpbGROb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgbm9kZXMgPSBbbWlzc2luZ0ZpcnN0Q2hpbGROb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaXNzaW5nRmlyc3RDaGlsZE5vZGU7XG4iXX0=