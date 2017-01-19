'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var GallinaParser = function (_CommonParser) {
    _inherits(GallinaParser, _CommonParser);

    function GallinaParser() {
        _classCallCheck(this, GallinaParser);

        return _possibleConstructorReturn(this, (GallinaParser.__proto__ || Object.getPrototypeOf(GallinaParser)).apply(this, arguments));
    }

    _createClass(GallinaParser, null, [{
        key: 'fromNothing',
        value: function fromNothing() {
            var lines = BNFLexer.linesFromGrammar(grammar),
                significantTokenTypes = GallinaLexer.significantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                gallinaParser = new GallinaParser(productions);

            return gallinaParser;
        }
    }]);

    return GallinaParser;
}(CommonParser);

module.exports = GallinaParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiQk5GTGV4ZXIiLCJHYWxsaW5hTGV4ZXIiLCJncmFtbWFyIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiR2FsbGluYVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImdhbGxpbmFQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7QUFBQSxJQUVJQyxlQUFlSCxPQUFPRyxZQUYxQjs7QUFJQSxJQUFJQyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lJLFlBQVlKLFFBQVEsZUFBUixDQURoQjtBQUFBLElBRUlLLGVBQWVMLFFBQVEsa0JBQVIsQ0FGbkI7O0lBSU1NLGE7Ozs7Ozs7Ozs7O3NDQUNpQjtBQUNuQixnQkFBSUMsUUFBUU4sU0FBU08sZ0JBQVQsQ0FBMEJMLE9BQTFCLENBQVo7QUFBQSxnQkFDSU0sd0JBQXdCUCxhQUFhTyxxQkFBYixFQUQ1QjtBQUFBLGdCQUVJQyxXQUFXLEVBRmY7QUFBQSxnQkFHSUMsY0FBY1AsVUFBVVEsS0FBVixDQUFnQkwsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0MsUUFBOUMsQ0FIbEI7QUFBQSxnQkFJSUcsZ0JBQWdCLElBQUlQLGFBQUosQ0FBa0JLLFdBQWxCLENBSnBCOztBQU1BLG1CQUFPRSxhQUFQO0FBQ0Q7Ozs7RUFUeUJSLFk7O0FBWTVCUyxPQUFPQyxPQUFQLEdBQWlCVCxhQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBHYWxsaW5hTGV4ZXIgPSBsZXhlcnMuR2FsbGluYUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyk7XG5cbmNsYXNzIEdhbGxpbmFQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gR2FsbGluYUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGdhbGxpbmFQYXJzZXIgPSBuZXcgR2FsbGluYVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZ2FsbGluYVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFQYXJzZXI7XG4iXX0=