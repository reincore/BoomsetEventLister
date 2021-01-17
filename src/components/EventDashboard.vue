<template>
  <div class="dashboard-container">
    <h1> Listing all {{ eventCount }} events: </h1>
    <div class="dashboard-container__cards">
      <div class="card-container" v-if="eventList">
        <div v-for="event in eventList" :key="event.id" class="card-container__card" @click="() => goEventDetail(event.id)">
          <p class="text">{{ event.name }}</p> 
          <p class="text--gray">Event ID: {{ event.id}}</p>
        </div> 
      </div>
      <div v-else class="dashboard-container__loader">
       <Loader />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./common/Loader.vue";
import { getEventsList } from "../services/apiRequests";

export default {
  name: 'EventDashboard',
  mounted() {
    getEventsList()
      .then(response => {
        this.eventList = response.results;
        this.eventCount = response.count;
        }
      );
  },
  data: function() {
    return {
        eventList: null,
        eventCount: null
      };
    },
  methods: {
    goEventDetail(eventId) {
      this.$router.push(`eventDetail/${eventId}`).catch(()=>{});
    } 
  },
   components: {
    Loader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .dashboard-container{
    display: flex;
    flex-direction: column;
    margin-top:2rem;

    &__loader{
      margin-top: 2rem;
    }

    &__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #42b983;
    
    .card-container{
      &__card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        padding: 1rem 5rem;
        background: white;
        margin: 1.5rem;
        box-shadow: 0px 0px 0px grey;
        -webkit-transition:  box-shadow .3s ease-out;
        box-shadow: .8px .9px 3px grey;
        border-radius: 6px;

          &:hover {
            box-shadow: 1px 8px 20px grey;
            -webkit-transition:  box-shadow .3s ease-in;
          }

          .text{
            font-size: 1.5rem;
            &--gray {
              color: #565D61;
            }
          }
        }
      }
    }
  }
</style>
