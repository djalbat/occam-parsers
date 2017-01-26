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
        key: 'fromNothing',
        value: function fromNothing(mappings) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJEaXNjYXJkQ2hpbGRyZW5Ob2RlIiwiRGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwiRGlzY2FyZFNlY29uZENoaWxkTm9kZSIsIlRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlIiwiVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSIsIkZsb3JlbmNlUGFyc2VyIiwibWFwcGluZ3MiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiZmxvcmVuY2VQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7QUFBQSxJQUVJQyxnQkFBZ0JILE9BQU9HLGFBRjNCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUksWUFBWUosUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFFSUssZUFBZUwsUUFBUSxrQkFBUixDQUZuQjtBQUFBLElBR0lNLGtCQUFrQk4sUUFBUSw0QkFBUixDQUh0QjtBQUFBLElBSUlPLHNCQUFzQlAsUUFBUSxnQ0FBUixDQUoxQjtBQUFBLElBS0lRLHdCQUF3QlIsUUFBUSxrQ0FBUixDQUw1QjtBQUFBLElBTUlTLHlCQUF5QlQsUUFBUSxtQ0FBUixDQU43QjtBQUFBLElBT0lVLGdDQUFnQ1YsUUFBUSwwQ0FBUixDQVBwQztBQUFBLElBUUlXLGtDQUFrQ1gsUUFBUSw0Q0FBUixDQVJ0Qzs7SUFVTVksYzs7Ozs7Ozs7Ozs7b0NBQ2VDLFEsRUFBVTtBQUMzQixnQkFBSUMsUUFBUWIsU0FBU2MsZ0JBQVQsQ0FBMEJaLE9BQTFCLENBQVo7QUFBQSxnQkFDSWEsd0JBQXdCZCxjQUFjZSx3QkFBZCxFQUQ1Qjs7QUFHQUosdUJBQVdLLE9BQU9DLE1BQVAsQ0FBYztBQUN2Qix3QkFBUWIsZUFEZTtBQUV2Qix3QkFBUUUscUJBRmU7QUFHdkIsd0JBQVFBLHFCQUhlO0FBSXZCLHlCQUFTQSxxQkFKYztBQUt2Qix5QkFBU0EscUJBTGM7QUFNdkIseUJBQVNBLHFCQU5jO0FBT3ZCLDJCQUFXQSxxQkFQWTtBQVF2QiwyQkFBV0EscUJBUlk7QUFTdkIsMkJBQVdFLDZCQVRZO0FBVXZCLDRCQUFZQywrQkFWVztBQVd2Qiw2QkFBYUEsK0JBWFU7QUFZdkIsNkJBQWFMLGVBWlU7QUFhdkIsOEJBQWNFLHFCQWJTO0FBY3ZCLCtCQUFlRCxtQkFkUTtBQWV2QixpQ0FBaUJELGVBZk07QUFnQnZCLGtDQUFrQkksNkJBaEJLO0FBaUJ2QixxQ0FBcUJELHNCQWpCRTtBQWtCdkIsdUNBQXVCQyw2QkFsQkE7QUFtQnZCLHVDQUF1QkosZUFuQkE7QUFvQnZCLHVDQUF1QkEsZUFwQkE7QUFxQnZCLGlEQUFpQ0E7QUFyQlYsYUFBZCxFQXNCUk8sUUF0QlEsQ0FBWDs7QUF3QkEsZ0JBQUlPLGNBQWNoQixVQUFVaUIsS0FBVixDQUFnQlAsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0gsUUFBOUMsQ0FBbEI7QUFBQSxnQkFDSVMsaUJBQWlCLElBQUlWLGNBQUosQ0FBbUJRLFdBQW5CLENBRHJCOztBQUdBLG1CQUFPRSxjQUFQO0FBQ0Q7Ozs7RUFqQzBCakIsWTs7QUFvQzdCa0IsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBEaXNjYXJkQ2hpbGRyZW5Ob2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZENoaWxkcmVuJyksXG4gICAgRGlzY2FyZEZpcnN0Q2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZEZpcnN0Q2hpbGQnKSxcbiAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyksXG4gICAgVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdCcpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhtYXBwaW5ncykge1xuICAgIHZhciBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncnVsZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICd0aGVuJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgJ2hlbmNlJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgJ3Byb29mJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgJ2xlbW1hJzogRGlzY2FyZEZpcnN0Q2hpbGROb2RlLFxuICAgICAgJ3RoZW9yZW0nOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAnc3VwcG9zZSc6IERpc2NhcmRGaXJzdENoaWxkTm9kZSxcbiAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlLFxuICAgICAgJ3RoZXJlZm9yZSc6IFRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUsXG4gICAgICAnZGlyZWN0aXZlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2NvbmNsdXNpb24nOiBEaXNjYXJkRmlyc3RDaGlsZE5vZGUsXG4gICAgICAnZW5kc09mTGluZXMnOiBEaXNjYXJkQ2hpbGRyZW5Ob2RlLFxuICAgICAgJ3N0YXRlbWVudEJvZHknOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICdsYWJlbGxlZFN0YXRlbWVudCc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJyhsYWJlbGxlZClTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3BlY2lhbE9yVW5hc3NpZ25lZCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdzdWJMZW1tYU9yKGxhYmVsbGVkKVN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgIH0sIG1hcHBpbmdzKTtcblxuICAgIHZhciBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlUGFyc2VyO1xuIl19