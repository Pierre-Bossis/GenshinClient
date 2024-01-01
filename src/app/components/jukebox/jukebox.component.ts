import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent {
  currentTrack = 0;
  isPaused = false;
  progress: number = 0;
  currentTime: string = '0:00';
  totalTime: string = '0:00';
  @ViewChild('player') player: any;
  audioLinks = [
    'Mcz3yZSUVI8',
    'tIq41I2WT70',
    'QFSunKPD-Zc',
    'tiulg9ySfR8',
    'osuoqNILLXo',
    'VqtScyk2C5A',
    'lsSz0to5MnA',
    'NLEqRNhv6gs',
    'F_S8EeiJjPE',
    'khHAaErEqTQ'
  ];
  
  
  //changer de piste
  changeTrack(track:number){    
    this.currentTrack = track
    this.playAuto()
  }


  ngOnInit() {
    this.startTimeInterval();
    setInterval(() => {
      this.updateProgress();
    }, 1000);
  }

  startTimeInterval() {
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  //afficher dynamiquement le temps écoulé
  updateCurrentTime() {
    if (this.player && this.player.getCurrentTime) {
      const currentSeconds = Math.floor(this.player.getCurrentTime());
      const minutes = Math.floor(currentSeconds / 60);
      const seconds = currentSeconds % 60;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      this.currentTime = `${minutes}:${formattedSeconds}`;
    }
  }

  //avance 10 s
  seekForward() {
    if (this.player && this.player.seekTo) {
      const newTime = this.player.getCurrentTime() + 10
      this.player.seekTo(newTime, true);
    }
  }

  //recule 10s
  seekBackward() {
    if (this.player && this.player.seekTo) {
      const newTime = Math.max(0, this.player.getCurrentTime() - 10)
      this.player.seekTo(newTime, true);
    }
  }

  //temps total de la musique
  getTotalDuration(): string {
    if (this.player && this.player.getDuration) {
      const totalSeconds = Math.floor(this.player.getDuration());
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds - minutes * 60;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${formattedSeconds}`;
    }
    return '0:00';
  }

  //piste suivante
  next(){
    if(this.currentTrack < this.audioLinks.length -1)
      this.currentTrack += 1
      this.playAuto()
  }

  //piste précédente
  previous(){
    if(this.currentTrack > 0)
      this.currentTrack -= 1
      this.playAuto()
  }
  
  //pause ou reprendre
  pause() {
    if (!this.isPaused) {
      this.player.pauseVideo();
      this.isPaused = true;
    } else {
      this.player.playVideo();
      this.isPaused = false;
    }
  }

  //afficher la progression dynamiquement
  updateProgress() {
    if (this.player && this.player.getCurrentTime && this.player.getDuration) {
      const currentTime = this.player.getCurrentTime();
      const totalTime = this.player.getDuration();
      this.progress = (currentTime / totalTime) * 100;
    }
  }

  //play la vidéo dés qu'on a clické sur suivant ou sur une piste précise
  private playAuto() {
    setTimeout(() => {
      if (this.player && this.player.playVideo) {
        this.player.playVideo();
      }
    }, 100);
  }
}
