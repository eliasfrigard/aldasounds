<template>
  <div class="player">
    <!--  -->
    <div class="audio-controls">
      <button id="prev" name="previous" class="action-btn" @click="prevSong">
        <i class="fas fa-backward"></i>
      </button>

      <button id="pause" name="pause" class="action-btn-big" v-if="isPlaying" @click="pauseAudio">
        <i class="fas fa-pause"></i>
      </button>

      <button id="play" name="play" class="action-btn-big" v-else @click="playAudio">
        <i class="fas fa-play"></i>
      </button>

      <button id="next" name="next" class="action-btn" @click="nextSong">
        <i class="fas fa-forward"></i>
      </button>
    </div>

    <!--  -->
    <div class="music-info" v-if="!mobile">
      <h4 class="music-title">{{currentSong.title}}</h4>
      <div class="music-progress-container" @click="setProgress">
        <div class="music-progress"></div>
      </div>
    </div>
    
    <!--  -->
    <div class="window-controls">
      <div class="volume-controls" @mouseover="openVolumeControl" @mouseout="closeVolumeControl">
        <input type="range" class="volume-range" name="" id="" min="0" max="100" value="80" @change="changeVolume">
        
        <button class="action-btn" name="volume up" v-if="volumeValue > 50" @click="muteAudio">
          <i class="fas fa-volume-up"></i>
        </button>

        <button class="action-btn" name="volume down" v-else-if="volumeValue > 0" @click="muteAudio">
          <i class="fas fa-volume-down"></i>
        </button>

        <button class="action-btn" name="mute" v-else @click="unmuteAudio">
          <i class="fas fa-volume-mute"></i>
        </button>
      </div>

      <button class="action-btn" name="close playlist" v-if="listIsOpen" @click="closeList">
        <i class="fas fa-chevron-down"></i>
      </button>

      <button class="action-btn" name="open playlist" v-else @click="openList">
        <i class="fas fa-chevron-up"></i>
      </button>

      <button class="action-btn" name="close player" @click="$emit('close-player')">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="song-container">
      <div class="ui container song-list">
        <table class="song-table">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th class="composer-header">Composer</th>
            <th class="length-header">Length</th>
          </tr>
          <tr class="data-row" v-for="(song, index) in songList" :key="index" :id="index" @click="changeTrack(index)">
            <td class="song-id">{{index + 1}}</td>
            <td class="song-title">{{song.title}}</td>
            <td class="song-album">{{song.album}}</td>
            <td class="song-artist">{{song.artist}}</td>
            <td class="song-composer">{{song.composer}}</td>
            <td class="song-length">{{song.length}}</td>
          </tr>
        </table>
        <div class="mobile-progress" v-if="mobile">
          <div class="music-progress-container" @click="setProgress">
            <div class="music-progress"></div>
          </div>
        </div>
      </div>
    </div>


    <!--  -->
    <audio :src="currentSong.link" class="music-audio" @timeupdate="updateProgress" @ended="nextSong" :volume="volume"></audio>
  </div>
</template>

<script>

