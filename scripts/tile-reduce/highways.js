"use strict";

module.exports = function(data, tile, writeData, done) {
  //   var match = [];
  var result = data.osm.osm.features.filter(function(val) {
    if (val.properties.waterway) {
      //   if (val.properties.hasOwnProperty("name")) {
      //     if (val.properties.name.includes("NH")) {
      if (val.properties.waterway === "river") {
        return true;
      }

      //     }
      //   }
    }
  });

  //   for (var i = 0; i < data.osm.osm.features.length; i++) {
  //     var feature = data.osm.osm.features[i];
  //     if (feature.properties.highway) {
  //       if (feature.properties.hasOwnProperty("name")) {
  //         if (feature.properties.name.includes("Ring")) {
  //           match.concat(feature);
  //         }
  //       }
  //     }
  //     if ((i = data.osm.osm.features.length - 1)) {
  //       console.log("Match: ", match);
  //       done(null, match);
  //     }
  //   }
  done(null, result);
};
