'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

var ZeroOrMorePartsProduction = function (_Production) {
  _inherits(ZeroOrMorePartsProduction, _Production);

  function ZeroOrMorePartsProduction() {
    _classCallCheck(this, ZeroOrMorePartsProduction);

    var zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
        name = 'zeroOrMoreParts',
        zeroOrMoreParts = [zeroOrMorePartsDefinition],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsProduction.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsProduction)).call(this, name, zeroOrMoreParts, Node));
  }

  return ZeroOrMorePartsProduction;
}(Production);

module.exports = ZeroOrMorePartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiWmVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbiIsInplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24iLCJuYW1lIiwiemVyb09yTW9yZVBhcnRzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLDRCQUE0QkYsUUFBUSwrQkFBUixDQUZsQzs7SUFJTUcseUI7OztBQUNKLHVDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCLElBQUlGLHlCQUFKLEVBQWxDO0FBQUEsUUFDTUcsT0FBTyxpQkFEYjtBQUFBLFFBRU1DLGtCQUFrQixDQUNoQkYseUJBRGdCLENBRnhCO0FBQUEsUUFLTUcsT0FBT04sZUFMYjs7QUFEWSxpSkFRTkksSUFSTSxFQVFBQyxlQVJBLEVBUWlCQyxJQVJqQjtBQVNiOzs7RUFWcUNSLFU7O0FBYXhDUyxPQUFPQyxPQUFQLEdBQWlCTix5QkFBakIiLCJmaWxlIjoiemVyb09yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb24gPSBuZXcgWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnemVyb09yTW9yZVBhcnRzJyxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHMgPSBbXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgemVyb09yTW9yZVBhcnRzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==