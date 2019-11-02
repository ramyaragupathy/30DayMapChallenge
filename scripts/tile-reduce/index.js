//bbox: [-122.05862045288086, 36.93768132842635, -121.97296142578124, 37.00378647456494]

"use strict";
var tileReduce = require("tile-reduce");
var path = require("path");
var fs = require("fs");
var fc = {
  type: "FeatureCollection",
  features: []
};
// var argv = require('minimist')(process.argv.slice(2));
// var mbtilesPath = argv.mbtiles;

tileReduce({
  zoom: 12,
  map: path.join(__dirname, "/highways.js"),
  sources: [
    {
      name: "osm",
      mbtiles: __dirname + "/india.mbtiles",
      raw: false
    }
  ]
})
  .on("reduce", function(match) {
    // if (feature.length > largest.length) {
    //   largest.length = feature.length;
    //   largest.feature = feature.feature;
    // }
    // console.log("Match: ", match);
    if (match.length > 0) {
      match.forEach(element => {
        fc.features.push(element);
      });
    }
    // console.log("REDUCE FC: ", JSON.stringify(fc));
  })
  .on("end", function() {
    // write the largest roundabout to stderr
    // console.log("END FC: ", JSON.stringify(fc));
    fs.writeFileSync("rivers.geojson", JSON.stringify(fc));
  });
