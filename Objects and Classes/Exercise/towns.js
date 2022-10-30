function towns(arr) {
  class Town {
    constructor(towns, latitude, longitude) {
      (this.towns = towns),
        (this.latitude = (+latitude).toFixed(2)),
        (this.longitude = (+longitude).toFixed(2));
    }
    creatingObject() {
      let townObject = {
        town: this.towns,
        latitude: this.latitude,
        longitude: this.longitude,
      };
      console.log(townObject);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let [towns, latitude, longitude] = arr[i].split(" | ");
    let town = new Town(towns, latitude, longitude);
    town.creatingObject();
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
