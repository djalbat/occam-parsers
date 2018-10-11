'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var BNFParser = require('../../bnf/parser'),
    ExampleView = require('../../example/view');

var BNFLexer = lexers.BNFLexer;

var BNFExampleView = function (_ExampleView) {
  _inherits(BNFExampleView, _ExampleView);

  function BNFExampleView() {
    _classCallCheck(this, BNFExampleView);

    return _possibleConstructorReturn(this, (BNFExampleView.__proto__ || Object.getPrototypeOf(BNFExampleView)).apply(this, arguments));
  }

  _createClass(BNFExampleView, [{
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = null;

      var bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          content = this.getContent(),
          tokens = bnfLexer.tokenise(content),
          node = bnfParser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = 'BNF parser example';

      return title;
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      _get(BNFExampleView.prototype.__proto__ || Object.getPrototypeOf(BNFExampleView.prototype), 'initialise', this).call(this);

      var bnf = BNFParser.bnf,
          entries = BNFLexer.entries,
          content = bnf,
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalEntries(lexicalEntries);

      this.keyUpHandler();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2JuZi92aWV3LmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJFeGFtcGxlVmlldyIsIkJORkxleGVyIiwiQk5GRXhhbXBsZVZpZXciLCJwYXJzZVRyZWUiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwidGl0bGUiLCJibmYiLCJlbnRyaWVzIiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJrZXlVcEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSxvQkFBUixDQURwQjs7SUFHUUcsUSxHQUFhSixNLENBQWJJLFE7O0lBRUZDLGM7Ozs7Ozs7Ozs7O21DQUNXO0FBQ2IsVUFBSUMsWUFBWSxJQUFoQjs7QUFFQSxVQUFNQyxXQUFXSCxTQUFTSSxXQUFULEVBQWpCO0FBQUEsVUFDTUMsWUFBWVAsVUFBVU0sV0FBVixFQURsQjtBQUFBLFVBRU1FLFVBQVUsS0FBS0MsVUFBTCxFQUZoQjtBQUFBLFVBR01DLFNBQVNMLFNBQVNNLFFBQVQsQ0FBa0JILE9BQWxCLENBSGY7QUFBQSxVQUlNSSxPQUFPTCxVQUFVTSxLQUFWLENBQWdCSCxNQUFoQixDQUpiOztBQU1BLFVBQUlFLFNBQVMsSUFBYixFQUFtQjtBQUNqQlIsb0JBQVlRLEtBQUtFLFdBQUwsQ0FBaUJKLE1BQWpCLENBQVo7QUFDRDs7QUFFRCxhQUFPTixTQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLFFBQVEsb0JBQWQ7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7aUNBRVk7QUFDWDs7QUFFTSxVQUFFQyxHQUFGLEdBQVVoQixTQUFWLENBQUVnQixHQUFGO0FBQUEsVUFDRUMsT0FERixHQUNjZixRQURkLENBQ0VlLE9BREY7QUFBQSxVQUVBVCxPQUZBLEdBRVVRLEdBRlY7QUFBQSxVQUdBRSxjQUhBLEdBR2lCRCxPQUhqQixDQUhLLENBTXFCOztBQUVoQyxXQUFLRSxNQUFMLENBQVlILEdBQVo7QUFDQSxXQUFLSSxVQUFMLENBQWdCWixPQUFoQjtBQUNBLFdBQUthLGlCQUFMLENBQXVCSCxjQUF2Qjs7QUFFQSxXQUFLSSxZQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU90QixZQUFZdUIsY0FBWixDQUEyQnJCLGNBQTNCLEVBQTJDb0IsVUFBM0MsQ0FBUDtBQUErRDs7OztFQXRDeEV0QixXOztBQXlDN0J3QixPQUFPQyxNQUFQLENBQWN2QixjQUFkLEVBQThCO0FBQzVCd0IscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEUyxDQUE5Qjs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQjNCLGNBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi8uLi9ibmYvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlVmlldyA9IHJlcXVpcmUoJy4uLy4uL2V4YW1wbGUvdmlldycpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJORkV4YW1wbGVWaWV3IGV4dGVuZHMgRXhhbXBsZVZpZXcge1xuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gJ0JORiBwYXJzZXIgZXhhbXBsZSc7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoKTtcblxuICAgIGNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBCTkZMZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gYm5mLCAgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhCTkZFeGFtcGxlVmlldywgcHJvcGVydGllcyk7fVxufVxuXG5PYmplY3QuYXNzaWduKEJORkV4YW1wbGVWaWV3LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlVmlldztcbiJdfQ==