'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RuleRule = require('../rule/rule');

var RuleProduction = function (_Production) {
  _inherits(RuleProduction, _Production);

  function RuleProduction() {
    _classCallCheck(this, RuleProduction);

    var name = 'rules',
        ruleRule = new RuleRule(),
        rules = [ruleRule],
        Node = null;

    return _possibleConstructorReturn(this, (RuleProduction.__proto__ || Object.getPrototypeOf(RuleProduction)).call(this, name, rules, Node));
  }

  return RuleProduction;
}(Production);

module.exports = RuleProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9ydWxlLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiUnVsZVJ1bGUiLCJSdWxlUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlUnVsZSIsInJ1bGVzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLFdBQVdELFFBQVEsY0FBUixDQURqQjs7SUFHTUUsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFDWixRQUFNQyxPQUFPLE9BQWI7QUFBQSxRQUNNQyxXQUFXLElBQUlILFFBQUosRUFEakI7QUFBQSxRQUVNSSxRQUFRLENBQ05ELFFBRE0sQ0FGZDtBQUFBLFFBS01FLE9BQU8sSUFMYjs7QUFEWSwySEFRTkgsSUFSTSxFQVFBRSxLQVJBLEVBUU9DLElBUlA7QUFTYjs7O0VBVjBCUCxVOztBQWE3QlEsT0FBT0MsT0FBUCxHQUFpQk4sY0FBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ydWxlJyk7XG5cbmNsYXNzIFJ1bGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBydWxlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IG51bGw7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlUHJvZHVjdGlvbjtcbiJdfQ==