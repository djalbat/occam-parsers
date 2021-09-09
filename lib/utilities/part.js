"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPartRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead;
function isPartRuleNamePartWithLookAhead(part) {
    var partRuleNamePartWithLookAhead = false;
    var partRuleNamePart = isPartRuleNamePart(part);
    if (partRuleNamePart) {
        var ruleNamePart = part, lookAhead = ruleNamePart.isLookAhead();
        if (lookAhead) {
            partRuleNamePartWithLookAhead = true;
        }
    }
    return partRuleNamePartWithLookAhead;
}
function isPartRuleNamePart(part) {
    var partRuleNamePart = false;
    var partTerminalPart = part.isTerminalPart(), partNonTerminalPart = !partTerminalPart;
    if (partNonTerminalPart) {
        var nonTerminalPart = part, nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();
        partRuleNamePart = nonTerminalPartRuleNamePart; ///
    }
    return partRuleNamePart;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJuYW1lcyI6WyJpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicGFydCIsInBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicGFydFJ1bGVOYW1lUGFydCIsImlzUGFydFJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lUGFydCIsImxvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicGFydFRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwicGFydE5vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydFJ1bGVOYW1lUGFydCIsImlzUnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksK0JBQStCLEdBQS9CLCtCQUErQjtTQUEvQiwrQkFBK0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyRCxHQUFHLENBQUMsNkJBQTZCLEdBQUcsS0FBSztJQUV6QyxHQUFLLENBQUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsSUFBSTtJQUVoRCxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyQixHQUFLLENBQUMsWUFBWSxHQUFHLElBQUksRUFDbkIsU0FBUyxHQUFHLFlBQVksQ0FBQyxXQUFXO1FBRTFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUNkLDZCQUE2QixHQUFHLElBQUk7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsNkJBQTZCO0FBQ3RDLENBQUM7U0FFUSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztJQUU1QixHQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFDdEMsbUJBQW1CLElBQUksZ0JBQWdCO0lBRTdDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLEdBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUN0QiwyQkFBMkIsR0FBRyxlQUFlLENBQUMsY0FBYztRQUVsRSxnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFDckQsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0I7QUFDekIsQ0FBQyJ9