const turf = require("@turf/turf");
const fs = require("fs");
let polygons = require("./Asia.json");
let totalPolygons = polygons.Asia.length;
let outputBBox = { type: "FeatureCollection", features: [] };
polygons.Asia.forEach((polygon, polygonIndex) => {
  var bbox = turf.bbox(polygon);

  var bboxSquare = turf.square(bbox);
  var bboxPolygon = turf.bboxPolygon(bboxSquare);
  //   console.log(bboxPolygon);
  outputBBox.features.push(bboxPolygon);
  if (polygonIndex === totalPolygons - 1) {
    fs.writeFileSync("polygons.json", JSON.stringify(outputBBox));
  }
});
