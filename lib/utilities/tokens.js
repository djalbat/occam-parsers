"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "tokenLineIndexFromTokenAndTokens", {
    enumerable: true,
    get: function() {
        return tokenLineIndexFromTokenAndTokens;
    }
});
function tokenLineIndexFromTokenAndTokens(token, tokens) {
    var tokenLineIndex = 0;
    var tokenIndex = tokens.indexOf(token), start = 0, end = tokenIndex;
    tokens = tokens.slice(start, end); ///
    tokens.forEach(function(token) {
        var tokenEndOfLineToken = token.isEndOfLineToken();
        if (tokenEndOfLineToken) {
            tokenLineIndex++;
        }
    });
    return tokenLineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5MaW5lSW5kZXhGcm9tVG9rZW5BbmRUb2tlbnModG9rZW4sIHRva2Vucykge1xuICBsZXQgdG9rZW5MaW5lSW5kZXggPSAwO1xuXG4gIGNvbnN0IHRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZih0b2tlbiksXG4gICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgZW5kID0gdG9rZW5JbmRleDtcblxuICB0b2tlbnMgPSB0b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCk7ICAvLy9cblxuICB0b2tlbnMuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIHRva2VuTGluZUluZGV4Kys7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdG9rZW5MaW5lSW5kZXg7XG59XG4iXSwibmFtZXMiOlsidG9rZW5MaW5lSW5kZXhGcm9tVG9rZW5BbmRUb2tlbnMiLCJ0b2tlbiIsInRva2VucyIsInRva2VuTGluZUluZGV4IiwidG9rZW5JbmRleCIsImluZGV4T2YiLCJzdGFydCIsImVuZCIsInNsaWNlIiwiZm9yRWFjaCIsInRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxpQ0FBaUNDLEtBQUssRUFBRUMsTUFBTTtJQUM1RCxJQUFJQyxpQkFBaUI7SUFFckIsSUFBTUMsYUFBYUYsT0FBT0csT0FBTyxDQUFDSixRQUM1QkssUUFBUSxHQUNSQyxNQUFNSDtJQUVaRixTQUFTQSxPQUFPTSxLQUFLLENBQUNGLE9BQU9DLE1BQU8sR0FBRztJQUV2Q0wsT0FBT08sT0FBTyxDQUFDLFNBQUNSO1FBQ2QsSUFBTVMsc0JBQXNCVCxNQUFNVSxnQkFBZ0I7UUFFbEQsSUFBSUQscUJBQXFCO1lBQ3ZCUDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=