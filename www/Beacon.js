"use strict";
function Beacon() {
}

Beacon.prototype.initializeBeacon = function (successCallback, errorCallback) {
  alert('Inside');
  cordova.exec(successCallback, errorCallback, "Beacon", "initializeBeacon", [{
  }])
};

Beacon.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.beacon = new Beacon();
  return window.plugins.beacon;
};

cordova.addConstructor(Beacon.install);
