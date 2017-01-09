'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var FlorenceParser = function (_CommonParser) {
    _inherits(FlorenceParser, _CommonParser);

    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);

        return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
    }

    _createClass(FlorenceParser, null, [{
        key: 'fromNothing',
        value: function fromNothing() {
            var lines = BNFLexer.linesFromGrammar(grammar),
                terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
                significantTokenTypes = FlorenceLexer.significantTokenTypes(),
                mappings = {},
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
                florenceParser = new FlorenceParser(productions);

            return florenceParser;
        }
    }]);

    return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5COztJQUlNTSxjOzs7Ozs7Ozs7OztzQ0FDaUI7QUFDbkIsZ0JBQUlDLFFBQVFOLFNBQVNPLGdCQUFULENBQTBCTCxPQUExQixDQUFaO0FBQUEsZ0JBQ0lNLCtCQUErQlAsY0FBY08sNEJBQWQsRUFEbkM7QUFBQSxnQkFFSUMsd0JBQXdCUixjQUFjUSxxQkFBZCxFQUY1QjtBQUFBLGdCQUdJQyxXQUFXLEVBSGY7QUFBQSxnQkFJSUMsY0FBY1IsVUFBVVMsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQUpsQjtBQUFBLGdCQUtJRyxpQkFBaUIsSUFBSVIsY0FBSixDQUFtQk0sV0FBbkIsQ0FMckI7O0FBT0EsbUJBQU9FLGNBQVA7QUFDRDs7OztFQVYwQlQsWTs7QUFhN0JVLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICB2YXIgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gRmxvcmVuY2VMZXhlci50ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=