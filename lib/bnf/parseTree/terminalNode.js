'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

var TerminalNodeParseTree = function (_VerticalBranchParseT) {
    _inherits(TerminalNodeParseTree, _VerticalBranchParseT);

    function TerminalNodeParseTree() {
        _classCallCheck(this, TerminalNodeParseTree);

        return _possibleConstructorReturn(this, (TerminalNodeParseTree.__proto__ || Object.getPrototypeOf(TerminalNodeParseTree)).apply(this, arguments));
    }

    _createClass(TerminalNodeParseTree, null, [{
        key: 'fromTerminalNode',
        value: function fromTerminalNode(terminalNode) {
            var line = terminalNode.getLine(),
                lineNumber = line.getNumber(),
                lineRemoved = line.isRemoved();

            lineNumber = lineRemoved ? '-' : lineNumber; ///

            var significantToken = terminalNode.getSignificantToken(),
                significantTokenType = significantToken.getType(),
                significantTokenContent = significantToken.getContent(),
                string = significantTokenContent + '[' + significantTokenType + '] (' + lineNumber + ')',
                stringLength = string.length,
                verticalBranchParseTreeWidth = stringLength,
                ///
            verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
                verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
                terminalNodeParseTree = VerticalBranchParseTree.fromString(string, TerminalNodeParseTree, verticalBranchPosition);

            terminalNodeParseTree.appendToTop(verticalBranchParseTree);

            return terminalNodeParseTree;
        }
    }]);

    return TerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = TerminalNodeParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGUiLCJsaW5lIiwiZ2V0TGluZSIsImxpbmVOdW1iZXIiLCJnZXROdW1iZXIiLCJsaW5lUmVtb3ZlZCIsImlzUmVtb3ZlZCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLDBCQUEwQkMsUUFBUSw2QkFBUixDQUE5Qjs7SUFFTUMscUI7Ozs7Ozs7Ozs7O3lDQUNvQkMsWSxFQUFjO0FBQ3BDLGdCQUFJQyxPQUFPRCxhQUFhRSxPQUFiLEVBQVg7QUFBQSxnQkFDSUMsYUFBYUYsS0FBS0csU0FBTCxFQURqQjtBQUFBLGdCQUVJQyxjQUFjSixLQUFLSyxTQUFMLEVBRmxCOztBQUlBSCx5QkFBYUUsY0FBYyxHQUFkLEdBQW9CRixVQUFqQyxDQUxvQyxDQUtVOztBQUU5QyxnQkFBSUksbUJBQW1CUCxhQUFhUSxtQkFBYixFQUF2QjtBQUFBLGdCQUNJQyx1QkFBdUJGLGlCQUFpQkcsT0FBakIsRUFEM0I7QUFBQSxnQkFFSUMsMEJBQTBCSixpQkFBaUJLLFVBQWpCLEVBRjlCO0FBQUEsZ0JBR0lDLFNBQVlGLHVCQUFaLFNBQXVDRixvQkFBdkMsV0FBaUVOLFVBQWpFLE1BSEo7QUFBQSxnQkFJSVcsZUFBZUQsT0FBT0UsTUFKMUI7QUFBQSxnQkFLSUMsK0JBQStCRixZQUxuQztBQUFBLGdCQUtpRDtBQUM3Q0csc0NBQTBCcEIsd0JBQXdCcUIsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQU45QjtBQUFBLGdCQU9JRyx5QkFBeUJGLHdCQUF3QkcseUJBQXhCLEVBUDdCO0FBQUEsZ0JBUUlDLHdCQUF3QnhCLHdCQUF3QnlCLFVBQXhCLENBQW1DVCxNQUFuQyxFQUEyQ2QscUJBQTNDLEVBQWtFb0Isc0JBQWxFLENBUjVCOztBQVVBRSxrQ0FBc0JFLFdBQXRCLENBQWtDTix1QkFBbEM7O0FBRUEsbUJBQU9JLHFCQUFQO0FBQ0Q7Ozs7RUFyQmlDeEIsdUI7O0FBd0JwQzJCLE9BQU9DLE9BQVAsR0FBaUIxQixxQkFBakIiLCJmaWxlIjoidGVybWluYWxOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgbGluZSA9IHRlcm1pbmFsTm9kZS5nZXRMaW5lKCksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lLmdldE51bWJlcigpLFxuICAgICAgICBsaW5lUmVtb3ZlZCA9IGxpbmUuaXNSZW1vdmVkKCk7XG5cbiAgICBsaW5lTnVtYmVyID0gbGluZVJlbW92ZWQgPyAnLScgOiBsaW5lTnVtYmVyOyAgLy8vXG5cbiAgICB2YXIgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgIHN0cmluZyA9IGAke3NpZ25pZmljYW50VG9rZW5Db250ZW50fVske3NpZ25pZmljYW50VG9rZW5UeXBlfV0gKCR7bGluZU51bWJlcn0pYCxcbiAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG4gICAgXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4iXX0=