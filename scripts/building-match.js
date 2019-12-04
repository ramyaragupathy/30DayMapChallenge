const turf = require("@turf/turf");
const fs = require("fs");
const buildings = require("./buildings.json");
const totalBuildings = buildings.features.length;
let grids = require("./hexagon-split-08-fc.json");
console.log("Total buildings: ", totalBuildings);
console.time("building-match");
buildings.features.forEach((building, buildingCount) => {
  let buildingCentroid = turf.centroid(building);
  //   console.log(buildingCentroid);
  grids.features.forEach(grid => {
    let isInside = turf.inside(buildingCentroid, grid);
    if (isInside) {
      if (grid.properties.buildingCount) {
        grid.properties.buildingCount++;
        console.log(grid);
      } else {
        grid.properties.buildingCount = 1;
      }
    }
  });
  if (buildingCount === totalBuildings - 1) {
    console.log("Last building");
    console.timeEnd("building-match");
    fs.writeFileSync("building-match.json", JSON.stringify(grids));
  }
});
