'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = require('./example');

var mappings = {};

var BasicExample = function (_Example) {
  _inherits(BasicExample, _Example);

  function BasicExample() {
    _classCallCheck(this, BasicExample);

    return _possibleConstructorReturn(this, (BasicExample.__proto__ || Object.getPrototypeOf(BasicExample)).apply(this, arguments));
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      Example.updateParser(mappings);

      Example.specialSymbolsRegExpInput.onChange(function () {
        Example.updateParser(mappings);
        Example.updateParseTree();
      });

      Example.grammarTextArea.onChange(function () {
        Example.updateParser(mappings);
        Example.updateParseTree();
      });

      Example.inputTextArea.onChange(function () {
        Example.updateParseTree();
      });
    }
  }]);

  return BasicExample;
}(Example);

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9iYXNpY0V4YW1wbGUuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInJlcXVpcmUiLCJtYXBwaW5ncyIsIkJhc2ljRXhhbXBsZSIsInVwZGF0ZVBhcnNlciIsInNwZWNpYWxTeW1ib2xzUmVnRXhwSW5wdXQiLCJvbkNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsImdyYW1tYXJUZXh0QXJlYSIsImlucHV0VGV4dEFyZWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsV0FBUixDQUFkOztBQUVBLElBQUlDLFdBQVcsRUFBZjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7MEJBQ1M7QUFDWEgsY0FBUUksWUFBUixDQUFxQkYsUUFBckI7O0FBRUFGLGNBQVFLLHlCQUFSLENBQWtDQyxRQUFsQyxDQUEyQyxZQUFXO0FBQ3BETixnQkFBUUksWUFBUixDQUFxQkYsUUFBckI7QUFDQUYsZ0JBQVFPLGVBQVI7QUFDRCxPQUhEOztBQUtBUCxjQUFRUSxlQUFSLENBQXdCRixRQUF4QixDQUFpQyxZQUFXO0FBQzFDTixnQkFBUUksWUFBUixDQUFxQkYsUUFBckI7QUFDQUYsZ0JBQVFPLGVBQVI7QUFDRCxPQUhEOztBQUtBUCxjQUFRUyxhQUFSLENBQXNCSCxRQUF0QixDQUErQixZQUFXO0FBQ3hDTixnQkFBUU8sZUFBUjtBQUNELE9BRkQ7QUFHRDs7OztFQWpCd0JQLE87O0FBb0IzQlUsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakIiLCJmaWxlIjoiYmFzaWNFeGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZScpO1xuXG52YXIgbWFwcGluZ3MgPSB7fTtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuXG4gICAgRXhhbXBsZS5zcGVjaWFsU3ltYm9sc1JlZ0V4cElucHV0Lm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuZ3JhbW1hclRleHRBcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZXIobWFwcGluZ3MpO1xuICAgICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoKTtcbiAgICB9KTtcblxuICAgIEV4YW1wbGUuaW5wdXRUZXh0QXJlYS5vbkNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG4iXX0=