export default {
  name: 'Player',
  props: [],
  data() {
    return {
      songList: [{
        title: 'Fen-Fire Polska',
        link: 'music/Fen-Fire Polska.mp3',
        artist: 'ALDA',
        album: 'Nine Worlds',
        composer: 'Elias Frigård',
        length: '3:54'
      },
      {
        title: 'Moment Before Sample',
        link: 'music/samples/MOMENT BEFORE SAMPLE.mp3',
        artist: 'ALDA',
        album: 'Nine Worlds',
        composer: 'Veera Kuisma',
        length: '0:21'
      },
      {
        title: 'Bee Reel Sample',
        link: 'music/samples/BEE REEL SAMPLE.mp3',
        artist: 'ALDA',
        album: 'Nine Worlds',
        composer: 'Veera Kuisma',
        length: '0:17'
      },
      {
        title: 'Ajastaika Sample',
        link: 'music/samples/AJASTAIKA SAMPLE.mp3',
        artist: 'ALDA',
        album: 'Nine Worlds',
        composer: 'Veera Kuisma',
        length: '0:27'
      },
      {
        title: 'Polska In Between Sample',
        link: 'music/samples/POLSKA IN BETWEEN SAMPLE.mp3',
        artist: 'ALDA',
        album: 'Nine Worlds',
        composer: 'Veera Kuisma',
        length: '0:23'
      }],
      currentSong: '',
      currentSongIndex: 0,
      isPlaying: false,
      volumeValue: 80,
      prevVolume: '',
      muted: false,
      listIsOpen: false
    }
  },
  watch: {
    currentSong: function () {
      const allSongs = document.querySelectorAll(`.data-row`)
      
      allSongs.forEach(song => {
        const title = song.querySelector('.song-title').textContent

        if (this.currentSong.title === title) {
          song.classList.add('is-active')
        } else {
          song.classList.remove('is-active')
        }
      })
    }
  },
  mounted() {
    this.currentSong = this.songList[0]
  },
  computed: {
    volume() {
      return this.volumeValue / 100
    },
    mobile() {
      return screen.width < 992
    }
  },
  methods: {
    openVolumeControl() {
      if (screen.width > 992) {
        document.querySelector('.volume-range').style.display = "block"
      }
    },
    closeVolumeControl() {
      document.querySelector('.volume-range').style.display = "none"
    },
    changeVolume(e) {
      this.volumeValue = e.srcElement.value
    },
    muteAudio() {
      this.volumeValue = 0
    },
    unmuteAudio() {
      const currentValue = document.querySelector('.volume-range').value
      this.volumeValue = currentValue
    },
    playAudio() {
      const audio = document.querySelector('.music-audio')

      audio.play()

      this.isPlaying = true
    },
    pauseAudio() {
      document.querySelector('.music-audio').pause()
      this.isPlaying = false
    },
    async loadAndPlayAudio() {
      const audio = document.querySelector('.music-audio')

      this.isPlaying = true
      
      await audio.load()
      await audio.play()
    },
    updateProgress(e) {     
      const progress = document.querySelector('.music-progress')
      const { duration, currentTime } = e.srcElement
      const progressPercent = (currentTime / duration) * 100

      progress.style.width = `${progressPercent}%`
    },
    setProgress(e) {
      const progressContainerWidth = document.querySelector('.music-progress-container').clientWidth
      const clickPosition = e.offsetX

      const audio = document.querySelector('.music-audio')
      const audioDuration = audio.duration
      
      audio.currentTime = (clickPosition / progressContainerWidth) * audioDuration
    },
    nextSong() {
      this.currentSongIndex++

      if (this.currentSongIndex > this.songList.length - 1) {
        this.currentSongIndex = 0
      }

      this.currentSong = this.songList[this.currentSongIndex]

      document.querySelector('.music-audio')
      
      this.loadAndPlayAudio()
    },
    prevSong() {
      this.currentSongIndex--;

      if (this.currentSongIndex < 0) {
        this.currentSongIndex = this.songList.length - 1;
      }

      this.currentSong = this.songList[this.currentSongIndex]
      
      this.loadAndPlayAudio()
    },
    changeTrack(index) {
      this.currentSongIndex = index

      this.currentSong = this.songList[index]

      this.loadAndPlayAudio()
    },
    openList() {
      const list = document.querySelector('.song-container')
      list.style.display = 'flex'

      this.listIsOpen = true
    },
    closeList() {
      const list = document.querySelector('.song-container')
      list.style.display = 'none'

      this.listIsOpen = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player {
  position: fixed;
  height: 75px;
  width: 100vw;
  padding: 0 50px;
  background-color: rgb(4, 46, 66);
  bottom:0;
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.audio-controls, .window-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
}

.action-btn {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  color: rgb(230, 230, 230);
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  margin: 0 20px;
}

.action-btn-big {
  background-color: transparent;
  border: 0;
  font-size: 30px;
  color: rgb(230, 230, 230);
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
}

.action-btn:focus {
  outline: 0;
}

.music-info {
  width: calc(100% - 500px);
}

.music-title {
  text-align: center;
  font-size: 16px;
  color: rgb(230, 230, 230);
  letter-spacing: 1px;
}

.music-progress-container {
  background: rgb(230, 230, 230);
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 5px;
  width: 100%;  
}

.music-progress {
  background-color: #ec3c01;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}

.song-container {
  position: fixed;
  bottom: 75px;
  left: 0;
  width: 100%;
  display: none;
  background-color: rgb(4, 46, 66);
  padding: 50px;
  color: rgb(230, 230, 230);
}

.song-table {
  width: 100%;
  text-align: left;
}

table {
    border-collapse: collapse;
}

th {
  font-family: 'Bad Script', cursive;
  letter-spacing: 3px;
  font-size: 20px;
}

td {
  letter-spacing: 1px;
  font-size: 16px;
}

.data-row:hover {
  background-color: rgb(3, 38, 54);
  cursor: pointer;
}

.is-active {
  background-color: rgb(3, 38, 54);
}

th, td {
  height: 20px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 15px;
}

.song-table tr:last-child td{
    border-bottom:0;
}

.volume-controls {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.volume-controls:hover {
  cursor: pointer;
}

.volume-range {
  display: none;
  transform: rotate(-90deg);
  position:fixed;
  bottom: 110px;
  right: 120px;
  color: #ec3c01;
  z-index: 1;
}

.music-info {
  display: block;
}

.mobile-progress {
  display:none;
}


@media screen and (max-width: 992px) {
  .music-info {
    display:none;
  }

  .audio-controls {
    width: 35%;
  }

  .window-controls {
    width:35%;
  }

  .volume-range {
    display: none;
  }

  .mobile-progress {
    display:block;
    width: 100%;
  }

  .song-container {
    justify-content: center;
  }

  .mobile-progress .music-progress-container {
    height: 10px;
    margin: 20px 0 0 ;
  }

  .song-composer, .song-length, .composer-header, .length-header {
    display: none;
  }
}
</style>
