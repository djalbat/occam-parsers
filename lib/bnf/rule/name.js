'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    NameNode = require('../node/name'),
    ruleNames = require('../ruleNames'),
    NameDefinition = require('../definition/name');

var NameRuleName = ruleNames.NameRuleName;

var NameRule = function (_Rule) {
  _inherits(NameRule, _Rule);

  function NameRule() {
    _classCallCheck(this, NameRule);

    var nameDefinition = new NameDefinition(),
        name = NameRuleName,
        definitions = [nameDefinition],
        Node = NameNode;

    return _possibleConstructorReturn(this, (NameRule.__proto__ || Object.getPrototypeOf(NameRule)).call(this, name, definitions, Node));
  }

  return NameRule;
}(Rule);

module.exports = NameRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9uYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTmFtZU5vZGUiLCJydWxlTmFtZXMiLCJOYW1lRGVmaW5pdGlvbiIsIk5hbWVSdWxlTmFtZSIsIk5hbWVSdWxlIiwibmFtZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxXQUFXRCxRQUFRLGNBQVIsQ0FEakI7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGNBQVIsQ0FGbEI7QUFBQSxJQUdNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FIdkI7O0lBS1FJLFksR0FBaUJGLFMsQ0FBakJFLFk7O0lBRUZDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osUUFBTUMsaUJBQWlCLElBQUlILGNBQUosRUFBdkI7QUFBQSxRQUNNSSxPQUFPSCxZQURiO0FBQUEsUUFFTUksY0FBYyxDQUNaRixjQURZLENBRnBCO0FBQUEsUUFLTUcsT0FBT1IsUUFMYjs7QUFEWSwrR0FRTk0sSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVm9CVixJOztBQWF2QlcsT0FBT0MsT0FBUCxHQUFpQk4sUUFBakIiLCJmaWxlIjoibmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIE5hbWVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9uYW1lJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIE5hbWVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9uYW1lJyk7XG5cbmNvbnN0IHsgTmFtZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIE5hbWVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVEZWZpbml0aW9uID0gbmV3IE5hbWVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IE5hbWVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG5hbWVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTmFtZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYW1lUnVsZTtcbiJdfQ==