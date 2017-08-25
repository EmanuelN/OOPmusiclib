class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist(playlist){
    this.playlists.push(playlist);
  }
  get tracksList(){
    let tracks = [];
    this.playlists.forEach((playlist)=>{
      playlist.tracks.forEach((track)=>{
        tracks.push(track);
       })
    })
    return tracks
  }
  get playlists(){
    let playlists = [];
    this.playlists.forEach((playlist)=>{
      playlists.push(playlist);
    })
    return playlists
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
l1.addPlaylist(new Playlist('Cool Playlist'));
l1.playlists[0].addTrack(new Track('Cool Song', 5, 141));
l1.playlists[0].
addTrack(new Track('Bad Song', 2, 93));
console.log(l1.tracksList)

