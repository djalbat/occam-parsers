'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var HideNullifiedNodesCheckbox = function (_Element) {
  _inherits(HideNullifiedNodesCheckbox, _Element);

  function HideNullifiedNodesCheckbox(selector, changeHandler) {
    _classCallCheck(this, HideNullifiedNodesCheckbox);

    var _this = _possibleConstructorReturn(this, (HideNullifiedNodesCheckbox.__proto__ || Object.getPrototypeOf(HideNullifiedNodesCheckbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(HideNullifiedNodesCheckbox, [{
    key: 'onChange',
    value: function onChange(changeHandler, object) {
      var intermediateChangeHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, object, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler, object) {
      this.off('click', changeHandler, object); ///
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      var domElement = this.getDOMElement(),
          checked = domElement.checked;

      return checked;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var isHideNullifiedNodesCheckboxChecked = this.isChecked.bind(this); ///

      return {
        isHideNullifiedNodesCheckboxChecked: isHideNullifiedNodesCheckboxChecked
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange,
          hideNullifiedNodesCheckbox = Element.fromProperties(HideNullifiedNodesCheckbox, properties, changeHandler);


      return hideNullifiedNodesCheckbox;
    }
  }]);

  return HideNullifiedNodesCheckbox;
}(Element);

Object.assign(HideNullifiedNodesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'hide-nullified-nodes'
  },
  ignoredProperties: ['onChange']
});

module.exports = HideNullifiedNodesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlL2NvbW1vbi9jaGVja2JveC9oaWRlTnVsbGlmaWVkTm9kZXMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3giLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsIm9iamVjdCIsImludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciIsIm9uIiwib2ZmIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjaGVja2VkIiwiaXNIaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc0NoZWNrZWQiLCJiaW5kIiwicHJvcGVydGllcyIsImhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwiY2hlY2tib3giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQywwQjs7O0FBQ0osc0NBQVlDLFFBQVosRUFBc0JDLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsd0pBQzdCRCxRQUQ2Qjs7QUFHbkMsUUFBSUMsa0JBQWtCQyxTQUF0QixFQUFpQztBQUMvQixZQUFLQyxRQUFMLENBQWNGLGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7Ozs2QkFFUUEsYSxFQUFlRyxNLEVBQXNFO0FBQUEsVUFBOURDLHlCQUE4RCx1RUFBbENDLGdDQUFrQzs7QUFDNUYsV0FBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUJOLGFBQWpCLEVBQWdDRyxNQUFoQyxFQUF3Q0MseUJBQXhDLEVBRDRGLENBQ3ZCO0FBQ3RFOzs7OEJBRVNKLGEsRUFBZUcsTSxFQUFRO0FBQy9CLFdBQUtJLEdBQUwsQ0FBUyxPQUFULEVBQWtCUCxhQUFsQixFQUFpQ0csTUFBakMsRUFEK0IsQ0FDWTtBQUM1Qzs7O2dDQUVXO0FBQ1YsVUFBTUssYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsVUFBVUYsV0FBV0UsT0FEM0I7O0FBR0EsYUFBT0EsT0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxzQ0FBc0MsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQTVDLENBRGMsQ0FDeUQ7O0FBRXZFLGFBQVE7QUFDTkY7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJHLFUsRUFBWTtBQUMxQixVQUFFWixRQUFGLEdBQWVZLFVBQWYsQ0FBRVosUUFBRjtBQUFBLFVBQ0FGLGFBREEsR0FDZ0JFLFFBRGhCO0FBQUEsVUFFQWEsMEJBRkEsR0FFNkJsQixRQUFRbUIsY0FBUixDQUF1QmxCLDBCQUF2QixFQUFtRGdCLFVBQW5ELEVBQStEZCxhQUEvRCxDQUY3Qjs7O0FBSU4sYUFBT2UsMEJBQVA7QUFDRDs7OztFQXRDc0NsQixPOztBQXdDekNvQixPQUFPQyxNQUFQLENBQWNwQiwwQkFBZCxFQUEwQztBQUN4Q3FCLFdBQVMsT0FEK0I7QUFFeENDLHFCQUFtQjtBQUNqQkMsVUFBTSxVQURXO0FBRWpCQyxlQUFXO0FBRk0sR0FGcUI7QUFNeENDLHFCQUFtQixDQUNqQixVQURpQjtBQU5xQixDQUExQzs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQjNCLDBCQUFqQjs7QUFFQSxTQUFTTyxnQ0FBVCxDQUEwQ0wsYUFBMUMsRUFBeUQwQixLQUF6RCxFQUFnRUMsYUFBaEUsRUFBK0U7QUFDN0UsTUFBTUMsV0FBV0QsYUFBakI7QUFBQSxNQUFnQztBQUMxQmpCLFlBQVVrQixTQUFTaEIsU0FBVCxFQURoQjs7QUFHQVosZ0JBQWNVLE9BQWQsRUFBdUJnQixLQUF2QixFQUE4QkMsYUFBOUI7QUFDRCIsImZpbGUiOiJoaWRlTnVsbGlmaWVkTm9kZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgb2JqZWN0KSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlciwgb2JqZWN0KTsgIC8vL1xuICB9XG5cbiAgaXNDaGVja2VkKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBjaGVja2VkID0gZG9tRWxlbWVudC5jaGVja2VkO1xuXG4gICAgcmV0dXJuIGNoZWNrZWQ7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGlzSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGlzSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3hDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBoaWRlTnVsbGlmaWVkTm9kZXNDaGVja2JveCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoSGlkZU51bGxpZmllZE5vZGVzQ2hlY2tib3gsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIGhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94O1xuICB9fVxuXG5PYmplY3QuYXNzaWduKEhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBjbGFzc05hbWU6ICdoaWRlLW51bGxpZmllZC1ub2RlcydcbiAgfSxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpZGVOdWxsaWZpZWROb2Rlc0NoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgY2hhbmdlSGFuZGxlcihjaGVja2VkLCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG59XG4iXX0=