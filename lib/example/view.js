"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _easylayout = require("easy-layout");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("./view/input/ruleName"));
const _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        const content = this.getContent(), tokens = this.getTokens(content), node = this.getNode(tokens);
        this.setTokens(tokens);
        if (node !== null) {
            const parseTree = node.asParseTree(tokens);
            this.setParseTree(parseTree);
        } else {
            this.clearParseTree();
        }
    };
    getTokens(content) {
        const { Lexer } = this.constructor, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), tokens = lexer.tokenise(content);
        return tokens;
    }
    getNode(tokens) {
        const { Parser } = this.constructor, bnf = this.getBNF(), parser = Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
        return node;
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                onKeyUp: this.keyUpHandler
            }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
        ];
    }
    initialise() {
        this.assignContext();
        const { Lexer, Parser, initialContent } = this.constructor, { bnf } = Parser, { entries } = Lexer, content = initialContent, lexicalEntries = entries; ///
        this.setBNF(bnf);
        this.setContent(content);
        this.setLexicalEntries(lexicalEntries);
        this.keyUpHandler();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvcnVsZU5hbWVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2Vucyhjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gdGhpcy5nZXROb2RlKHRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRva2Vucyhjb250ZW50KSB7XG4gICAgY29uc3QgeyBMZXhlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSh0b2tlbnMpIHtcbiAgICBjb25zdCB7IFBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyLCBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJWaWV3IiwiRWxlbWVudCIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwibm9kZSIsImdldE5vZGUiLCJzZXRUb2tlbnMiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImNsZWFyUGFyc2VUcmVlIiwiTGV4ZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImxleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbmlzZSIsIlBhcnNlciIsImJuZiIsImdldEJORiIsInBhcnNlciIsImZyb21CTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwicGFyc2UiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJSdWxlTmFtZUlucHV0Iiwib25LZXlVcCIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJCTkZUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJUb2tlbnNUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEhBOzs7ZUFBQTs7O3NFQXhIc0I7c0JBRUU7NEJBQzRDO21FQUU3QztpRUFDQzs0REFDQTtpRUFDRTsrREFDQztnRUFDQztrRUFDRTt1RUFDSzs7Ozs7O0FBRW5DLE1BQU1BLGFBQWFDLGFBQU87SUFDeEJDLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDckIsTUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTLENBQUNILFVBQ3hCSSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxDQUFDSDtRQUUxQixJQUFJLENBQUNJLFNBQVMsQ0FBQ0o7UUFFZixJQUFJRSxTQUFTLE1BQU07WUFDakIsTUFBTUcsWUFBWUgsS0FBS0ksV0FBVyxDQUFDTjtZQUVuQyxJQUFJLENBQUNPLFlBQVksQ0FBQ0Y7UUFDcEIsT0FBTztZQUNMLElBQUksQ0FBQ0csY0FBYztRQUNyQjtJQUNGLEVBQUM7SUFFRFAsVUFBVUgsT0FBTyxFQUFFO1FBQ2pCLE1BQU0sRUFBRVcsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDNUJDLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsVUFBVUYsZ0JBQ1ZHLFFBQVFKLE1BQU1LLFdBQVcsQ0FBQ0YsVUFDMUJaLFNBQVNhLE1BQU1FLFFBQVEsQ0FBQ2pCO1FBRTlCLE9BQU9FO0lBQ1Q7SUFFQUcsUUFBUUgsTUFBTSxFQUFFO1FBQ2QsTUFBTSxFQUFFZ0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDN0JDLE1BQU0sSUFBSSxDQUFDQyxNQUFNLElBQ2pCQyxTQUFTSCxPQUFPSSxPQUFPLENBQUNILE1BQ3hCSSxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsVUFBVUosT0FBT0ssVUFBVSxJQUMzQkMsT0FBT0YsT0FBTyxDQUFDRixTQUFTLEVBQ3hCbkIsT0FBT2lCLE9BQU9PLEtBQUssQ0FBQzFCLFFBQVF5QjtRQUVsQyxPQUFPdkI7SUFDVDtJQUVBeUIsZ0JBQWdCO1FBQ2QsT0FBUTswQkFFTixvQkFBQ0Msc0JBQVUsc0JBQ1Qsb0JBQUNDLGlCQUFXLHNCQUNWLG9CQUFDQyxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQyw0QkFHWixvQkFBQ0MsaUJBQWE7Z0JBQUNDLFNBQVMsSUFBSSxDQUFDdEMsWUFBWTs4QkFDekMsb0JBQUNvQyxtQkFBVSxRQUFDLGtDQUdaLG9CQUFDRyx1QkFBc0I7Z0JBQUNELFNBQVMsSUFBSSxDQUFDdEMsWUFBWTs4QkFDbEQsb0JBQUNvQyxtQkFBVSxRQUFDLHNCQUdaLG9CQUFDSSxZQUFXO2dCQUFDRixTQUFTLElBQUksQ0FBQ3RDLFlBQVk7Z0NBRzNDLG9CQUFDeUMsK0JBQW1CLHVCQUNwQixvQkFBQ0MscUJBQVMsc0JBQ1Isb0JBQUNQLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDBCQUdaLG9CQUFDTyxnQkFBZTtnQkFBQ0wsU0FBUyxJQUFJLENBQUN0QyxZQUFZOzhCQUMzQyxvQkFBQ29DLG1CQUFVLFFBQUMseUJBR1osb0JBQUNRLGVBQWMsdUJBQ2Ysb0JBQUNSLG1CQUFVLFFBQUMsNkJBR1osb0JBQUNTLGtCQUFpQjtTQUt6QjtJQUNIO0lBRUFDLGFBQWE7UUFDWCxJQUFJLENBQUNDLGFBQWE7UUFFbEIsTUFBTSxFQUFFakMsS0FBSyxFQUFFTyxNQUFNLEVBQUUyQixjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUNwRCxFQUFFMUIsR0FBRyxFQUFFLEdBQUdELFFBQ1YsRUFBRUosT0FBTyxFQUFFLEdBQUdILE9BQ2RYLFVBQVU2QyxnQkFDVmpDLGlCQUFpQkUsU0FBUyxHQUFHO1FBRW5DLElBQUksQ0FBQ2dDLE1BQU0sQ0FBQzNCO1FBRVosSUFBSSxDQUFDNEIsVUFBVSxDQUFDL0M7UUFFaEIsSUFBSSxDQUFDZ0QsaUJBQWlCLENBQUNwQztRQUV2QixJQUFJLENBQUNmLFlBQVk7SUFDbkI7SUFFQSxPQUFPb0QsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN6RCxLQUFLLENBQUM7Ozs7QUFJL0IsQ0FBQyJ9