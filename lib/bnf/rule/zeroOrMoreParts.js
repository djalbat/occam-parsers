'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ZeroOrMorePartsNode = require('../node/zeroOrMoreParts'),
    ZeroOrMorePartsDefinition = require('../definition/zeroOrMoreParts');

var ZeroOrMorePartsRule = function (_Rule) {
  _inherits(ZeroOrMorePartsRule, _Rule);

  function ZeroOrMorePartsRule() {
    _classCallCheck(this, ZeroOrMorePartsRule);

    var zeroOrMorePartsDefinition = new ZeroOrMorePartsDefinition(),
        name = 'zeroOrMoreParts',
        zeroOrMoreParts = [zeroOrMorePartsDefinition],
        Node = ZeroOrMorePartsNode;

    return _possibleConstructorReturn(this, (ZeroOrMorePartsRule.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsRule)).call(this, name, zeroOrMoreParts, Node));
  }

  return ZeroOrMorePartsRule;
}(Rule);

module.exports = ZeroOrMorePartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUGFydHNOb2RlIiwiWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiIsIlplcm9Pck1vcmVQYXJ0c1J1bGUiLCJ6ZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uIiwibmFtZSIsInplcm9Pck1vcmVQYXJ0cyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLHNCQUFzQkQsUUFBUSx5QkFBUixDQUQ1QjtBQUFBLElBRU1FLDRCQUE0QkYsUUFBUSwrQkFBUixDQUZsQzs7SUFJTUcsbUI7OztBQUNKLGlDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCLElBQUlGLHlCQUFKLEVBQWxDO0FBQUEsUUFDTUcsT0FBTyxpQkFEYjtBQUFBLFFBRU1DLGtCQUFrQixDQUNoQkYseUJBRGdCLENBRnhCO0FBQUEsUUFLTUcsT0FBT04sbUJBTGI7O0FBRFkscUlBUU5JLElBUk0sRUFRQUMsZUFSQSxFQVFpQkMsSUFSakI7QUFTYjs7O0VBVitCUixJOztBQWFsQ1MsT0FBT0MsT0FBUCxHQUFpQk4sbUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgemVyb09yTW9yZVBhcnRzRGVmaW5pdGlvbiA9IG5ldyBaZXJvT3JNb3JlUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICd6ZXJvT3JNb3JlUGFydHMnLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBaZXJvT3JNb3JlUGFydHNOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgemVyb09yTW9yZVBhcnRzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUnVsZTtcbiJdfQ==