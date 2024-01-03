import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent{
  
  audioLinks: any[] = [
    {id:'Mcz3yZSUVI8', titre:'Main theme'},
    {id:'tIq41I2WT70', titre:'Rage Beneath the Mountains'},
    {id:'QFSunKPD-Zc', titre:'Symphony of Boreal Wind'},
    {id:'VqtScyk2C5A', titre:'Caelestinum Finale Termini'},
    {id:'tiulg9ySfR8', titre:'Fontaine'},
    {id:'osuoqNILLXo', titre:'Pluie sur la ville'},
    {id:'lsSz0to5MnA', titre:'Rondeau des fleurs et des rapieres'},
    {id:'NLEqRNhv6gs', titre:'Polumnia Omnia'},
    {id:'F_S8EeiJjPE', titre:'Le Souvenir avec le crepuscule'},
    {id:'khHAaErEqTQ', titre:'Virelai des marees'},
    {id:'y9n984n_dAQ', titre:'Before Dawn, at the Winery'},
    {id:'7b4obknFj4c', titre:'Moonlike Smile'},
    {id:'3CV4yrXm9qI', titre:'Lovers\' Oath'},
    {id:'OccVHia2I7c', titre:'Where All Waters Converge (Day)'}
  ]
  currentTrack = this.audioLinks[0].id
  nameCurrentTrack:string = this.audioLinks[0].titre
  index:number= 0
  isPaused = false;
  progress: number = 0
  currentTime: string = '0:00'
  totalTime: string = '0:00'
  @ViewChild('player') player: any; 
  
  //changer de piste
  changeTrack(trackId: string) {    
    this.currentTrack = trackId;
    this.playAuto();
    this.index = this.audioLinks.findIndex(item => item.id === trackId);
    this.nameCurrentTrack = this.audioLinks[this.index].titre
    this.isPaused = false
  }


  ngOnInit() {
    this.startTimeInterval();
    setInterval(() => {
      this.updateProgress();
    }, 1000);
    this.isPaused = true
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

// Avancer vers la piste suivante
next() {
  if (this.index < this.audioLinks.length - 1) {
    this.index++
    this.currentTrack = this.audioLinks[this.index].id
    this.nameCurrentTrack = this.audioLinks[this.index].titre
    this.playAuto();
    this.isPaused = false
  }
}

// Revenir à la piste précédente
previous() {
  if (this.index > 0) {
    this.index--;
    this.currentTrack = this.audioLinks[this.index].id
    this.nameCurrentTrack = this.audioLinks[this.index].titre
    this.playAuto();
    this.isPaused = false
  }
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
    }, 200);
  }

}
