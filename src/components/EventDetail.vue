<template>
  <div class="event-detail-container">
    <h1> Event details: </h1>
    <div v-if="eventDetail" class="event-detail-container__detail">
        <h2 class="title">{{ eventDetail.name }} </h2>
        <div class="entry">
          <div class="entry__row">
            <p class="title">Event ID: </p>
            <p>{{ eventDetail.id }}</p>
          </div>
          <div class="entry__row">
            <p class="title">Event Group ID: </p>
            <p> {{ eventDetail.group_id || "Unknown" }}</p>
          </div>
          <div class="entry__row">
            <p class="title">Timezone: </p>
            <p> {{ eventDetail.timezone || "Unknown" }}</p>
          </div>
          <div class="entry__row">
            <p class="title">Starting time: </p>
            <p> {{ eventDetail.starts | moment }}</p>
          </div>
          <div class="entry__row">
            <p class="title">Ending time: </p>
            <p> {{ eventDetail.ends | moment}}</p>
          </div>
          <div class="entry__row">
            <p class="title">Event venue: </p>
            <p> {{ eventDetail.venue || "Unknown" }}</p>
          </div>
          <div class="entry__row">
            <p class="title">Created: </p>
            <p> {{ eventDetail.createdDate | moment}}</p>
          </div>
          <div class="entry__row">
            <p class="title">Last modified: </p>
            <p> {{ eventDetail.modified | moment }}</p>
          </div>
          <div class="entry__row">
            <p class="title">Beacon enabled: </p>
            <p> {{ eventDetail.is_beacon_enabled ? "Yes" : "No" }}</p>
          </div>
          <div class="view-sessions" @click="() => goSessionsDetail()">
            View all sessions
          </div>
        </div>
    </div>
     <div v-else class="event-detail-container__loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import { getEventDetail } from "../services/apiRequests";
import Loader from "./common/Loader.vue";
import moment from "moment";

export default {
  name: 'EventDetail',
  mounted() {
    getEventDetail(this.$route.params.eventId)
      .then(response => {
        this.eventDetail = response;
        }
      );
  },
  data: function() {
    return {
        eventDetail: null
      };
    },
  methods: {
    goSessionsDetail() {
      this.$router.push(`/events/${this.$route.params.eventId}/sessions`).catch(()=>{});
    } 
  },
  filters: {
    moment: function (date) {
      return moment(date).format('DD MMM YYYY HH:mm');
    }
  },
   components: {
    Loader
  }
}
</script>

<style scoped lang="scss">
  .event-detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    
    &__detail {
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

          .entry{
            width: 100%;
            display: flex;
            flex-direction:column;
            color: #565D61;
            &__row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .title {
                font-weight: bold;
              }
            }
          }
          .view-sessions {
            cursor: pointer;
            margin: 1rem 0;
            color: #42b983;
            font-weight: bold;
            &:hover {
              text-decoration: underline;
            }
          }
        }
    &__loader {
      margin-top: 2rem;
    }
  }
</style>