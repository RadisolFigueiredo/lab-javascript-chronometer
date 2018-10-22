// Constructor



function Chronometer() {
  this.currentTime = 0,
  this.intervalId,
  this.minutes = 0,
  this.second = 0;
}

Chronometer.prototype.startClick = function() {
  let self = this;
  self.intervalId = setInterval(function() {
    self.currentTime += 1;
    if (self.currentTime === 59) {
        return self.currentTime = 0;
      }
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
    if (this.currentTime === 0) {
        minute += 1;
        return minute = 0;
    }

};

Chronometer.prototype.setSeconds = function() {
    if (this.currentTime === 0) {
        second += 1;
        this.currentTime = 0;
    }
};

Chronometer.prototype.twoDigitsNumber = function () {
}
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
