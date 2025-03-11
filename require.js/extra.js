define(function () {
  return {
    /**
     * get object copy
     * @param {object} object
     * @returns object
     */
    copy: function (object) {
      return JSON.parse(JSON.stringify(object));
    },

    /**
     * converts mouse position on canvas or something else to real (world) coordinates
     * @param {number} mouseX
     * @param {number} mouseY
     * @param {number} zoom
     * @param {number} cameraOffsetX
     * @param {number} cameraOffsetY
     * @returns {import("../types/types").Coordinates}
     */
    convertMousePointToWorld: function (
      mouseX,
      mouseY,
      zoom,
      cameraOffsetX,
      cameraOffsetY
    ) {
      return {
        x: mouseX / zoom + cameraOffsetX,
        y: mouseY / zoom + cameraOffsetY,
      };
    },
  };
});
