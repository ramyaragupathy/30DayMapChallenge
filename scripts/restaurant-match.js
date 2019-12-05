const turf = require("@turf/turf");
const restaurants = require("./restaurants.json");

let wards = require("./bangalore_wards.json");

restaurants.features.forEach((restaurant, restaurantIndex) => {
  wards.features.forEach(ward => {
    let isInside = turf.inside(restaurant, ward);
    if (isInside) {
      if (ward.properties.hasOwnProperty("count")) {
        ward.properties["count"]++;
      } else {
        ward.properties["count"] = 1;
      }
    }
  });
  if (restaurantIndex === restaurants.features.length - 1) {
    console.log(JSON.stringify(wards));
  }
});
