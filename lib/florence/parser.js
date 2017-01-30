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
    KeepFirstChildNode = require('../common/node/keepFirstChild'),
    DiscardSecondChildNode = require('../common/node/discardSecondChild'),
    KeepFirstAndThirdChildNode = require('../common/node/keepFirstAndThirdChild'),
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
                'part': TransparentNode,
                'premise': TransparentNode,
                'premises': TransparentNode,
                'premise(s)': DiscardSecondChildNode,
                'directive': TransparentNode,
                'statement': KeepFirstChildNode,
                'conclusion': DiscardSecondChildNode,
                'statementBody': TransparentNode,
                'commaThenLabel': TransparentThenKeepSecondNode,
                'whitespaceOrPart': TransparentNode,
                'labelledStatement': KeepFirstAndThirdChildNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9wYXJzZXIuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkJORkxleGVyIiwiRmxvcmVuY2VMZXhlciIsImdyYW1tYXIiLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJUcmFuc3BhcmVudE5vZGUiLCJLZWVwRmlyc3RDaGlsZE5vZGUiLCJEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiS2VlcEZpcnN0QW5kVGhpcmRDaGlsZE5vZGUiLCJUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSIsIkZsb3JlbmNlUGFyc2VyIiwibWFwcGluZ3MiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJnZXRTaWduaWZpY2FudFRva2VuVHlwZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9kdWN0aW9ucyIsInBhcnNlIiwiZmxvcmVuY2VQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0YsT0FBT0UsUUFEdEI7QUFBQSxJQUVJQyxnQkFBZ0JILE9BQU9HLGFBRjNCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkO0FBQUEsSUFDSUksWUFBWUosUUFBUSxlQUFSLENBRGhCO0FBQUEsSUFFSUssZUFBZUwsUUFBUSxrQkFBUixDQUZuQjtBQUFBLElBR0lNLGtCQUFrQk4sUUFBUSw0QkFBUixDQUh0QjtBQUFBLElBSUlPLHFCQUFxQlAsUUFBUSwrQkFBUixDQUp6QjtBQUFBLElBS0lRLHlCQUF5QlIsUUFBUSxtQ0FBUixDQUw3QjtBQUFBLElBTUlTLDZCQUE2QlQsUUFBUSx1Q0FBUixDQU5qQztBQUFBLElBT0lVLGdDQUFnQ1YsUUFBUSwwQ0FBUixDQVBwQzs7SUFTTVcsYzs7Ozs7Ozs7Ozs7b0NBQ2VDLFEsRUFBVTtBQUMzQixnQkFBSUMsUUFBUVosU0FBU2EsZ0JBQVQsQ0FBMEJYLE9BQTFCLENBQVo7QUFBQSxnQkFDSVksd0JBQXdCYixjQUFjYyx3QkFBZCxFQUQ1Qjs7QUFHQUosdUJBQVdLLE9BQU9DLE1BQVAsQ0FBYztBQUN2Qix3QkFBUVosZUFEZTtBQUV2QiwyQkFBV0EsZUFGWTtBQUd2Qiw0QkFBWUEsZUFIVztBQUl2Qiw4QkFBY0Usc0JBSlM7QUFLdkIsNkJBQWFGLGVBTFU7QUFNdkIsNkJBQWFDLGtCQU5VO0FBT3ZCLDhCQUFjQyxzQkFQUztBQVF2QixpQ0FBaUJGLGVBUk07QUFTdkIsa0NBQWtCSSw2QkFUSztBQVV2QixvQ0FBb0JKLGVBVkc7QUFXdkIscUNBQXFCRywwQkFYRTtBQVl2Qix1Q0FBdUJDLDZCQVpBO0FBYXZCLHVDQUF1QkosZUFiQTtBQWN2Qix1Q0FBdUJBLGVBZEE7QUFldkIsaURBQWlDQTtBQWZWLGFBQWQsRUFnQlJNLFFBaEJRLENBQVg7O0FBa0JBLGdCQUFJTyxjQUFjZixVQUFVZ0IsS0FBVixDQUFnQlAsS0FBaEIsRUFBdUJFLHFCQUF2QixFQUE4Q0gsUUFBOUMsQ0FBbEI7QUFBQSxnQkFDSVMsaUJBQWlCLElBQUlWLGNBQUosQ0FBbUJRLFdBQW5CLENBRHJCOztBQUdBLG1CQUFPRSxjQUFQO0FBQ0Q7Ozs7RUEzQjBCaEIsWTs7QUE4QjdCaUIsT0FBT0MsT0FBUCxHQUFpQlosY0FBakIiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgQk5GTGV4ZXIgPSBsZXhlcnMuQk5GTGV4ZXIsXG4gICAgRmxvcmVuY2VMZXhlciA9IGxleGVycy5GbG9yZW5jZUxleGVyO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdHJhbnNwYXJlbnQnKSxcbiAgICBLZWVwRmlyc3RDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9rZWVwRmlyc3RDaGlsZCcpLFxuICAgIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9kaXNjYXJkU2Vjb25kQ2hpbGQnKSxcbiAgICBLZWVwRmlyc3RBbmRUaGlyZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL2tlZXBGaXJzdEFuZFRoaXJkQ2hpbGQnKSxcbiAgICBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQnKTtcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcobWFwcGluZ3MpIHtcbiAgICB2YXIgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLmdldFNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2UnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZXMnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAncHJlbWlzZShzKSc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICAgICAnZGlyZWN0aXZlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N0YXRlbWVudCc6IEtlZXBGaXJzdENoaWxkTm9kZSxcbiAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdzdGF0ZW1lbnRCb2R5JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnd2hpdGVzcGFjZU9yUGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdsYWJlbGxlZFN0YXRlbWVudCc6IEtlZXBGaXJzdEFuZFRoaXJkQ2hpbGROb2RlLFxuICAgICAgJ3BhcmVudGhlc2lzZWRMYWJlbHMnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgICAgICcobGFiZWxsZWQpU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3NwZWNpYWxPclVuYXNzaWduZWQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3ViTGVtbWFPcihsYWJlbGxlZClTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGVcbiAgICB9LCBtYXBwaW5ncyk7XG5cbiAgICB2YXIgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIucGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiJdfQ==