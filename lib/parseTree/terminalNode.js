'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

var TerminalNodeParseTree = function (_ParseTree) {
    _inherits(TerminalNodeParseTree, _ParseTree);

    function TerminalNodeParseTree() {
        _classCallCheck(this, TerminalNodeParseTree);

        return _possibleConstructorReturn(this, (TerminalNodeParseTree.__proto__ || Object.getPrototypeOf(TerminalNodeParseTree)).apply(this, arguments));
    }

    _createClass(TerminalNodeParseTree, null, [{
        key: 'fromTerminalNode',
        value: function fromTerminalNode(nonTerminalNode) {
            var str = nonTerminalNode.getString(),
                terminalNodeParseTree = ParseTree.fromString(str),
                terminalNodeParseTreeWidth = terminalNodeParseTree.getWidth(),
                verticalBranchParseTree = VerticalBranchParseTree.fromWidth(terminalNodeParseTreeWidth);

            terminalNodeParseTree.appendToTop(verticalBranchParseTree);

            return terminalNodeParseTree;
        }
    }]);

    return TerminalNodeParseTree;
}(ParseTree);

module.exports = TerminalNodeParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIm5vblRlcm1pbmFsTm9kZSIsInN0ciIsImdldFN0cmluZyIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCO0FBQUEsSUFDSUMsMEJBQTBCRCxRQUFRLDZCQUFSLENBRDlCOztJQUdNRSxxQjs7Ozs7Ozs7Ozs7eUNBQ29CQyxlLEVBQWlCO0FBQ3ZDLGdCQUFJQyxNQUFNRCxnQkFBZ0JFLFNBQWhCLEVBQVY7QUFBQSxnQkFDSUMsd0JBQXdCUCxVQUFVUSxVQUFWLENBQXFCSCxHQUFyQixDQUQ1QjtBQUFBLGdCQUVJSSw2QkFBNkJGLHNCQUFzQkcsUUFBdEIsRUFGakM7QUFBQSxnQkFHSUMsMEJBQTBCVCx3QkFBd0JVLFNBQXhCLENBQWtDSCwwQkFBbEMsQ0FIOUI7O0FBS0FGLGtDQUFzQk0sV0FBdEIsQ0FBa0NGLHVCQUFsQzs7QUFFQSxtQkFBT0oscUJBQVA7QUFDRDs7OztFQVZpQ1AsUzs7QUFhcENjLE9BQU9DLE9BQVAsR0FBaUJaLHFCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKSxcbiAgICBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgc3RyID0gbm9uVGVybWluYWxOb2RlLmdldFN0cmluZygpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHIpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWVXaWR0aCA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh0ZXJtaW5hbE5vZGVQYXJzZVRyZWVXaWR0aCk7XG5cbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiJdfQ==