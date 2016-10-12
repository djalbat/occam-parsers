'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

var TerminalNodeParseTree = function (_ParseTree) {
  _inherits(TerminalNodeParseTree, _ParseTree);

  function TerminalNodeParseTree(lines, verticalBranchParseTree) {
    _classCallCheck(this, TerminalNodeParseTree);

    var _this = _possibleConstructorReturn(this, (TerminalNodeParseTree.__proto__ || Object.getPrototypeOf(TerminalNodeParseTree)).call(this, lines));

    _this.verticalBranchParseTree = verticalBranchParseTree;
    return _this;
  }

  _createClass(TerminalNodeParseTree, [{
    key: 'getVerticalBranchPosition',
    value: function getVerticalBranchPosition() {
      return this.verticalBranchParseTree.getVerticalBranchPosition();
    }
  }], [{
    key: 'fromTerminalNode',
    value: function fromTerminalNode(terminalNode) {
      var str = terminalNode.getString(),
          strLength = str.length,
          verticalBranchParseTreeWidth = strLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          terminalNodeParseTree = ParseTree.fromString(str, TerminalNodeParseTree, verticalBranchParseTree);

      terminalNodeParseTree.appendToTop(verticalBranchParseTree);

      return terminalNodeParseTree;
    }
  }]);

  return TerminalNodeParseTree;
}(ParseTree);

module.exports = TerminalNodeParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImxpbmVzIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlIiwic3RyIiwiZ2V0U3RyaW5nIiwic3RyTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsImZyb21XaWR0aCIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCO0FBQUEsSUFDSUMsMEJBQTBCRCxRQUFRLDZCQUFSLENBRDlCOztJQUdNRSxxQjs7O0FBQ0osaUNBQVlDLEtBQVosRUFBbUJDLHVCQUFuQixFQUE0QztBQUFBOztBQUFBLDhJQUNwQ0QsS0FEb0M7O0FBRzFDLFVBQUtDLHVCQUFMLEdBQStCQSx1QkFBL0I7QUFIMEM7QUFJM0M7Ozs7Z0RBRTJCO0FBQUUsYUFBTyxLQUFLQSx1QkFBTCxDQUE2QkMseUJBQTdCLEVBQVA7QUFBa0U7OztxQ0FFeEVDLFksRUFBYztBQUNwQyxVQUFJQyxNQUFNRCxhQUFhRSxTQUFiLEVBQVY7QUFBQSxVQUNJQyxZQUFZRixJQUFJRyxNQURwQjtBQUFBLFVBRUlDLCtCQUErQkYsU0FGbkM7QUFBQSxVQUU4QztBQUMxQ0wsZ0NBQTBCSCx3QkFBd0JXLFNBQXhCLENBQWtDRCw0QkFBbEMsQ0FIOUI7QUFBQSxVQUlJRSx3QkFBd0JkLFVBQVVlLFVBQVYsQ0FBcUJQLEdBQXJCLEVBQTBCTCxxQkFBMUIsRUFBaURFLHVCQUFqRCxDQUo1Qjs7QUFNQVMsNEJBQXNCRSxXQUF0QixDQUFrQ1gsdUJBQWxDOztBQUVBLGFBQU9TLHFCQUFQO0FBQ0Q7Ozs7RUFuQmlDZCxTOztBQXNCcENpQixPQUFPQyxPQUFQLEdBQWlCZixxQkFBakIiLCJmaWxlIjoidGVybWluYWxOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyksXG4gICAgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKSB7XG4gICAgc3VwZXIobGluZXMpO1xuXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkgeyByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7IH1cbiAgXG4gIHN0YXRpYyBmcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSkge1xuICAgIHZhciBzdHIgPSB0ZXJtaW5hbE5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGgsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJMZW5ndGgsIC8vL1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyLCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICBcbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiJdfQ==