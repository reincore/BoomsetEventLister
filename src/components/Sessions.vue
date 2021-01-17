<template>
  <div class="sessions-container">
    <h1>Sessions list</h1>
    <p>Event ID: {{ $route.params.eventId  }}</p>
  </div>
</template>

<script>
export default {
  name: 'Sessions',
  watch: {
      "$route" (to, from) {
        alert(to.params.eventId, from.params.eventId);
      }
    }
}
</script>