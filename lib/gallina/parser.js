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
                terminalSymbolsRegExpPattern = GallinaLexer.terminalSymbolsRegExpPattern(),
                significantTokenTypes = GallinaLexer.significantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
                gallinaParser = new GallinaParser(productions);

            return gallinaParser;
        }
    }]);

    return GallinaParser;
}(CommonParser);

module.exports = GallinaParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL3BhcnNlci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiQk5GTGV4ZXIiLCJHYWxsaW5hTGV4ZXIiLCJncmFtbWFyIiwiQk5GUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiR2FsbGluYVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJnYWxsaW5hUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsZUFBZUgsT0FBT0csWUFGMUI7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5COztJQUlNTSxhOzs7Ozs7Ozs7OztzQ0FDaUI7QUFDbkIsZ0JBQUlDLFFBQVFOLFNBQVNPLGdCQUFULENBQTBCTCxPQUExQixDQUFaO0FBQUEsZ0JBQ0lNLCtCQUErQlAsYUFBYU8sNEJBQWIsRUFEbkM7QUFBQSxnQkFFSUMsd0JBQXdCUixhQUFhUSxxQkFBYixFQUY1QjtBQUFBLGdCQUdJQyxXQUFXLEVBSGY7QUFBQSxnQkFJSUMsY0FBY1IsVUFBVVMsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQUpsQjtBQUFBLGdCQUtJRyxnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQk0sV0FBbEIsQ0FMcEI7O0FBT0EsbUJBQU9FLGFBQVA7QUFDRDs7OztFQVZ5QlQsWTs7QUFhNUJVLE9BQU9DLE9BQVAsR0FBaUJWLGFBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEdhbGxpbmFMZXhlciA9IGxleGVycy5HYWxsaW5hTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY2xhc3MgR2FsbGluYVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICB2YXIgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gR2FsbGluYUxleGVyLnRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gR2FsbGluYUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGdhbGxpbmFQYXJzZXIgPSBuZXcgR2FsbGluYVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZ2FsbGluYVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFQYXJzZXI7XG4iXX0=