'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    ProductionNamePart = require('../part/productionName'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionNameNode = function (_NonTerminalNode) {
      _inherits(ProductionNameNode, _NonTerminalNode);

      function ProductionNameNode() {
            _classCallCheck(this, ProductionNameNode);

            return _possibleConstructorReturn(this, (ProductionNameNode.__proto__ || Object.getPrototypeOf(ProductionNameNode)).apply(this, arguments));
      }

      _createClass(ProductionNameNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var productionName = this.getProductionName(),
                      productionNamePart = new ProductionNamePart(productionName, noWhitespace);

                  return productionNamePart;
            }
      }, {
            key: 'getProductionName',
            value: function getProductionName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      productionName = terminalNodeContent; ///

                  return productionName;
            }
      }], [{
            key: 'fromNodesAndProductionName',
            value: function fromNodesAndProductionName(nodes, productionName) {
                  return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ProductionNameNode);
            }
      }]);

      return ProductionNameNode;
}(NonTerminalNode);

module.exports = ProductionNameNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3Byb2R1Y3Rpb25OYW1lLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJOb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uTmFtZU5vZGUiLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJub2RlcyIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxrQjs7Ozs7Ozs7Ozs7eUNBQ1NDLFksRUFBYztBQUN6QixzQkFBTUMsaUJBQWlCLEtBQUtDLGlCQUFMLEVBQXZCO0FBQUEsc0JBQ01DLHFCQUFxQixJQUFJTixrQkFBSixDQUF1QkksY0FBdkIsRUFBdUNELFlBQXZDLENBRDNCOztBQUdBLHlCQUFPRyxrQkFBUDtBQUNEOzs7Z0RBRW1CO0FBQ2xCLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCWCxVQUFVWSxLQUFWLENBQWdCSCxVQUFoQixDQUR2QjtBQUFBLHNCQUVNSSxlQUFlRixjQUZyQjtBQUFBLHNCQUVzQztBQUNoQ0csd0NBQXNCRCxhQUFhRSxVQUFiLEVBSDVCO0FBQUEsc0JBSU1ULGlCQUFpQlEsbUJBSnZCLENBRGtCLENBSzBCOztBQUU1Qyx5QkFBT1IsY0FBUDtBQUNEOzs7dURBRWlDVSxLLEVBQU9WLGMsRUFBZ0I7QUFBRSx5QkFBT0gsZ0JBQWdCYywwQkFBaEIsQ0FBMkNELEtBQTNDLEVBQWtEVixjQUFsRCxFQUFrRUYsa0JBQWxFLENBQVA7QUFBK0Y7Ozs7RUFsQjNIRCxlOztBQXFCakNlLE9BQU9DLE9BQVAsR0FBaUJmLGtCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFByb2R1Y3Rpb25OYW1lTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZU5vZGU7XG4iXX0=