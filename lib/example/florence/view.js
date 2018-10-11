'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers'),
    easyLayout = require('easy-layout');

var ruleUtilities = require('../../utilities/rule'),
    ExampleView = require('../../example/view'),
    FlorenceParser = require('../../florence/parser'),
    RuleNameInput = require('../common/input/ruleName'),
    BNFTextarea = require('../common/textarea/bnf'),
    ContentTextarea = require('../common/textarea/content'),
    ParseTreeTextarea = require('../common/textarea/parseTree'),
    LexicalEntriesTextarea = require('../common/textarea/lexicalEntries'),
    MainVerticalSplitter = require('../common/verticalSplitter/main');

var FlorenceLexer = lexers.FlorenceLexer,
    findRuleByName = ruleUtilities.findRuleByName,
    SizeableElement = easyLayout.SizeableElement;

var FlorenceExampleView = function (_ExampleView) {
  _inherits(FlorenceExampleView, _ExampleView);

  function FlorenceExampleView() {
    _classCallCheck(this, FlorenceExampleView);

    return _possibleConstructorReturn(this, (FlorenceExampleView.__proto__ || Object.getPrototypeOf(FlorenceExampleView)).apply(this, arguments));
  }

  _createClass(FlorenceExampleView, [{
    key: 'getLexer',
    value: function getLexer() {
      var Lexer = FlorenceLexer; ///

      return Lexer;
    }
  }, {
    key: 'getParser',
    value: function getParser() {
      var Parser = FlorenceParser; ///

      return Parser;
    }
  }, {
    key: 'getInitialContent',
    value: function getInitialContent() {
      var initialContent = '';

      return initialContent;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = null;

      var bnf = this.getBNF(),
          ruleName = this.getRuleName(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      florenceLexer = FlorenceLexer.fromEntries(entries),
          florenceParser = FlorenceParser.fromBNF(bnf),
          rules = florenceParser.getRules(),
          name = ruleName,
          ///
      rule = findRuleByName(name, rules),
          content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens, rule);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        'Florence parser example'
      ), React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Lexical entries'
          ),
          React.createElement(LexicalEntriesTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(
            'h2',
            null,
            'Rule name'
          ),
          React.createElement(RuleNameInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        )
      )];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ExampleView.fromProperties(FlorenceExampleView, properties);
    }
  }]);

  return FlorenceExampleView;
}(ExampleView);

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2Zsb3JlbmNlL3ZpZXcuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImVhc3lMYXlvdXQiLCJydWxlVXRpbGl0aWVzIiwiRXhhbXBsZVZpZXciLCJGbG9yZW5jZVBhcnNlciIsIlJ1bGVOYW1lSW5wdXQiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiRmxvcmVuY2VMZXhlciIsImZpbmRSdWxlQnlOYW1lIiwiU2l6ZWFibGVFbGVtZW50IiwiRmxvcmVuY2VFeGFtcGxlVmlldyIsIkxleGVyIiwiUGFyc2VyIiwiaW5pdGlhbENvbnRlbnQiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJmbG9yZW5jZUxleGVyIiwiZnJvbUVudHJpZXMiLCJmbG9yZW5jZVBhcnNlciIsImZyb21CTkYiLCJydWxlcyIsImdldFJ1bGVzIiwibmFtZSIsInJ1bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLGdCQUFnQkYsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01HLGNB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LGFBQU90QyxZQUFZeUMsY0FBWixDQUEyQjlCLG1CQUEzQixFQUFnRDJCLFVBQWhELENBQVA7QUFBb0U7Ozs7RUFyRXhFdEMsVzs7QUF3RWxDMEMsT0FBT0MsTUFBUCxDQUFjaEMsbUJBQWQsRUFBbUM7QUFDakNpQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURjLENBQW5DOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCcEMsbUJBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgRXhhbXBsZVZpZXcgPSByZXF1aXJlKCcuLi8uLi9leGFtcGxlL3ZpZXcnKSxcbiAgICAgIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vZmxvcmVuY2UvcGFyc2VyJyksXG4gICAgICBSdWxlTmFtZUlucHV0ID0gcmVxdWlyZSgnLi4vY29tbW9uL2lucHV0L3J1bGVOYW1lJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9jb250ZW50JyksXG4gICAgICBQYXJzZVRyZWVUZXh0YXJlYSA9IHJlcXVpcmUoJy4uL2NvbW1vbi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIExleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuLi9jb21tb24vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpO1xuXG5jb25zdCB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dDtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlVmlldyBleHRlbmRzIEV4YW1wbGVWaWV3IHtcbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgTGV4ZXIgPSBGbG9yZW5jZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gTGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgUGFyc2VyID0gRmxvcmVuY2VQYXJzZXI7ICAvLy9cblxuICAgIHJldHVybiBQYXJzZXI7XG4gIH1cblxuICBnZXRJbml0aWFsQ29udGVudCgpIHtcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcnO1xuXG4gICAgcmV0dXJuIGluaXRpYWxDb250ZW50O1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+RmxvcmVuY2UgcGFyc2VyIGV4YW1wbGU8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5SdWxlIG5hbWU8L2gyPlxuICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFeGFtcGxlVmlldy5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUV4YW1wbGVWaWV3LCBwcm9wZXJ0aWVzKTt9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VFeGFtcGxlVmlldywge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Zsb3JlbmNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGVWaWV3O1xuIl19