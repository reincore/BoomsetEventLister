import Vue from "vue";

var json = Vue.extend({
  data: function() {
    return {
      count: 3,
      previous: null,
      results: [
        {
          id: 71790,
          name: "Demo Event 3 (More Guests)",
          group_id: 59578,
          timezone: "US/Eastern",
          starts: "2018-05-01T14:28:00",
          ends: "2018-05-05T14:28:00",
          venue: null,
          created: "2018-05-08T07:28:17",
          modified: "2020-07-09T14:47:33",
          is_beacon_enabled: false
        },
        {
          id: 71788,
          name: "Demo Event 2",
          group_id: 59578,
          timezone: "US/Eastern",
          starts: "2018-05-01T14:20:00",
          ends: "2018-10-17T14:20:00",
          venue: null,
          created: "2018-05-08T07:20:13",
          modified: "2020-07-09T14:47:33",
          is_beacon_enabled: false
        },
        {
          id: 71787,
          name: "Demo Event 1",
          group_id: 59578,
          timezone: "US/Eastern",
          starts: "2018-05-01T14:16:00",
          ends: "2018-10-18T14:16:00",
          venue: null,
          created: "2018-05-08T07:17:00",
          modified: "2020-07-09T14:47:33",
          is_beacon_enabled: false
        }
      ],
      next: null
    };
  }
});

module.exports = json;
