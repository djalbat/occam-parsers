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
    let lineIndex = null;
    if (tokenIndex !== null) {
        lineIndex = 0;
        const start = 0, end = tokenIndex;
        tokens = tokens.slice(start, end); ///
        tokens.forEach((token)=>{
            const tokenEndOfLineToken = token.isEndOfLineToken();
            if (tokenEndOfLineToken) {
                lineIndex++;
            }
        });
    }
    return lineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnModG9rZW5JbmRleCwgdG9rZW5zKSB7XG4gIGxldCBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGlmICh0b2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgbGluZUluZGV4ID0gMDtcblxuICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICBlbmQgPSB0b2tlbkluZGV4O1xuXG4gICAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IHRva2VuRW5kT2ZMaW5lVG9rZW4gPSB0b2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmICh0b2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgIGxpbmVJbmRleCsrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVJbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJsaW5lSW5kZXhGcm9tVG9rZW5JbmRleEFuZFRva2VucyIsInRva2VuSW5kZXgiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiZm9yRWFjaCIsInRva2VuIiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsaUNBQWlDQyxVQUFVLEVBQUVDLE1BQU07SUFDakUsSUFBSUMsWUFBWTtJQUVoQixJQUFJRixlQUFlLE1BQU07UUFDdkJFLFlBQVk7UUFFWixNQUFNQyxRQUFRLEdBQ1JDLE1BQU1KO1FBRVpDLFNBQVNBLE9BQU9JLEtBQUssQ0FBQ0YsT0FBT0MsTUFBTyxHQUFHO1FBRXZDSCxPQUFPSyxPQUFPLENBQUMsQ0FBQ0M7WUFDZCxNQUFNQyxzQkFBc0JELE1BQU1FLGdCQUFnQjtZQUVsRCxJQUFJRCxxQkFBcUI7Z0JBQ3ZCTjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==