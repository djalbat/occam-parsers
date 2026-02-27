"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicView;
    }
});
const _occamlexers = require("occam-lexers");
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { bnf } = _index.BasicParser, { entries } = _occamlexers.BasicLexer;
class BasicView extends _view.default {
    getTokens(content) {
        const lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, basicLexer = _occamlexers.BasicLexer.fromEntries(entries), tokens = basicLexer.tokenise(content);
        return tokens;
    }
    getNode(tokens) {
        const bnf = this.getBNF(), basicParser = _index.BasicParser.fromBNF(bnf), node = basicParser.parse(tokens);
        return node;
    }
    initialise() {
        this.assignContext();
        const { initialContent } = this.constructor, lexicalEntries = entries, content = initialContent; ///
        this.setBNF(bnf);
        this.setContent(content);
        this.setLexicalEntries(lexicalEntries);
        this.keyUpHandler();
    }
    static initialContent = `(1+2).`;
    static defaultProperties = {
        className: "basic"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCYXNpY1BhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gQmFzaWNMZXhlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzaWNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGdldFRva2Vucyhjb250ZW50KSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUodG9rZW5zKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQ7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAoMSsyKS5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmFzaWNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkJhc2ljVmlldyIsImJuZiIsIkJhc2ljUGFyc2VyIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJWaWV3IiwiZ2V0VG9rZW5zIiwiY29udGVudCIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsImdldE5vZGUiLCJnZXRCTkYiLCJiYXNpY1BhcnNlciIsImZyb21CTkYiLCJub2RlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwia2V5VXBIYW5kbGVyIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBcUJBOzs7NkJBUk07dUJBQ0M7NkRBRVg7Ozs7OztBQUVqQixNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxrQkFBVyxFQUNyQixFQUFFQyxPQUFPLEVBQUUsR0FBR0MsdUJBQVU7QUFFZixNQUFNSixrQkFBa0JLLGFBQUk7SUFDekNDLFVBQVVDLE9BQU8sRUFBRTtRQUNqQixNQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUIsSUFDdkNOLFVBQVVLLGdCQUNWRSxhQUFhTix1QkFBVSxDQUFDTyxXQUFXLENBQUNSLFVBQ3BDUyxTQUFTRixXQUFXRyxRQUFRLENBQUNOO1FBRW5DLE9BQU9LO0lBQ1Q7SUFFQUUsUUFBUUYsTUFBTSxFQUFFO1FBQ2QsTUFBTVgsTUFBTSxJQUFJLENBQUNjLE1BQU0sSUFDakJDLGNBQWNkLGtCQUFXLENBQUNlLE9BQU8sQ0FBQ2hCLE1BQ2xDaUIsT0FBT0YsWUFBWUcsS0FBSyxDQUFDUDtRQUUvQixPQUFPTTtJQUNUO0lBRUFFLGFBQWE7UUFDWCxJQUFJLENBQUNDLGFBQWE7UUFFbEIsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUNyQ2QsaUJBQWlCTCxTQUNqQkksVUFBVWUsZ0JBQWdCLEdBQUc7UUFFbkMsSUFBSSxDQUFDQyxNQUFNLENBQUN0QjtRQUVaLElBQUksQ0FBQ3VCLFVBQVUsQ0FBQ2pCO1FBRWhCLElBQUksQ0FBQ2tCLGlCQUFpQixDQUFDakI7UUFFdkIsSUFBSSxDQUFDa0IsWUFBWTtJQUNuQjtJQUVBLE9BQU9KLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWpDLE9BQU9LLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9