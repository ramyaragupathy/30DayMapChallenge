const hexagonFile = require("./BLR-hex-07.json");
const turf = require("@turf/turf");
const fs = require("fs");
let fc = {
  type: "FeatureCollection",
  features: []
};
hexagonFile.geometry.coordinates.forEach(hexagon => {
  let feature = {
    type: "Feature",
    properties: { area: undefined },
    geometry: { type: "Polygon", coordinates: undefined }
  };
  feature.geometry.coordinates = hexagon;
  feature.properties.area = turf.area(feature) / 1000000;
  fc.features.push(feature);
  fs.appendFileSync("hexagon-split.json", JSON.stringify(feature) + "\n");
});
fs.writeFileSync("hexagon-split-07-fc.json", JSON.stringify(fc));
