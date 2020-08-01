"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whilst = whilst;

function whilst(callback) {
  for (;;) {
    var terminate = callback();

    if (terminate) {
      return;
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIndoaWxzdCIsImNhbGxiYWNrIiwidGVybWluYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLFFBQWhCLEVBQTBCO0FBQy9CLFdBQVE7QUFDTixRQUFNQyxTQUFTLEdBQUdELFFBQVEsRUFBMUI7O0FBRUEsUUFBSUMsU0FBSixFQUFlO0FBQ2I7QUFDRDtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaykge1xuICBmb3IoOzspIHtcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIl19