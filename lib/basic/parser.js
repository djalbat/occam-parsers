'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BasicParser = function (_CommonParser) {
    _inherits(BasicParser, _CommonParser);

    function BasicParser() {
        _classCallCheck(this, BasicParser);

        return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
    }

    _createClass(BasicParser, null, [{
        key: 'fromGrammar',
        value: function fromGrammar(grammar) {
            var lines = BNFLexer.linesFromGrammar(grammar),
                significantTokenTypes = BasicLexer.getSignificantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                basicParser = new BasicParser(productions);

            return basicParser;
        }
    }]);

    return BasicParser;
}(CommonParser);

module.exports = BasicParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiQmFzaWNMZXhlciIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsIkJhc2ljUGFyc2VyIiwiZ3JhbW1hciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImJhc2ljUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsYUFBYUgsT0FBT0csVUFGeEI7O0FBSUEsSUFBSUMsWUFBWUgsUUFBUSxlQUFSLENBQWhCO0FBQUEsSUFDSUksZUFBZUosUUFBUSxrQkFBUixDQURuQjs7SUFHTUssVzs7Ozs7Ozs7Ozs7b0NBQ2VDLE8sRUFBUztBQUMxQixnQkFBSUMsUUFBUU4sU0FBU08sZ0JBQVQsQ0FBMEJGLE9BQTFCLENBQVo7QUFBQSxnQkFDSUcsd0JBQXdCUCxXQUFXUSx3QkFBWCxFQUQ1QjtBQUFBLGdCQUVJQyxXQUFXLEVBRmY7QUFBQSxnQkFHSUMsY0FBY1QsVUFBVVUsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0UsUUFBOUMsQ0FIbEI7QUFBQSxnQkFJSUcsY0FBYyxJQUFJVCxXQUFKLENBQWdCTyxXQUFoQixDQUpsQjs7QUFNQSxtQkFBT0UsV0FBUDtBQUNEOzs7O0VBVHVCVixZOztBQVkxQlcsT0FBT0MsT0FBUCxHQUFpQlgsV0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgQmFzaWNMZXhlciA9IGxleGVycy5CYXNpY0xleGVyO1xuXG52YXIgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEJhc2ljTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iXX0=