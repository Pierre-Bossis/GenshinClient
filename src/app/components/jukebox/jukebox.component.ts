import { Component } from '@angular/core';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent {
  currentTrackIndex = 0;
  audioLinks = [
    'https://www.youtube.com/embed/Mcz3yZSUVI8?si=HEesuBQsYar79VHH',
    'https://www.youtube.com/embed/QFSunKPD-Zc?si=rDkJHbXi9u_cb2of',
    'https://www.youtube.com/embed/52bunlcH60I?si=cKlgA0-wdDUaDCZR',
  ];


  play() {
    const audioPlayer = new Audio(this.audioLinks[this.currentTrackIndex]);
    audioPlayer.play();
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.audioLinks.length;
  }

  previousTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.audioLinks.length) % this.audioLinks.length;
  }
}
