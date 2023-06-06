<template>
    <div>
        <form @submit.prevent="fetchData">
        <div class="form-group">
            <label for="date">Date</label>
            <input type="date" name="date" id="date" v-model="date">
        </div>
        <div class="form-group">
            <label for="lat">Latitude</label>
            <input type="text" name="lat" id="lat" v-model="latitude">
        </div>
        <div class="form-group">
            <label for="lng">Longitude</label>
            <input type="text" name="lng" id="lng" v-model="longitude">
        </div>
        <button type="button" @click="getGeolocation">Get current position</button>
        <button type="submit">Send</button>
        </form>
        <ul>
        <li v-for="sunlightInfo in sunlightData" :key="sunlightInfo.date">
            <p>Date: {{sunlightInfo.date}}</p>
            <p>Total hours of daylight: {{sunlightInfo.total_hours_of_light}}</p>
            <p>---------------------------------</p>
        </li>
        </ul>
    </div>
  </template>
  
  <script>
    import axios from 'axios';

    export default {
      data() {
        return {
          date: new Date(),
          latitude: '',
          longitude: '',
          sunlightData: []
        }
      },
      methods: {
        fetchData() {
            this.sunlightData = [];
            const queryParams = {
                date: new Date(this.date).toISOString(),
                lat: this.latitude,
                lng: this.longitude,
            };
            axios.get('http://localhost:5000/sunlight-one-year', { params: queryParams })
                .then(response => {
                    this.sunlightData = response.data;
            });
        },
        async getGeolocation() {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                this.latitude = position.coords.latitude.toString();
                this.longitude = position.coords.longitude.toString();
            } catch (error) {
                console.error(error);
            }
        }
      }
    }
  </script>