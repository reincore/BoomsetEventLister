<template>
  <div class="event-detail-container">
    <h1> Event details: </h1>
    <div v-if="eventDetail" class="event-detail-container__detail">
      <p>Event ID: {{ eventDetail.id }}</p>
    </div>
     <div  v-else class="event-detail-container__loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import { getEventDetail } from "../services/apiRequests";
import Loader from "./common/Loader.vue";

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
      this.$router.push(`/events/${this.$route.params.eventId}/sessions`);
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
    
    &__detail{
      display: flex;
      flex-direction: column;
    }
    &__loader {
      margin-top: 2rem;
    }
  }
</style>