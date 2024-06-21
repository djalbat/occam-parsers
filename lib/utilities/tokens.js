"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "lineIndexFromTokenIndexAndTokens", {
    enumerable: true,
    get: function() {
        return lineIndexFromTokenIndexAndTokens;
    }
});
function lineIndexFromTokenIndexAndTokens(tokenIndex, tokens) {
    var lineIndex = null;
    if (tokenIndex !== null) {
        lineIndex = 0;
        var start = 0, end = tokenIndex;
        tokens = tokens.slice(start, end); ///
        tokens.forEach(function(token) {
            var tokenEndOfLineToken = token.isEndOfLineToken();
            if (tokenEndOfLineToken) {
                lineIndex++;
            }
        });
    }
    return lineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnModG9rZW5JbmRleCwgdG9rZW5zKSB7XG4gIGxldCBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGlmICh0b2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgbGluZUluZGV4ID0gMDtcblxuICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICBlbmQgPSB0b2tlbkluZGV4O1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmICh0b2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgIGxpbmVJbmRleCsrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVJbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJsaW5lSW5kZXhGcm9tVG9rZW5JbmRleEFuZFRva2VucyIsInRva2VuSW5kZXgiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiZm9yRWFjaCIsInRva2VuIiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGlDQUFpQ0MsVUFBVSxFQUFFQyxNQUFNO0lBQ2pFLElBQUlDLFlBQVk7SUFFaEIsSUFBSUYsZUFBZSxNQUFNO1FBQ3ZCRSxZQUFZO1FBRVosSUFBTUMsUUFBUSxHQUNSQyxNQUFNSjtRQUVaQyxTQUFTQSxPQUFPSSxLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztRQUV2Q0gsT0FBT0ssT0FBTyxDQUFDLFNBQUNDO1lBQ2QsSUFBTUMsc0JBQXNCRCxNQUFNRSxnQkFBZ0I7WUFFbEQsSUFBSUQscUJBQXFCO2dCQUN2Qk47WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=