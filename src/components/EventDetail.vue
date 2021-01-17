<template>
  <div class="event-detail-container">
    <h1>Event detail</h1>
     <p>Event ID: {{ $route.params.eventId }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventDetail',
  watch: {
    "$route" (to, from) {
      alert(to.params.eventId, from.params.eventId);
    }
  }
}
</script>