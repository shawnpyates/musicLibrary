function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}


Library.prototype.printAllPlaylists = function() {
    console.log(`***** ${this.name} *****`);
    this.playlists.forEach(function(playlist) {
        playlist.printPlaylistInfo();
    });
}

//******************************************************

function Playlist(name) {
    this.name = name;
    this.tracks = [];
    this.currentTrackIndex = 0;
}

Playlist.prototype.printPlaylistInfo = function() {
    console.log(`\n***** PLAYLIST: ${this.name} *****\n`)
    this.tracks.forEach(function(track) {
        track.printTrackInfo();
    });
    this.getAverageRating();
    this.getTotalDuration();
}

Playlist.prototype.getAverageRating = function() {
    let sum = 0;
    this.tracks.forEach(function(track) {
        sum += track.rating;
    });
    let averageRating = (sum / this.tracks.length).toFixed(2);
    console.log(`Average rating for tracks in ${this.name} Playlist: ${averageRating}`);
}

Playlist.prototype.getTotalDuration = function() {
    let sum = 0;
    this.tracks.forEach(function(track) {
        sum += track.duration;
    });
    console.log(`Total duration of all tracks in ${this.name} Playlist: ${sum}`);
}

//*************************************************************** 

function Track(title, rating, duration) {
    this.title = title;
    this.rating = rating;
    this.duration = duration;
}

Track.prototype.printTrackInfo = function() {
    let trackInfo = `Title: ${this.title}\n`;
    trackInfo += `Rating: ${this.rating}\n`;
    trackInfo += `Duration: ${this.duration}\n`;
    console.log(trackInfo);
}

//*******************************************************************

const shawnLibrary = new Library("Shawn's Library", "Shawn");

const modernPop = new Playlist("Modern Pop");
const eightiesHits = new Playlist("80s Hits");
const beatles = new Playlist("Beatles");

const usedToKnow = new Track("Somebody That I Used to Know", 5, 256);
const girlfriend = new Track("Girlfriend", 2, 204);
const hotlingBling = new Track("Hotline Bling", 2, 211);

const comeOnEileen = new Track("Come On Eileen", 4, 233);
const downUnder = new Track("Down Under", 4, 198);
const boysOfSummer = new Track("Boys of Summer", 5, 209); 

const inMyLife = new Track("In My Life", 5, 174);
const blackbird = new Track("Blackbird", 5, 190);
const heyJude = new Track("Hey Jude", 4, 207);

modernPop.tracks.push(usedToKnow, girlfriend, hotlingBling);
eightiesHits.tracks.push(comeOnEileen, downUnder, boysOfSummer);
beatles.tracks.push(inMyLife, blackbird, heyJude);

shawnLibrary.playlists.push(modernPop, eightiesHits, beatles);

shawnLibrary.printAllPlaylists();
