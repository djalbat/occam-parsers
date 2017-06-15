'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionNameNode = function (_NonTerminalNode) {
      _inherits(ProductionNameNode, _NonTerminalNode);

      function ProductionNameNode() {
            _classCallCheck(this, ProductionNameNode);

            return _possibleConstructorReturn(this, (ProductionNameNode.__proto__ || Object.getPrototypeOf(ProductionNameNode)).apply(this, arguments));
      }

      _createClass(ProductionNameNode, [{
            key: 'generatePart',
            value: function generatePart(Parts, noWhitespace) {
                  var productionName = this.getProductionName(),
                      ProductionNamePart = Parts['ProductionNamePart'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wcm9kdWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbk5hbWVOb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwicHJvZHVjdGlvbk5hbWVQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJub2RlcyIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxrQjs7Ozs7Ozs7Ozs7eUNBQ1NDLEssRUFBT0MsWSxFQUFjO0FBQ2hDLHNCQUFNQyxpQkFBaUIsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxzQkFDTUMscUJBQXFCSixNQUFNLG9CQUFOLENBRDNCO0FBQUEsc0JBRU1LLHFCQUFxQixJQUFJRCxrQkFBSixDQUF1QkYsY0FBdkIsRUFBdUNELFlBQXZDLENBRjNCOztBQUlBLHlCQUFPSSxrQkFBUDtBQUNEOzs7Z0RBRW1CO0FBQ2xCLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCWixVQUFVYSxLQUFWLENBQWdCSCxVQUFoQixDQUR2QjtBQUFBLHNCQUVNSSxlQUFlRixjQUZyQjtBQUFBLHNCQUVzQztBQUNoQ0csd0NBQXNCRCxhQUFhRSxVQUFiLEVBSDVCO0FBQUEsc0JBSU1WLGlCQUFpQlMsbUJBSnZCLENBRGtCLENBSzBCOztBQUU1Qyx5QkFBT1QsY0FBUDtBQUNEOzs7dURBRWlDVyxLLEVBQU9YLGMsRUFBZ0I7QUFBRSx5QkFBT0osZ0JBQWdCZ0IsMEJBQWhCLENBQTJDRCxLQUEzQyxFQUFrRFgsY0FBbEQsRUFBa0VILGtCQUFsRSxDQUFQO0FBQStGOzs7O0VBbkIzSEQsZTs7QUFzQmpDaUIsT0FBT0MsT0FBUCxHQUFpQmpCLGtCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSBQYXJ0c1snUHJvZHVjdGlvbk5hbWVQYXJ0J10sXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgUHJvZHVjdGlvbk5hbWVOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lTm9kZTtcbiJdfQ==