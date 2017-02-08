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
                'premise': TransparentNode,
                'premises': TransparentNode,
                'premise(s)': DiscardSecondChildNode,
                'directive': TransparentNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUiLCJGbG9yZW5jZVBhcnNlciIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdGlvbnMiLCJwYXJzZSIsImZsb3JlbmNlUGFyc2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLFdBQVdGLE9BQU9FLFFBRHRCO0FBQUEsSUFFSUMsZ0JBQWdCSCxPQUFPRyxhQUYzQjs7QUFJQSxJQUFJQyxVQUFVSCxRQUFRLFdBQVIsQ0FBZDtBQUFBLElBQ0lJLFlBQVlKLFFBQVEsZUFBUixDQURoQjtBQUFBLElBRUlLLGVBQWVMLFFBQVEsa0JBQVIsQ0FGbkI7QUFBQSxJQUdJTSxrQkFBa0JOLFFBQVEsNEJBQVIsQ0FIdEI7QUFBQSxJQUlJTyx5QkFBeUJQLFFBQVEsbUNBQVIsQ0FKN0I7QUFBQSxJQUtJUSxnQ0FBZ0NSLFFBQVEsMENBQVIsQ0FMcEM7O0lBT01TLGM7Ozs7Ozs7Ozs7O29DQUNlQyxRLEVBQVU7QUFDM0IsZ0JBQUlDLFFBQVFWLFNBQVNXLGdCQUFULENBQTBCVCxPQUExQixDQUFaO0FBQUEsZ0JBQ0lVLHdCQUF3QlgsY0FBY1ksd0JBQWQsRUFENUI7O0FBR0FKLHVCQUFXSyxPQUFPQyxNQUFQLENBQWM7QUFDdkIsMkJBQVdWLGVBRFk7QUFFdkIsNEJBQVlBLGVBRlc7QUFHdkIsOEJBQWNDLHNCQUhTO0FBSXZCLDZCQUFhRCxlQUpVO0FBS3ZCLDhCQUFjQyxzQkFMUztBQU12QixpQ0FBaUJELGVBTk07QUFPdkIsa0NBQWtCRSw2QkFQSztBQVF2QixvQ0FBb0JGLGVBUkc7QUFTdkIscUNBQXFCQyxzQkFURTtBQVV2Qix1Q0FBdUJDLDZCQVZBO0FBV3ZCLHVDQUF1QkYsZUFYQTtBQVl2Qix1Q0FBdUJBLGVBWkE7QUFhdkIsaURBQWlDQTtBQWJWLGFBQWQsRUFjUkksUUFkUSxDQUFYOztBQWdCQSxnQkFBSU8sY0FBY2IsVUFBVWMsS0FBVixDQUFnQlAsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0gsUUFBOUMsQ0FBbEI7QUFBQSxnQkFDSVMsaUJBQWlCLElBQUlWLGNBQUosQ0FBbUJRLFdBQW5CLENBRHJCOztBQUdBLG1CQUFPRSxjQUFQO0FBQ0Q7Ozs7RUF6QjBCZCxZOztBQTRCN0JlLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhtYXBwaW5ncykge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZShzKSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnZGlyZWN0aXZlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2NvbmNsdXNpb24nOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAgICAgJ3N0YXRlbWVudEJvZHknOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICd3aGl0ZXNwYWNlT3JQYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxzJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkxlbW1hT3IobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdmFyIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=