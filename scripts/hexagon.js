const geojson2h3 = require("geojson2h3");
const continents = require("./Asia.json");
const fs = require("fs");
continents["Asia"].forEach(continent => {
  console.log(continent.properties["NAME"]);
  const hexagons = geojson2h3.featureToH3Set(continent, 1);
  console.log(hexagons);
  const feature = geojson2h3.h3SetToMultiPolygonFeature(hexagons);
  fs.writeFileSync(
    continent.properties["NAME"] + "-hex.json",
    JSON.stringify(feature)
  );
});
