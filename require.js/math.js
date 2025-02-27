define(function () {
  var TWO_PI = Math.PI * 2;

  /**
   * normalizes degrees like -123 or 456, which are more than 360 or less 0
   * @param {number} deg
   * @returns {number}
   */
  function normalizeDegrees(deg) {
    if (typeof deg !== "number") {
      return 0;
    }

    return deg < 0 || deg > 360 ? (deg + 360) % 360 : deg;
  }

  /**
   * normalizes degrees like -1.23 or 6.712, which are more than 6.28 or less 0
   * @param {number} deg
   * @returns {number}
   */
  function normalizeRadians(rad) {
    if (typeof rad !== "number") {
      return 0;
    }

    return rad < 0 || rad > TWO_PI ? (rad + TWO_PI) % TWO_PI : rad;
  }

  /**
   * convert radians to degrees
   * @param {number} rad
   * @returns {number}
   */
  function radToDeg(rad) {
    if (typeof rad !== "number") {
      return 0;
    }

    return (rad * 180) / Math.PI;
  }

  /**
   * converts radians to coordinates
   * @param {number} rad
   * @returns {Coordinates}
   */
  function radToCoordinates(rad) {
    if (typeof rad !== "number") {
      return { x: 0, y: 0 };
    }

    return {
      x: Math.cos(rad),
      y: Math.sin(rad),
    };
  }

  /**
   * get random value between two numbers
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  function random(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
      return 0;
    }

    return Math.random() * (max - min) + min;
  }

  /**
   * function which calculates direction of increasing or decreasing value of rotation in radians
   * @param {number} rad
   * @param {number} radTo
   * @param {number} rotationSpeed
   * @returns {number}
   */
  function rotateTo(rad, radTo, rotationSpeed) {
    if (
      typeof rad !== "number" ||
      typeof radTo !== "number" ||
      typeof rotationSpeed !== "number"
    ) {
      return 0;
    }

    if (Math.abs(rad - radTo) <= rotationSpeed) {
      return radTo;
    }

    if (rad < radTo) {
      if (Math.abs(rad - radTo) < Math.PI) {
        rad += rotationSpeed;
      } else {
        rad -= rotationSpeed;
      }
    } else {
      if (Math.abs(rad - radTo) < Math.PI) {
        rad -= rotationSpeed;
      } else {
        rad += rotationSpeed;
      }
    }

    return rad;
  }

  /**
   * converts coordinates to radians
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  function coordinatesToRad(x, y) {
    return Math.atan2(y, x);
  }

  return {
    normalizeDegrees,
    normalizeRadians,
    radToDeg,
    radToCoordinates,
    random,
    rotateTo,
    coordinatesToRad,
  };
});
