function songs(arr) {
  class Song {
    constructor(typeList, name, time) {
      (this.typeList = typeList), (this.name = name), (this.time = time);
    }
    favourite() {
      console.log(this.name);
    }
  }
  let numberOfSongs = arr.shift();
  let lastTypeOfList = arr[numberOfSongs];
  for (let i = 0; i < numberOfSongs; i++) {
    let [typeList, name, time] = arr[i].split("_");
    let song = new Song(typeList, name, time);

    if (lastTypeOfList === "all") {
      song.favourite();
    } else {
      switch (typeList) {
        case lastTypeOfList:
          song.favourite();
      }
    }
  }
}

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
