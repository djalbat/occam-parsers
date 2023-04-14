"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/nonTerminalNode"));
var _array = require("../utilities/array");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
    }
    _create_class(NonTerminalNode, [
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "getFirstSignificantToken",
            value: function getFirstSignificantToken() {
                var firstSignificantToken = null;
                (0, _array.forwardsSome)(this.childNodes, function(childNode) {
                    firstSignificantToken = childNode.getFirstSignificantToken();
                    if (firstSignificantToken !== null) {
                        return true;
                    }
                });
                return firstSignificantToken;
            }
        },
        {
            key: "getLastSignificantToken",
            value: function getLastSignificantToken() {
                var lastSignificantToken = null;
                (0, _array.backwardsSome)(this.childNodes, function(childNode) {
                    lastSignificantToken = childNode.getLastSignificantToken();
                    if (lastSignificantToken !== null) {
                        return true;
                    }
                });
                return lastSignificantToken;
            }
        },
        {
            key: "setRuleName",
            value: function setRuleName(ruleName) {
                this.ruleName = ruleName;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                this.childNodes = childNodes;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var abridged = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged), parseTree = nonTerminalNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
                if (childNodes === undefined) {
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var nonTerminalNode = new Class(ruleName, childNodes);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGFicmlkZ2VkKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFJ1bGVOYW1lIiwiZ2V0Q2hpbGROb2RlcyIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZvcndhcmRzU29tZSIsImNoaWxkTm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJiYWNrd2FyZHNTb21lIiwic2V0UnVsZU5hbWUiLCJzZXRDaGlsZE5vZGVzIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJhYnJpZGdlZCIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVUb2tlbnNBbmRBYnJpZGdlZCIsInBhcnNlVHJlZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSmdCO3FCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsZ0NBQU47YUFBTUEsZ0JBQ1BDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEYkY7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixJQUFNQyxlQUFlLEtBQUs7Z0JBRTFCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFNQyxrQkFBa0IsSUFBSTtnQkFFNUIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFPLElBQUksQ0FBQ04sVUFBVTtZQUN4Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkI7Z0JBQ3pCLElBQUlDLHdCQUF3QixJQUFJO2dCQUVoQ0MsSUFBQUEsbUJBQVksRUFBQyxJQUFJLENBQUNULFVBQVUsRUFBRSxTQUFDVSxXQUFjO29CQUMzQ0Ysd0JBQXdCRSxVQUFVSCx3QkFBd0I7b0JBRTFELElBQUlDLDBCQUEwQixJQUFJLEVBQUU7d0JBQ2xDLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCO2dCQUN4QixJQUFJQyx1QkFBdUIsSUFBSTtnQkFFL0JDLElBQUFBLG9CQUFhLEVBQUMsSUFBSSxDQUFDYixVQUFVLEVBQUUsU0FBQ1UsV0FBYztvQkFDNUNFLHVCQUF1QkYsVUFBVUMsdUJBQXVCO29CQUV4RCxJQUFJQyx5QkFBeUIsSUFBSSxFQUFFO3dCQUNqQyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlmLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO1lBQ2xCOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjZixVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFnQixLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsTUFBTSxFQUFvQjtvQkFBbEJDLFdBQUFBLGlFQUFXLEtBQUs7Z0JBQ2xDLElBQU1kLGtCQUFrQixJQUFJLEVBQ3RCZSwyQkFBMkJDLHdCQUF3QixDQUFDQyxvQ0FBb0MsQ0FBQ2pCLGlCQUFpQmEsUUFBUUMsV0FDbEhJLFlBQVlILDBCQUEyQixHQUFHO2dCQUVoRCxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsS0FBSyxFQUFFekIsUUFBUSxFQUFFQyxVQUFVLEVBQUU7Z0JBQzVELElBQUlBLGVBQWV5QixXQUFXO29CQUM1QnpCLGFBQWFELFVBQVcsR0FBRztvQkFFM0JBLFdBQVd5QixPQUFPLEdBQUc7b0JBRXJCQSxRQTVFZTFCLGlCQTRFVyxHQUFHO2dCQUMvQixDQUFDO2dCQUVELElBQU1NLGtCQUFrQixJQUFJb0IsTUFBTXpCLFVBQVVDO2dCQUU1QyxPQUFPSTtZQUNUOzs7V0FsRm1CTiJ9