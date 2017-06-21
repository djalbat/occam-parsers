'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var TerminalSymbolNode = function (_NonTerminalNode) {
      _inherits(TerminalSymbolNode, _NonTerminalNode);

      function TerminalSymbolNode() {
            _classCallCheck(this, TerminalSymbolNode);

            return _possibleConstructorReturn(this, (TerminalSymbolNode.__proto__ || Object.getPrototypeOf(TerminalSymbolNode)).apply(this, arguments));
      }

      _createClass(TerminalSymbolNode, [{
            key: 'generatePart',
            value: function generatePart(Parts, noWhitespace) {
                  var content = this.getContent(),
                      TerminalSymbolPart = Parts['TerminalSymbolPart'],
                      terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

                  return terminalSymbolPart;
            }
      }, {
            key: 'getContent',
            value: function getContent() {
                  var regExp = /^"([^"]+)"$/,
                      childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      content = secondMatch; ///

                  return content;
            }
      }], [{
            key: 'fromNodesAndProductionName',
            value: function fromNodesAndProductionName(nodes, productionName) {
                  return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, TerminalSymbolNode);
            }
      }]);

      return TerminalSymbolNode;
}(NonTerminalNode);

module.exports = TerminalSymbolNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Rlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbE5vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiVGVybWluYWxTeW1ib2xQYXJ0IiwidGVybWluYWxTeW1ib2xQYXJ0IiwicmVnRXhwIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxrQjs7Ozs7Ozs7Ozs7eUNBQ1NDLEssRUFBT0MsWSxFQUFjO0FBQ2hDLHNCQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxzQkFDTUMscUJBQXFCSixNQUFNLG9CQUFOLENBRDNCO0FBQUEsc0JBRU1LLHFCQUFxQixJQUFJRCxrQkFBSixDQUF1QkYsT0FBdkIsRUFBZ0NELFlBQWhDLENBRjNCOztBQUlBLHlCQUFPSSxrQkFBUDtBQUNEOzs7eUNBRVk7QUFDWCxzQkFBTUMsU0FBUyxhQUFmO0FBQUEsc0JBQ01DLGFBQWEsS0FBS0MsYUFBTCxFQURuQjtBQUFBLHNCQUVNQyxpQkFBaUJiLFVBQVVjLEtBQVYsQ0FBZ0JILFVBQWhCLENBRnZCO0FBQUEsc0JBR01JLGVBQWVGLGNBSHJCO0FBQUEsc0JBR3NDO0FBQ2hDRyx3Q0FBc0JELGFBQWFSLFVBQWIsRUFKNUI7QUFBQSxzQkFLTVUsVUFBVUQsb0JBQW9CRSxLQUFwQixDQUEwQlIsTUFBMUIsQ0FMaEI7QUFBQSxzQkFNTVMsY0FBY25CLFVBQVVvQixNQUFWLENBQWlCSCxPQUFqQixDQU5wQjtBQUFBLHNCQU9NWCxVQUFVYSxXQVBoQixDQURXLENBUWtCOztBQUU3Qix5QkFBT2IsT0FBUDtBQUNEOzs7dURBRWlDZSxLLEVBQU9DLGMsRUFBZ0I7QUFBRSx5QkFBT3BCLGdCQUFnQnFCLDBCQUFoQixDQUEyQ0YsS0FBM0MsRUFBa0RDLGNBQWxELEVBQWtFbkIsa0JBQWxFLENBQVA7QUFBK0Y7Ozs7RUF0QjNIRCxlOztBQXlCakNzQixPQUFPQyxPQUFQLEdBQWlCdEIsa0JBQWpCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSBQYXJ0c1snVGVybWluYWxTeW1ib2xQYXJ0J10sXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmVnRXhwID0gL15cIihbXlwiXSspXCIkLyxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBUZXJtaW5hbFN5bWJvbE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xOb2RlO1xuIl19