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
    DiscardFirstChildNode = require('../common/node/discardFirstChild'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/transparentThenKeepSecond'),
    TransparentThenDiscardFirstNode = require('../common/node/transparentThenDiscardFirst');

var FlorenceParser = function (_CommonParser) {
    _inherits(FlorenceParser, _CommonParser);

    function FlorenceParser() {
        _classCallCheck(this, FlorenceParser);

        return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
    }

    _createClass(FlorenceParser, null, [{
        key: 'fromMappings',
        value: function fromMappings(mappings) {
            var lines = BNFLexer.linesFromGrammar(grammar),
                significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

            mappings = Object.assign({
                'part': TransparentNode,
                'rule': DiscardFirstChildNode,
                'then': DiscardFirstChildNode,
                'hence': DiscardFirstChildNode,
                'proof': DiscardFirstChildNode,
                'lemma': DiscardFirstChildNode,
                'theorem': DiscardFirstChildNode,
                'suppose': DiscardFirstChildNode,
                'premise': TransparentThenKeepSecondNode,
                'premises': TransparentThenDiscardFirstNode,
                'therefore': TransparentThenDiscardFirstNode,
                'directive': TransparentNode,
                'conclusion': DiscardFirstChildNode,
                'endsOfLines': DiscardChildrenNode,
                'statementBody': TransparentNode,
                'commaThenLabel': TransparentThenKeepSecondNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkQ2hpbGRyZW5Ob2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwiRGlzY2FyZFNlY29uZENoaWxkTm9kZSIsIlRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlIiwiVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSIsIkZsb3JlbmNlUGFyc2VyIiwibWFwcGluZ3MiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiZmxvcmVuY2VQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7QUFBQSxJQUVJQyxnQkFBZ0JILE9BQU9HLGFBRjNCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUksWUFBWUosUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFFSUssZUFBZUwsUUFBUSxrQkFBUixDQUZuQjtBQUFBLElBR0lNLGtCQUFrQk4sUUFBUSw0QkFBUixDQUh0QjtBQUFBLElBSUlPLHNCQUFzQlAsUUFBUSxnQ0FBUixDQUoxQjtBQUFBLElBS0lRLHdCQUF3QlIsUUFBUSxrQ0FBUixDQUw1QjtBQUFBLElBTUlTLHlCQUF5QlQsUUFBUSxtQ0FBUixDQU43QjtBQUFBLElBT0lVLGdDQUFnQ1YsUUFBUSwwQ0FBUixDQVBwQztBQUFBLElBUUlXLGtDQUFrQ1gsUUFBUSw0Q0FBUixDQVJ0Qzs7SUFVTVksYzs7Ozs7Ozs7Ozs7cUNBQ2dCQyxRLEVBQVU7QUFDNUIsZ0JBQUlDLFFBQVFiLFNBQVNjLGdCQUFULENBQTBCWixPQUExQixDQUFaO0FBQUEsZ0JBQ0lhLHdCQUF3QmQsY0FBY2Usd0JBQWQsRUFENUI7O0FBR0FKLHVCQUFXSyxPQUFPQyxNQUFQLENBQWM7QUFDdkIsd0JBQVFiLGVBRGU7QUFFdkIsd0JBQVFFLHFCQUZlO0FBR3ZCLHdCQUFRQSxxQkFIZTtBQUl2Qix5QkFBU0EscUJBSmM7QUFLdkIseUJBQVNBLHFCQUxjO0FBTXZCLHlCQUFTQSxxQkFOYztBQU92QiwyQkFBV0EscUJBUFk7QUFRdkIsMkJBQVdBLHFCQVJZO0FBU3ZCLDJCQUFXRSw2QkFUWTtBQVV2Qiw0QkFBWUMsK0JBVlc7QUFXdkIsNkJBQWFBLCtCQVhVO0FBWXZCLDZCQUFhTCxlQVpVO0FBYXZCLDhCQUFjRSxxQkFiUztBQWN2QiwrQkFBZUQsbUJBZFE7QUFldkIsaUNBQWlCRCxlQWZNO0FBZ0J2QixrQ0FBa0JJLDZCQWhCSztBQWlCdkIscUNBQXFCRCxzQkFqQkU7QUFrQnZCLHVDQUF1QkMsNkJBbEJBO0FBbUJ2Qix1Q0FBdUJKLGVBbkJBO0FBb0J2Qix1Q0FBdUJBLGVBcEJBO0FBcUJ2QixpREFBaUNBO0FBckJWLGFBQWQsRUFzQlJPLFFBdEJRLENBQVg7O0FBd0JBLGdCQUFJTyxjQUFjaEIsVUFBVWlCLEtBQVYsQ0FBZ0JQLEtBQWhCLEVBQXVCRSxxQkFBdkIsRUFBOENILFFBQTlDLENBQWxCO0FBQUEsZ0JBQ0lTLGlCQUFpQixJQUFJVixjQUFKLENBQW1CUSxXQUFuQixDQURyQjs7QUFHQSxtQkFBT0UsY0FBUDtBQUNEOzs7O0VBakMwQmpCLFk7O0FBb0M3QmtCLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEJORkxleGVyID0gbGV4ZXJzLkJORkxleGVyLFxuICAgIEZsb3JlbmNlTGV4ZXIgPSBsZXhlcnMuRmxvcmVuY2VMZXhlcjtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgIFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50JyksXG4gICAgRGlzY2FyZENoaWxkcmVuTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRDaGlsZHJlbicpLFxuICAgIERpc2NhcmRGaXJzdENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRGaXJzdENoaWxkJyksXG4gICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpLFxuICAgIFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU1hcHBpbmdzKG1hcHBpbmdzKSB7XG4gICAgdmFyIGxpbmVzID0gQk5GTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdydWxlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgJ3RoZW4nOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAnaGVuY2UnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAncHJvb2YnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAnbGVtbWEnOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAndGhlb3JlbSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICdzdXBwb3NlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdwcmVtaXNlcyc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAndGhlcmVmb3JlJzogVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSxcbiAgICAgICdkaXJlY3RpdmUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnY29uY2x1c2lvbic6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICdlbmRzT2ZMaW5lcyc6IERpc2NhcmRDaGlsZHJlbk5vZGUsXG4gICAgICAnc3RhdGVtZW50Qm9keSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxzJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzcGVjaWFsT3JVbmFzc2lnbmVkJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N1YkxlbW1hT3IobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdmFyIHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iXX0=