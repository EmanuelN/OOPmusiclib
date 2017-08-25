class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist(playlist){
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }
  addTrack(track){
    this.tracks.push(track);
  }
  get totalDuration(){
    let duration = 0;
    this.tracks.forEach((element)=>{
      duration += element.length;
    })
    return duration
  }
  get overallRating(){
    let rating = 0;
    this.tracks.forEach((element)=>{
      rating += element.rating;
    })
    rating = rating/this.tracks.length;
    return rating;
  }
}

class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}
l1 = new Library('MyLibrary', 'Emanuel');
p1 = new Playlist('Cool Playlist');
t1 = new Track('Cool Song', 5, 141);
t2 = new Track('Bad Song', 2, 93);
p1.addTrack(t1);
p1.addTrack(t2);
l1.addPlaylist(p1);
console.log(l1.playlists[0].totalDuration);
console.log(l1.playlists[0].overallRating);