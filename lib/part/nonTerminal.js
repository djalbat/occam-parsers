"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalPart;
    }
});
class NonTerminalPart {
    constructor(type, callAhead){
        this.type = type;
        this.callAhead = callAhead;
    }
    getType() {
        return this.type;
    }
    isCallAhead() {
        return this.callAhead;
    }
    isNonTerminalPart() {
        const nonTerminalPart = true;
        return nonTerminalPart;
    }
    isTerminalPart() {
        const terminalPart = false;
        return terminalPart;
    }
    isRuleNamePart() {
        const ruleNamePart = false;
        return ruleNamePart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjYWxsQWhlYWQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2FsbEFoZWFkID0gY2FsbEFoZWFkO1xuICB9XG4gIFxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0NhbGxBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsQWhlYWQ7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiY2FsbEFoZWFkIiwiZ2V0VHlwZSIsImlzQ2FsbEFoZWFkIiwiaXNOb25UZXJtaW5hbFBhcnQiLCJub25UZXJtaW5hbFBhcnQiLCJpc1Rlcm1pbmFsUGFydCIsInRlcm1pbmFsUGFydCIsImlzUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXFCQTs7O0FBQU4sTUFBTUE7SUFDbkIsWUFBWUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDM0IsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsb0JBQW9CO1FBQ2xCLE1BQU1DLGtCQUFrQjtRQUV4QixPQUFPQTtJQUNUO0lBRUFDLGlCQUFpQjtRQUNmLE1BQU1DLGVBQWU7UUFFckIsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUI7UUFDZixNQUFNQyxlQUFlO1FBRXJCLE9BQU9BO0lBQ1Q7QUFDRiJ9