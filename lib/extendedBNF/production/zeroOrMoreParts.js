'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ZeroOrMorePartsNode = require('../node/zeroOrMoreParts'),
    ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

var ZeroOrMorePartsProduction = function (_Production) {
  _inherits(ZeroOrMorePartsProduction, _Production);

  function ZeroOrMorePartsProduction() {
    _classCallCheck(this, ZeroOrMorePartsProduction);

    var zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
        name = 'zeroOrMoreParts',
        zeroOrMoreParts = [zeroOrMorePartsDefinition],
        Node = ZeroOrMorePartsNode;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsProduction.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsProduction)).call(this, name, zeroOrMoreParts, Node));
  }

  return ZeroOrMorePartsProduction;
}(Production);

module.exports = ZeroOrMorePartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c05vZGUiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiWmVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiIsInplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiemVyb09yTW9yZVBhcnRzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSx5QkFBUixDQUQ1QjtBQUFBLElBRU1FLDRCQUE0QkYsUUFBUSwrQkFBUixDQUZsQzs7SUFJTUcseUI7OztBQUNKLHVDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCLElBQUlGLHlCQUFKLEVBQWxDO0FBQUEsUUFDTUcsT0FBTyxpQkFEYjtBQUFBLFFBRU1DLGtCQUFrQixDQUNoQkYseUJBRGdCLENBRnhCO0FBQUEsUUFLTUcsT0FBT04sbUJBTGI7O0FBRFksaUpBUU5JLElBUk0sRUFRQUMsZUFSQSxFQVFpQkMsSUFSakI7QUFTYjs7O0VBVnFDUixVOztBQWF4Q1MsT0FBT0MsT0FBUCxHQUFpQk4seUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgemVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IG5ldyBaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICd6ZXJvT3JNb3JlUGFydHMnLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBaZXJvT3JNb3JlUGFydHNOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgemVyb09yTW9yZVBhcnRzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==