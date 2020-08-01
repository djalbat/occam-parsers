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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy5qcyJdLCJuYW1lcyI6WyJ3aGlsc3QiLCJjYWxsYmFjayIsInRlcm1pbmF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxRQUFoQixFQUEwQjtBQUMvQixXQUFRO0FBQ04sUUFBTUMsU0FBUyxHQUFHRCxRQUFRLEVBQTFCOztBQUVBLFFBQUlDLFNBQUosRUFBZTtBQUNiO0FBQ0Q7QUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2spIHtcbiAgZm9yKDs7KSB7XG4gICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2soKTtcblxuICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==