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
    TransparentNode = require('../common/node/transparent'),
    DiscardChildrenNode = require('../common/node/discardChildren'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/transparentThenKeepSecond');

var FlorenceParser = function (_CommonParser) {
    _inherits(FlorenceParser, _CommonParser);

    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);

        return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
    }

    _createClass(FlorenceParser, null, [{
        key: 'fromNothing',
        value: function fromNothing(mappings) {
            var lines = BNFLexer.linesFromGrammar(grammar),
                significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

            mappings = Object.assign({
                // 'part': TransparentNode,
                // 'label': TransparentNode,
                // 'premise': TransparentNode,
                // 'premises': TransparentNode,
                // 'directive': TransparentNode,
                // 'endsOfLines': DiscardChildrenNode,
                // 'statementBody': TransparentNode,
                // 'commaThenLabel': TransparentThenKeepSecondNode,
                // 'labelledStatement': DiscardSecondChildNode,
                // 'parenthesisedLabels': TransparentThenKeepSecondNode,
                // '(labelled)Statement': TransparentNode,
                // 'specialOrUnassigned': TransparentNode,
                // 'subLemmaOr(labelled)Statement': TransparentNode
            }, mappings);

            var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                florenceParser = new FlorenceParser(productions);

            return florenceParser;
        }
    }]);

    return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkQ2hpbGRyZW5Ob2RlIiwiRGlzY2FyZFNlY29uZENoaWxkTm9kZSIsIlRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlIiwiRmxvcmVuY2VQYXJzZXIiLCJtYXBwaW5ncyIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sa0JBQWtCTixRQUFRLDRCQUFSLENBSHRCO0FBQUEsSUFJSU8sc0JBQXNCUCxRQUFRLGdDQUFSLENBSjFCO0FBQUEsSUFLSVEseUJBQXlCUixRQUFRLG1DQUFSLENBTDdCO0FBQUEsSUFNSVMsZ0NBQWdDVCxRQUFRLDBDQUFSLENBTnBDOztJQVFNVSxjOzs7Ozs7Ozs7OztvQ0FDZUMsUSxFQUFVO0FBQzNCLGdCQUFJQyxRQUFRWCxTQUFTWSxnQkFBVCxDQUEwQlYsT0FBMUIsQ0FBWjtBQUFBLGdCQUNJVyx3QkFBd0JaLGNBQWNhLHdCQUFkLEVBRDVCOztBQUdBSix1QkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYnVCLGFBQWQsRUFjUk4sUUFkUSxDQUFYOztBQWdCQSxnQkFBSU8sY0FBY2QsVUFBVWUsS0FBVixDQUFnQlAsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0gsUUFBOUMsQ0FBbEI7QUFBQSxnQkFDSVMsaUJBQWlCLElBQUlWLGNBQUosQ0FBbUJRLFdBQW5CLENBRHJCOztBQUdBLG1CQUFPRSxjQUFQO0FBQ0Q7Ozs7RUF6QjBCZixZOztBQTRCN0JnQixPQUFPQyxPQUFQLEdBQWlCWixjQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBCTkZMZXhlciA9IGxleGVycy5CTkZMZXhlcixcbiAgICBGbG9yZW5jZUxleGVyID0gbGV4ZXJzLkZsb3JlbmNlTGV4ZXI7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudCcpLFxuICAgIERpc2NhcmRDaGlsZHJlbk5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9kaXNjYXJkQ2hpbGRyZW4nKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKG1hcHBpbmdzKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAvLyAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgIC8vICdsYWJlbCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgIC8vICdwcmVtaXNlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgLy8gJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgLy8gJ2RpcmVjdGl2ZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgIC8vICdlbmRzT2ZMaW5lcyc6IERpc2NhcmRDaGlsZHJlbk5vZGUsXG4gICAgICAvLyAnc3RhdGVtZW50Qm9keSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgIC8vICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgLy8gJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgIC8vICdwYXJlbnRoZXNpc2VkTGFiZWxzJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAvLyAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgIC8vICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgLy8gJ3N1YkxlbW1hT3IobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdmFyIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=