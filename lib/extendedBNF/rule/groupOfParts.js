'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    GroupOfPartsNode = require('../node/groupOfParts'),
    GroupOfPartsDefinition = require('../definition/groupOfParts');

var GroupOfPartsRule = function (_Rule) {
  _inherits(GroupOfPartsRule, _Rule);

  function GroupOfPartsRule() {
    _classCallCheck(this, GroupOfPartsRule);

    var groupOfPartsDefinition = new GroupOfPartsDefinition(),
        name = 'groupOfParts',
        definitions = [groupOfPartsDefinition],
        Node = GroupOfPartsNode;

    return _possibleConstructorReturn(this, (GroupOfPartsRule.__proto__ || Object.getPrototypeOf(GroupOfPartsRule)).call(this, name, definitions, Node));
  }

  return GroupOfPartsRule;
}(Rule);

module.exports = GroupOfPartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL2dyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIkdyb3VwT2ZQYXJ0c05vZGUiLCJHcm91cE9mUGFydHNEZWZpbml0aW9uIiwiR3JvdXBPZlBhcnRzUnVsZSIsImdyb3VwT2ZQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsc0JBQVIsQ0FEekI7QUFBQSxJQUVNRSx5QkFBeUJGLFFBQVEsNEJBQVIsQ0FGL0I7O0lBSU1HLGdCOzs7QUFDSiw4QkFBYztBQUFBOztBQUNaLFFBQU1DLHlCQUF5QixJQUFJRixzQkFBSixFQUEvQjtBQUFBLFFBQ01HLE9BQU8sY0FEYjtBQUFBLFFBRU1DLGNBQWMsQ0FDWkYsc0JBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixnQkFMYjs7QUFEWSwrSEFRTkksSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVjRCUixJOztBQWEvQlMsT0FBT0MsT0FBUCxHQUFpQk4sZ0JBQWpCIiwiZmlsZSI6Imdyb3VwT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZ3JvdXBPZlBhcnRzJyk7XG5cbmNsYXNzIEdyb3VwT2ZQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBHcm91cE9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdncm91cE9mUGFydHMnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZ3JvdXBPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEdyb3VwT2ZQYXJ0c05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNSdWxlO1xuIl19