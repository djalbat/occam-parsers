'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view');

var BNFExampleView = function (_ExampleView) {
  _inherits(BNFExampleView, _ExampleView);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: 'getTitle',

    // getTokens() {
    //   const entries = this.getEntries(),
    //         content = this.getContent(),
    //         bnfParser = BNFParser.fromEntries(entries),
    //         tokens = bnfParser.tokenise(content);
    //
    //   return tokens;
    // }

    value: function getTitle() {
      var title = 'BNF parser example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(BNFExampleView.prototype.__proto__ || Object.getPrototypeOf(BNFExampleView.prototype), 'initialise', this).call(this);

      // const { entries } = BNFParser;
      //
      // this.setEntries(entries);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(BNFExampleView, properties);
    }
  }]);

  return BNFExampleView;
}(ExampleView);

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbIkJORlBhcnNlciIsInJlcXVpcmUiLCJFeGFtcGxlVmlldyIsIkJORkV4YW1wbGVWaWV3IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxvQkFBUixDQURwQjs7SUFHTUUsYzs7Ozs7Ozs7Ozs7O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7K0JBRVc7QUFDVCxVQUFNQyxRQUFRLG9CQUFkOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O2lDQUVZO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9ILFlBQVlJLGNBQVosQ0FBMkJILGNBQTNCLEVBQTJDRSxVQUEzQyxDQUFQO0FBQStEOzs7O0VBeEJ4RUgsVzs7QUEyQjdCSyxPQUFPQyxNQUFQLENBQWNMLGNBQWQsRUFBOEI7QUFDNUJNLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRFMsQ0FBOUI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJULGNBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3Jyk7XG5cbmNsYXNzIEJORkV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICAvLyBnZXRUb2tlbnMoKSB7XG4gIC8vICAgY29uc3QgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAvLyAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgLy8gICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gIC8vICAgICAgICAgdG9rZW5zID0gYm5mUGFyc2VyLnRva2VuaXNlKGNvbnRlbnQpO1xuICAvL1xuICAvLyAgIHJldHVybiB0b2tlbnM7XG4gIC8vIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9ICdCTkYgcGFyc2VyIGV4YW1wbGUnO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICAvLyBjb25zdCB7IGVudHJpZXMgfSA9IEJORlBhcnNlcjtcbiAgICAvL1xuICAgIC8vIHRoaXMuc2V0RW50cmllcyhlbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhCTkZFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJORkV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlVmlldztcbiJdfQ==