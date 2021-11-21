<template>
  <div>
    <l-map style="height: 350px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="problem.markerLatLng" v-for="problem in problems" v-bind:key="problem.name">
        <l-popup>{{ problem.name }}</l-popup>
      </l-marker>
    </l-map>

    <ProblemList :problems="problems"/>
  </div>

</template>

<script>
import {Icon} from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';
import ProblemList from "@/components/ReportProblem/ProblemList";

export default {
  name: 'ReportProblemPage',
  components: {
    ProblemList,
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 20,
      center: [47.69548, 8.63317],
      markerLatLng: [47.69548, 8.63317],
      problems: [
        {
          name: 'Trashcan',
          markerLatLng: [47.69548, 8.63317],
          description: "There is an overflowed trashcan",
          picture_url: 'https://libreshot.com/wp-content/uploads/2014/06/trash-can.jpg'
        },
        {
          name: 'Problem 2',
          markerLatLng: [47.695, 8.63317],
          description: "There is a pitfall",
          picture_url: 'https://www.fivestarautosalvage.co.uk/wp-content/uploads/2018/09/pothole.jpg'
        }, {
          name: 'Problem 3',
          markerLatLng: [47.69548, 8.633],
          description: "There is not clean street",
          picture_url: 'https://www.thecourier.com.au/images/transform/v1/resize/frm/storypad-qtXAEZC67LbMeemRuC2bYX/a1f06b16-a939-4567-b556-c85aaf00f085.jpg/w1200_h678_fmax.jpg'
        }
      ]
    };
  }
}
</script>
