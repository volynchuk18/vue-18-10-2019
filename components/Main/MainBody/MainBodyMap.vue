<template>
  <div id="map">

  </div>
</template>

<script>
  import mapStyles from '~/static/map/googleMapStyle.json';
  import { mapGetters } from 'vuex';

  export default {
    name: "MainBodyMap",
    data() {
      return {
        mapStyles,
        map: null,
        marker: null
      }
    },
    watch: {
      markerPosition(to) {
        this.changeMapPositionHandler(to);
        this.changeMarkerPositionHandler(to)
      }
    },
    mounted() {
      this.initializeMap();
      this.createMarker();
    },
    methods: {
      initializeMap() {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: this.mapPosition,
          zoom: 8,
          styles: this.mapStyles,
          disableDefaultUI: true
        });
      },
      changeMapPositionHandler(position) {
        this.map.setCenter(position)
      },
      changeMarkerPositionHandler(position) {
        this.marker.setPosition(position)
      },
      createMarker() {
        this.marker = new google.maps.Marker({
          position: this.markerPosition,
          map: this.map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 15,
            fillColor: "#66ff4c",
            fillOpacity: 1,
            strokeWeight: 0.4
          },
        });
      }
    },
    computed: {
      ...mapGetters({
        mapPosition: 'mapController/mapPosition',
        markerPosition: 'mapController/markerPosition'
      })
    }
  }
</script>

<style scoped>

</style>
