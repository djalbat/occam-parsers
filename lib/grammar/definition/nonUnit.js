'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../extendedBNF/definition'),
    UnitDefinition = require('../definition/unit');

var NonUnitDefinition = function (_Definition) {
  _inherits(NonUnitDefinition, _Definition);

  function NonUnitDefinition() {
    _classCallCheck(this, NonUnitDefinition);

    return _possibleConstructorReturn(this, (NonUnitDefinition.__proto__ || Object.getPrototypeOf(NonUnitDefinition)).apply(this, arguments));
  }

  _createClass(NonUnitDefinition, null, [{
    key: 'fromDefinition',
    value: function fromDefinition(definition) {
      var nonUnitDefinition = null;

      var unitDefinition = UnitDefinition.fromDefinition(definition);

      if (unitDefinition === null) {
        var parts = definition.getParts();

        nonUnitDefinition = new NonUnitDefinition(parts);
      }

      return nonUnitDefinition;
    }
  }]);

  return NonUnitDefinition;
}(Definition);

module.exports = NonUnitDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vbm9uVW5pdC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlVuaXREZWZpbml0aW9uIiwiTm9uVW5pdERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9uVW5pdERlZmluaXRpb24iLCJ1bml0RGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSw4QkFBUixDQUFuQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHTUUsaUI7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQUlDLG9CQUFvQixJQUF4Qjs7QUFFQSxVQUFNQyxpQkFBaUJKLGVBQWVLLGNBQWYsQ0FBOEJILFVBQTlCLENBQXZCOztBQUVBLFVBQUlFLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQixZQUFNRSxRQUFRSixXQUFXSyxRQUFYLEVBQWQ7O0FBRUFKLDRCQUFvQixJQUFJRixpQkFBSixDQUFzQkssS0FBdEIsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPSCxpQkFBUDtBQUNEOzs7O0VBYjZCTCxVOztBQWdCaENVLE9BQU9DLE9BQVAsR0FBaUJSLGlCQUFqQiIsImZpbGUiOiJub25Vbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvZGVmaW5pdGlvbicpLFxuICAgICAgVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3VuaXQnKTtcblxuY2xhc3MgTm9uVW5pdERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgbm9uVW5pdERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdW5pdERlZmluaXRpb24gPSBVbml0RGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICBcbiAgICBpZiAodW5pdERlZmluaXRpb24gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuICAgICAgXG4gICAgICBub25Vbml0RGVmaW5pdGlvbiA9IG5ldyBOb25Vbml0RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblVuaXREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVW5pdERlZmluaXRpb247XG4iXX0=