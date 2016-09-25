'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

var ProductionNameParseTree = function (_ParseTree) {
    _inherits(ProductionNameParseTree, _ParseTree);

    function ProductionNameParseTree() {
        _classCallCheck(this, ProductionNameParseTree);

        return _possibleConstructorReturn(this, (ProductionNameParseTree.__proto__ || Object.getPrototypeOf(ProductionNameParseTree)).apply(this, arguments));
    }

    _createClass(ProductionNameParseTree, null, [{
        key: 'fromProductionName',
        value: function fromProductionName(productionName) {
            var str = productionName,
                ///
            productionNameParseTree = ParseTree.fromString(str),
                productionNameParseTreeWidth = productionNameParseTree.getWidth(),
                verticalBranchParseTree = VerticalBranchParseTree.fromWidth(productionNameParseTreeWidth);

            productionNameParseTree.appendToTop(verticalBranchParseTree);
            productionNameParseTree.appendToBottom(verticalBranchParseTree);

            return productionNameParseTree;
        }
    }]);

    return ProductionNameParseTree;
}(ParseTree);

module.exports = ProductionNameParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvcHJvZHVjdGlvbk5hbWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUiLCJwcm9kdWN0aW9uTmFtZSIsInN0ciIsInByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsInByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiYXBwZW5kVG9Ub3AiLCJhcHBlbmRUb0JvdHRvbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxjQUFSLENBQWhCO0FBQUEsSUFDSUMsMEJBQTBCRCxRQUFRLDZCQUFSLENBRDlCOztJQUdNRSx1Qjs7Ozs7Ozs7Ozs7MkNBQ3NCQyxjLEVBQWdCO0FBQ3hDLGdCQUFJQyxNQUFNRCxjQUFWO0FBQUEsZ0JBQTBCO0FBQ3RCRSxzQ0FBMEJOLFVBQVVPLFVBQVYsQ0FBcUJGLEdBQXJCLENBRDlCO0FBQUEsZ0JBRUlHLCtCQUErQkYsd0JBQXdCRyxRQUF4QixFQUZuQztBQUFBLGdCQUdJQywwQkFBMEJSLHdCQUF3QlMsU0FBeEIsQ0FBa0NILDRCQUFsQyxDQUg5Qjs7QUFLQUYsb0NBQXdCTSxXQUF4QixDQUFvQ0YsdUJBQXBDO0FBQ0FKLG9DQUF3Qk8sY0FBeEIsQ0FBdUNILHVCQUF2Qzs7QUFFQSxtQkFBT0osdUJBQVA7QUFDRDs7OztFQVhtQ04sUzs7QUFjdENjLE9BQU9DLE9BQVAsR0FBaUJaLHVCQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpLFxuICAgIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBzdHIgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVXaWR0aCA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlV2lkdGgpO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFwcGVuZFRvQm90dG9tKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuIl19