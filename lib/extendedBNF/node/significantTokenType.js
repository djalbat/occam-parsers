'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var SignificantTokenTypeNode = function (_NonTerminalNode) {
      _inherits(SignificantTokenTypeNode, _NonTerminalNode);

      function SignificantTokenTypeNode() {
            _classCallCheck(this, SignificantTokenTypeNode);

            return _possibleConstructorReturn(this, (SignificantTokenTypeNode.__proto__ || Object.getPrototypeOf(SignificantTokenTypeNode)).apply(this, arguments));
      }

      _createClass(SignificantTokenTypeNode, [{
            key: 'generatePart',
            value: function generatePart(Parts, noWhitespace) {
                  var significantTokenType = this.getSignificantTokenType(),
                      SignificantTokenTypePart = Parts['SignificantTokenTypePart'],
                      significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

                  return significantTokenTypePart;
            }
      }, {
            key: 'getSignificantTokenType',
            value: function getSignificantTokenType() {
                  var regExp = /^\[([^\]]+)\]$/,
                      childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      significantTokenType = secondMatch; ///

                  return significantTokenType;
            }
      }], [{
            key: 'fromNodesAndProductionName',
            value: function fromNodesAndProductionName(nodes, productionName) {
                  return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, SignificantTokenTypeNode);
            }
      }]);

      return SignificantTokenTypeNode;
}(NonTerminalNode);

module.exports = SignificantTokenTypeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZU5vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJyZWdFeHAiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSx3Qjs7Ozs7Ozs7Ozs7eUNBQ1NDLEssRUFBT0MsWSxFQUFjO0FBQ2hDLHNCQUFNQyx1QkFBdUIsS0FBS0MsdUJBQUwsRUFBN0I7QUFBQSxzQkFDTUMsMkJBQTJCSixNQUFNLDBCQUFOLENBRGpDO0FBQUEsc0JBRU1LLDJCQUEyQixJQUFJRCx3QkFBSixDQUE2QkYsb0JBQTdCLEVBQW1ERCxZQUFuRCxDQUZqQzs7QUFJQSx5QkFBT0ksd0JBQVA7QUFDRDs7O3NEQUV5QjtBQUN4QixzQkFBTUMsU0FBUyxnQkFBZjtBQUFBLHNCQUNNQyxhQUFhLEtBQUtDLGFBQUwsRUFEbkI7QUFBQSxzQkFFTUMsaUJBQWlCYixVQUFVYyxLQUFWLENBQWdCSCxVQUFoQixDQUZ2QjtBQUFBLHNCQUdNSSxlQUFlRixjQUhyQjtBQUFBLHNCQUdzQztBQUNoQ0csd0NBQXNCRCxhQUFhRSxVQUFiLEVBSjVCO0FBQUEsc0JBS01DLFVBQVVGLG9CQUFvQkcsS0FBcEIsQ0FBMEJULE1BQTFCLENBTGhCO0FBQUEsc0JBTU1VLGNBQWNwQixVQUFVcUIsTUFBVixDQUFpQkgsT0FBakIsQ0FOcEI7QUFBQSxzQkFPTVosdUJBQXVCYyxXQVA3QixDQUR3QixDQVFrQjs7QUFFMUMseUJBQU9kLG9CQUFQO0FBQ0Q7Ozt1REFFaUNnQixLLEVBQU9DLGMsRUFBZ0I7QUFBRSx5QkFBT3JCLGdCQUFnQnNCLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFcEIsd0JBQWxFLENBQVA7QUFBcUc7Ozs7RUF0QjNIRCxlOztBQXlCdkN1QixPQUFPQyxPQUFQLEdBQWlCdkIsd0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuVHlwZSgpLFxuICAgICAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IFBhcnRzWydTaWduaWZpY2FudFRva2VuVHlwZVBhcnQnXSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFxbKFteXFxdXSspXFxdJC8sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IGFycmF5VXRpbC5zZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBTaWduaWZpY2FudFRva2VuVHlwZU5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlO1xuIl19