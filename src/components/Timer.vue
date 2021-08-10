<template>
<div class="timer" data-aos="fade-in">
  <h1 class="title">Next show going live in</h1>
  <div class="counter">
    <div class="days">
      <div class="time">
        <div class="time-head">
          <h3>{{ displayDays }}</h3>
          <p>days</p>
        </div>
        <p class="colon">:</p>
      </div>
    </div>
    <div class="hours">
      <div class="time">
        <div class="time-head">
          <h3>{{ displayHours }}</h3>
          <p>hours</p>
        </div>
        <p class="colon">:</p>
      </div>
    </div>
    <div class="minutes">
      <div class="time">
        <div class="time-head">
          <h3>{{ displayMinutes }}</h3>
          <p>minutes</p>
        </div>
        <p class="colon">:</p>
      </div>
    </div>
    <div class="seconds">
      <div class="time">
        <div class="time-head">
          <h3>{{ displaySeconds }}</h3>
          <p>seconds</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Timer',
  props: ['date'],
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
  },
  mounted() {
    const timer = setInterval(() => {
      this.showRemaining(timer)
    }, 1000)

    this.showRemaining(timer)
  },
  methods: {
    showRemaining(timer) {
      const now = new Date()
      const end = moment(this.date).toDate()
      const distance = end.getTime() - now.getTime()

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / this._days)
      const hours = Math.floor((distance % this._days) / this._hours) 
      const minutes = Math.floor((distance % this._hours) / this._minutes) 
      const seconds = Math.floor((distance % this._minutes) / this._seconds)

      this.displayMinutes = minutes < 10 ? '0' + minutes : minutes
      this.displaySeconds = seconds < 10 ? '0' + seconds : seconds
      this.displayHours = hours < 10 ? '0' + hours : hours
      this.displayDays = days < 10 ? '0' + days : days
    }
  }
}
</script>

<style scoped>
.title {
  font-family: 'Bad Script', cursive;
  text-transform: capitalize;
  letter-spacing: 3px;
}

.time-head {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.time-head p {
  font-size: 14px;
}

.timer {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 50px;
}

.counter {
  display: flex; 
}

.time {
  font-size: 50px;
  margin: 0;
  display:flex;
  justify-content: center;
  align-items: flex-start;
}

.time h3 {
  margin: 0;
  font-size: 50px;
  height: 70px;
}

.colon {
  height: 70px;
  margin: 0 20px;
}

.days, .hours, .minutes, .seconds {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .time-head h3, .colon {
    font-size: 40px;
      height: 55px;
  }

  .title {
    font-size: 22px;
  }
}
</style>