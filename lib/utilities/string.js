"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.paddingFromPaddingLength = paddingFromPaddingLength;
var _constants = require("../constants");
function paddingFromPaddingLength(paddingLength) {
    var padding = _constants.EMPTY_STRING;
    for(var position = 0; position < paddingLength; position++){
        padding += _constants.SINGLE_SPACE;
    }
    return padding;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sIm5hbWVzIjpbIkVNUFRZX1NUUklORyIsIlNJTkdMRV9TUEFDRSIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFJSSx3QkFBd0IsR0FBeEIsd0JBQXdCO0FBRkcsR0FBYyxDQUFkLFVBQWM7U0FFekMsd0JBQXdCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkQsR0FBRyxDQUFDLE9BQU8sR0FIOEIsVUFBYztJQUt2RCxHQUFHLENBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLGFBQWEsRUFBRSxRQUFRLEdBQUksQ0FBQztRQUM1RCxPQUFPLElBTmdDLFVBQWM7SUFPdkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO0FBQ2hCLENBQUMifQ==