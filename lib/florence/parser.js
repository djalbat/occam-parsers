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
    ErrorsNode = require('./errorsNode'),
    TransparentNode = require('../common/node/transparent'),
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
                'errors': ErrorsNode,
                'part': TransparentNode,
                'premise': TransparentNode,
                'premises': TransparentNode,
                'premise(s)': DiscardSecondChildNode,
                'conclusion': DiscardSecondChildNode,
                'statementBody': TransparentNode,
                'commaThenLabel': TransparentThenKeepSecondNode,
                'whitespaceOrPart': TransparentNode,
                'labelledStatement': DiscardSecondChildNode,
                'parenthesisedLabels': TransparentThenKeepSecondNode,
                '(labelled)Statement': TransparentNode,
                'specialOrUnassigned': TransparentNode,
                'subLemmaOr(labelled)Statement': TransparentNode
            }, mappings);

            var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                florenceParser = new FlorenceParser(productions);

            return florenceParser;
        }
    }]);

    return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJFcnJvcnNOb2RlIiwiVHJhbnNwYXJlbnROb2RlIiwiRGlzY2FyZFNlY29uZENoaWxkTm9kZSIsIlRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlIiwiRmxvcmVuY2VQYXJzZXIiLCJtYXBwaW5ncyIsImxpbmVzIiwibGluZXNGcm9tR3JhbW1hciIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlcyIsIk9iamVjdCIsImFzc2lnbiIsInByb2R1Y3Rpb25zIiwicGFyc2UiLCJmbG9yZW5jZVBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRixPQUFPRSxRQUR0QjtBQUFBLElBRUlDLGdCQUFnQkgsT0FBT0csYUFGM0I7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7QUFBQSxJQUNJSSxZQUFZSixRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUVJSyxlQUFlTCxRQUFRLGtCQUFSLENBRm5CO0FBQUEsSUFHSU0sYUFBYU4sUUFBUSxjQUFSLENBSGpCO0FBQUEsSUFJSU8sa0JBQWtCUCxRQUFRLDRCQUFSLENBSnRCO0FBQUEsSUFLSVEseUJBQXlCUixRQUFRLG1DQUFSLENBTDdCO0FBQUEsSUFNSVMsZ0NBQWdDVCxRQUFRLDBDQUFSLENBTnBDOztJQVFNVSxjOzs7Ozs7Ozs7OztvQ0FDZUMsUSxFQUFVO0FBQzNCLGdCQUFJQyxRQUFRWCxTQUFTWSxnQkFBVCxDQUEwQlYsT0FBMUIsQ0FBWjtBQUFBLGdCQUNJVyx3QkFBd0JaLGNBQWNhLHdCQUFkLEVBRDVCOztBQUdBSix1QkFBV0ssT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLDBCQUFVWCxVQURhO0FBRXZCLHdCQUFRQyxlQUZlO0FBR3ZCLDJCQUFXQSxlQUhZO0FBSXZCLDRCQUFZQSxlQUpXO0FBS3ZCLDhCQUFjQyxzQkFMUztBQU12Qiw4QkFBY0Esc0JBTlM7QUFPdkIsaUNBQWlCRCxlQVBNO0FBUXZCLGtDQUFrQkUsNkJBUks7QUFTdkIsb0NBQW9CRixlQVRHO0FBVXZCLHFDQUFxQkMsc0JBVkU7QUFXdkIsdUNBQXVCQyw2QkFYQTtBQVl2Qix1Q0FBdUJGLGVBWkE7QUFhdkIsdUNBQXVCQSxlQWJBO0FBY3ZCLGlEQUFpQ0E7QUFkVixhQUFkLEVBZVJJLFFBZlEsQ0FBWDs7QUFpQkEsZ0JBQUlPLGNBQWNkLFVBQVVlLEtBQVYsQ0FBZ0JQLEtBQWhCLEVBQXVCRSxxQkFBdkIsRUFBOENILFFBQTlDLENBQWxCO0FBQUEsZ0JBQ0lTLGlCQUFpQixJQUFJVixjQUFKLENBQW1CUSxXQUFuQixDQURyQjs7QUFHQSxtQkFBT0UsY0FBUDtBQUNEOzs7O0VBMUIwQmYsWTs7QUE2QjdCZ0IsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgRXJyb3JzTm9kZSA9IHJlcXVpcmUoJy4vZXJyb3JzTm9kZScpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhtYXBwaW5ncykge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2Vycm9ycyc6IEVycm9yc05vZGUsXG4gICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2UocyknOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgJ2NvbmNsdXNpb24nOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgJ3N0YXRlbWVudEJvZHknOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICd3aGl0ZXNwYWNlT3JQYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxzJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkxlbW1hT3IobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdmFyIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=