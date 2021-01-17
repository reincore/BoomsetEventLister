<template>
  <div class="sessions-container">
    <h1> Listing all {{ sessionCount }} available sessions: </h1>
    <div class="go-back" @click="() => goEventDetail()">Back to event details</div>
    <div v-if="sessionDetails" class="sessions-container__detail">
      <div v-for="session in sessionDetails" :key="session.id" class="detail">
         <h2> {{ session.name }}</h2>
        <div class="entry">
          <p class="title">Session ID:</p>
          <p> {{ session.id }}</p>
        </div>
        <div class="entry">
          <p class="title">Capacity: </p>
          <p>{{ session.capacity }}</p>
        </div>
        <div class="entry">
          <p class="title">Overbook capacity:</p>
          <p> {{ session.overbook_capacity }}</p>
        </div>
        <div class="entry">
          <p class="title">Overlap enabled:</p>
          <p> {{ session.overlap_enabled ? "Yes" : "No" }}</p>
        </div>
        <div class="entry">
          <p class="title">Starts on:</p>
          <p> {{ session.starts | moment  }}</p>
        </div>
        <div class="entry">
          <p class="title">Ends on:</p>
          <p> {{ session.ends | moment }}</p>
        </div>
        <div class="entry">
          <p class="title">Polls enabled:</p>
          <p> {{session.polls_enabled ? "Yes" : "No" }} </p>
        </div>
        <div class="entry">
          <p class="title">Chat enabled:</p>
          <p> {{session.chat_enabled ? "Yes" : "No" }} </p>
        </div>
      </div>
    </div>
     <div v-else class="sessions-container__loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import { getEventSessions } from "../services/apiRequests";
import Loader from "./common/Loader.vue";
import moment from "moment";

export default {
  name: 'Sessions',
  mounted() {
    getEventSessions(this.$route.params.eventId)
      .then(response => {
        this.sessionDetails = response.results;
        this.sessionCount = response.count;
        }
      );
  },
  data: function() {
    return {
        sessionDetails: null,
        sessionCount: null
      };
    },
  
  methods: {
    goEventDetail() {
      this.$router.go(-1);
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('DD MMM YYYY HH:mm');
    }
  },
   components: {
    Loader
  },
}
</script>

<style scoped lang="scss">
  .sessions-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .go-back {
      cursor: pointer;
      margin: 1rem 0;
      color: #42b983;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }

    &__loader{
      margin-top: 2rem;
    }

    &__detail {
        .detail{
           width:50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem 5rem;
          min-height: 20rem;
          background: white;
          margin: 1.5rem;
          box-shadow: 0px 0px 0px grey;
          -webkit-transition:  box-shadow .3s ease-out;
          box-shadow: .8px .9px 3px grey;
          border-radius: 6px;
          @media screen and (max-width:768px) {
            padding: 1rem 2rem;
            width: auto;
          }

            &:hover {
              box-shadow: 1px 8px 20px grey;
              -webkit-transition:  box-shadow .3s ease-in;
            }
          .entry {
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: #565D61;
            .title{
              font-weight: bold;
            }
          }
        }
      }
  }
</style>