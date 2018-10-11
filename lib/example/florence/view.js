'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleView = require('../../example/view'),
    FlorenceParser = require('../../florence/parser');

var FlorenceExampleView = function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, (FlorenceExampleView.__proto__ || Object.getPrototypeOf(FlorenceExampleView)).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: 'getTitle',

    // getTokens() {
    //   const entries = this.getEntries(),
    //         content = this.getContent(),
    //         florenceParser = FlorenceParser.fromEntries(entries),
    //         tokens = florenceParser.tokenise(content);
    //
    //   return tokens;
    // }

    value: function getTitle() {
      var title = 'Florence parser example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(FlorenceExampleView.prototype.__proto__ || Object.getPrototypeOf(FlorenceExampleView.prototype), 'initialise', this).call(this);

      // const { entries } = FlorenceParser;
      //
      // this.setEntries(entries);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(FlorenceExampleView, properties);
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsiRXhhbXBsZVZpZXciLCJyZXF1aXJlIiwiRmxvcmVuY2VQYXJzZXIiLCJGbG9yZW5jZUV4YW1wbGVWaWV3IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLG9CQUFSLENBQXBCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCOztJQUdNRSxtQjs7Ozs7Ozs7Ozs7O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7K0JBRVc7QUFDVCxVQUFNQyxRQUFRLHlCQUFkOztBQUVBLGFBQU9BLEtBQVA7QUFDRDs7O2lDQUVZO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9MLFlBQVlNLGNBQVosQ0FBMkJILG1CQUEzQixFQUFnREUsVUFBaEQsQ0FBUDtBQUFvRTs7OztFQXhCeEVMLFc7O0FBMkJsQ08sT0FBT0MsTUFBUCxDQUFjTCxtQkFBZCxFQUFtQztBQUNqQ00scUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEYyxDQUFuQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQlQsbUJBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV4YW1wbGVWaWV3ID0gcmVxdWlyZSgnLi4vLi4vZXhhbXBsZS92aWV3JyksXG4gICAgICBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL2Zsb3JlbmNlL3BhcnNlcicpO1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICAvLyBnZXRUb2tlbnMoKSB7XG4gIC8vICAgY29uc3QgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllcygpLFxuICAvLyAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgLy8gICAgICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAvLyAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlUGFyc2VyLnRva2VuaXNlKGNvbnRlbnQpO1xuICAvL1xuICAvLyAgIHJldHVybiB0b2tlbnM7XG4gIC8vIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9ICdGbG9yZW5jZSBwYXJzZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoKTtcblxuICAgIC8vIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VQYXJzZXI7XG4gICAgLy9cbiAgICAvLyB0aGlzLnNldEVudHJpZXMoZW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRXhhbXBsZVZpZXcuZnJvbVByb3BlcnRpZXMoRmxvcmVuY2VFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlRXhhbXBsZVZpZXcsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdmbG9yZW5jZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlVmlldztcbiJdfQ==