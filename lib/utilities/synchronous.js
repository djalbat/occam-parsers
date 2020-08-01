"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whilst = whilst;

function whilst(callback) {
  for (var count = 0; count < Infinity; count++) {
    var terminate = callback(count);

    if (terminate) {
      return;
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bmNocm9ub3VzLmpzIl0sIm5hbWVzIjpbIndoaWxzdCIsImNhbGxiYWNrIiwiY291bnQiLCJJbmZpbml0eSIsInRlcm1pbmF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxRQUFoQixFQUEwQjtBQUMvQixPQUFJLElBQUlDLEtBQUssR0FBRyxDQUFoQixFQUFtQkEsS0FBSyxHQUFHQyxRQUEzQixFQUFxQ0QsS0FBSyxFQUExQyxFQUE4QztBQUM1QyxRQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsS0FBRCxDQUExQjs7QUFFQSxRQUFJRSxTQUFKLEVBQWU7QUFDYjtBQUNEO0FBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrKSB7XG4gIGZvcihsZXQgY291bnQgPSAwOyBjb3VudCA8IEluZmluaXR5OyBjb3VudCsrKSB7XG4gICAgY29uc3QgdGVybWluYXRlID0gY2FsbGJhY2soY291bnQpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIl19