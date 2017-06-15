'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var GroupOfPartsNode = function (_NonTerminalNode) {
  _inherits(GroupOfPartsNode, _NonTerminalNode);

  function GroupOfPartsNode() {
    _classCallCheck(this, GroupOfPartsNode);

    return _possibleConstructorReturn(this, (GroupOfPartsNode.__proto__ || Object.getPrototypeOf(GroupOfPartsNode)).apply(this, arguments));
  }

  _createClass(GroupOfPartsNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      debugger;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, GroupOfPartsNode);
    }
  }]);

  return GroupOfPartsNode;
}(NonTerminalNode);

module.exports = GroupOfPartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkdyb3VwT2ZQYXJ0c05vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7aUNBQ1NDLEssRUFBT0MsWSxFQUFjO0FBQ2hDO0FBQ0Q7OzsrQ0FFaUNDLEssRUFBT0MsYyxFQUFnQjtBQUFFLGFBQU9OLGdCQUFnQk8sMEJBQWhCLENBQTJDRixLQUEzQyxFQUFrREMsY0FBbEQsRUFBa0VKLGdCQUFsRSxDQUFQO0FBQTZGOzs7O0VBTDNIRixlOztBQVEvQlEsT0FBT0MsT0FBUCxHQUFpQlAsZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgR3JvdXBPZlBhcnRzTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIEdyb3VwT2ZQYXJ0c05vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzTm9kZTtcbiJdfQ==