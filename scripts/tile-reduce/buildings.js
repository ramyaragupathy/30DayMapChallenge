"use strict";
const fs = require("fs");
const blr = require("./blr.json");
const turf = require("turf");

fs.writeFileSync("building.geojson");
module.exports = function(data, tile, writeData, done) {
  var result = data.osm.osm.features.filter(function(val) {
    if (val.properties.building && val.properties["@type"] === "way") {
      if (val.properties.building === "yes") {
        let buildingCentroid = turf.centroid(val);
        let isInside = turf.inside(buildingCentroid, blr.features[0]);
        if (isInside) {
          fs.appendFileSync("building.geojson", JSON.stringify(val) + "\n");
        }
      }
    }
  });

  done(null, result);
};
