"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "paddingFromPaddingLength", {
    enumerable: true,
    get: function() {
        return paddingFromPaddingLength;
    }
});
const _necessary = require("necessary");
const _constants = require("../constants");
const { SPACE_CHARACTER } = _necessary.characters;
function paddingFromPaddingLength(paddingLength) {
    let padding = _constants.EMPTY_STRING;
    for(let position = 0; position < paddingLength; position++){
        padding += SPACE_CHARACTER;
    }
    return padding;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgU1BBQ0VfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSBFTVBUWV9TVFJJTkc7XG5cbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9IFNQQUNFX0NIQVJBQ1RFUjtcbiAgfVxuXG4gIHJldHVybiBwYWRkaW5nO1xufVxuIl0sIm5hbWVzIjpbInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsIkVNUFRZX1NUUklORyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRZ0JBOzs7ZUFBQUE7OzsyQkFOVzsyQkFFRTtBQUU3QixNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHQyxxQkFBVTtBQUUvQixTQUFTRix5QkFBeUJHLGFBQWE7SUFDcEQsSUFBSUMsVUFBVUMsdUJBQVk7SUFFMUIsSUFBSyxJQUFJQyxXQUFXLEdBQUdBLFdBQVdILGVBQWVHLFdBQVk7UUFDM0RGLFdBQVdIO0lBQ2I7SUFFQSxPQUFPRztBQUNUIn0=