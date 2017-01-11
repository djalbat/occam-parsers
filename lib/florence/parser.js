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
    CommonParser = require('../common/parser'),
    LabelNode = require('./node/label'),
    MissingNode = require('../common/node/missing'),
    TransparentNode = require('../common/node/transparent'),
    MissingFirstChildNode = require('../common/node/missingFirstChild'),
    TransparentSecondChildNode = require('../common/node/transparentSecondChild'),
    TransparentMissingFirstChildNode = require('../common/node/transparentMissingFirstChild');

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
                mappings = {
                'part': TransparentNode,
                'label': LabelNode,
                'rule': MissingFirstChildNode,
                'premise': TransparentSecondChildNode,
                'premises': TransparentMissingFirstChildNode,
                'conclusion': MissingFirstChildNode,
                'endsOfLines': MissingNode,
                'commaThenLabel': TransparentSecondChildNode,
                'parenthesisedLabels': TransparentSecondChildNode,
                '(labelled)statement': TransparentNode
            },
                productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings),
                florenceParser = new FlorenceParser(productions);

            return florenceParser;
        }
    }]);

    return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJMYWJlbE5vZGUiLCJNaXNzaW5nTm9kZSIsIlRyYW5zcGFyZW50Tm9kZSIsIk1pc3NpbmdGaXJzdENoaWxkTm9kZSIsIlRyYW5zcGFyZW50U2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRNaXNzaW5nRmlyc3RDaGlsZE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4iLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sWUFBWU4sUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJSU8sY0FBY1AsUUFBUSx3QkFBUixDQUpsQjtBQUFBLElBS0lRLGtCQUFrQlIsUUFBUSw0QkFBUixDQUx0QjtBQUFBLElBTUlTLHdCQUF3QlQsUUFBUSxrQ0FBUixDQU41QjtBQUFBLElBT0lVLDZCQUE2QlYsUUFBUSx1Q0FBUixDQVBqQztBQUFBLElBUUlXLG1DQUFtQ1gsUUFBUSw2Q0FBUixDQVJ2Qzs7SUFVTVksYzs7Ozs7Ozs7Ozs7c0NBQ2lCO0FBQ25CLGdCQUFJQyxRQUFRWixTQUFTYSxnQkFBVCxDQUEwQlgsT0FBMUIsQ0FBWjtBQUFBLGdCQUNJWSwrQkFBK0JiLGNBQWNhLDRCQUFkLEVBRG5DO0FBQUEsZ0JBRUlDLHdCQUF3QmQsY0FBY2MscUJBQWQsRUFGNUI7QUFBQSxnQkFHSUMsV0FBVztBQUNULHdCQUFRVCxlQURDO0FBRVQseUJBQVNGLFNBRkE7QUFHVCx3QkFBUUcscUJBSEM7QUFJVCwyQkFBV0MsMEJBSkY7QUFLVCw0QkFBWUMsZ0NBTEg7QUFNVCw4QkFBY0YscUJBTkw7QUFPVCwrQkFBZUYsV0FQTjtBQVFULGtDQUFrQkcsMEJBUlQ7QUFTVCx1Q0FBdUJBLDBCQVRkO0FBVVQsdUNBQXVCRjtBQVZkLGFBSGY7QUFBQSxnQkFlSVUsY0FBY2QsVUFBVWUsS0FBVixDQUFnQk4sS0FBaEIsRUFBdUJFLDRCQUF2QixFQUFxREMscUJBQXJELEVBQTRFQyxRQUE1RSxDQWZsQjtBQUFBLGdCQWdCSUcsaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJNLFdBQW5CLENBaEJyQjs7QUFrQkEsbUJBQU9FLGNBQVA7QUFDRDs7OztFQXJCMEJmLFk7O0FBd0I3QmdCLE9BQU9DLE9BQVAsR0FBaUJWLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgIExhYmVsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9sYWJlbCcpLFxuICAgIE1pc3NpbmdOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbWlzc2luZycpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgTWlzc2luZ0ZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbWlzc2luZ0ZpcnN0Q2hpbGQnKSxcbiAgICBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50U2Vjb25kQ2hpbGQnKSxcbiAgICBUcmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50TWlzc2luZ0ZpcnN0Q2hpbGQnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IEZsb3JlbmNlTGV4ZXIudGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICBtYXBwaW5ncyA9IHtcbiAgICAgICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICAgICAnbGFiZWwnOiBMYWJlbE5vZGUsXG4gICAgICAgICAgJ3J1bGUnOiBNaXNzaW5nRmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE1pc3NpbmdGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnY29uY2x1c2lvbic6IE1pc3NpbmdGaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICAnZW5kc09mTGluZXMnOiBNaXNzaW5nTm9kZSxcbiAgICAgICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFNlY29uZENoaWxkTm9kZSxcbiAgICAgICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50U2Vjb25kQ2hpbGROb2RlLFxuICAgICAgICAgICcobGFiZWxsZWQpc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=