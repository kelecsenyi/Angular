import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  WeatherData:any;

  constructor() { }

  ngOnInit(): void {
    this.WeatherData={
      main:{},
      isDay:true
    }
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('{ "coord": {   "lon": -122.08,   "lat": 37.39 }, "weather": [   {     "id": 800,     "main": "Clear",     "description": "clear sky",     "icon": "01d"   } ], "base": "stations", "main": {   "temp": 282.55,   "feels_like": 281.86,   "temp_min": 280.37,   "temp_max": 284.26,   "pressure": 1023,   "humidity": 100 }, "visibility": 10000, "wind": {   "speed": 1.5,   "deg": 350 }, "clouds": {   "all": 1 }, "dt": 1560350645, "sys": {   "type": 1,   "id": 5122,   "message": 0.0139,   "country": "US",   "sunrise": 1560343627,   "sunset": 1560396563 }, "timezone": -25200, "id": 420006353, "name": "Mountain View", "cod": 200 }')
    .then((result) => {
      result.json();
    }).then((data) => {
      this.setWeatherData(data);
    });
    //let data = JSON.parse('{ "coord": {   "lon": -122.08,   "lat": 37.39 }, "weather": [   {     "id": 800,     "main": "Clear",     "description": "clear sky",     "icon": "01d"   } ], "base": "stations", "main": {   "temp": 282.55,   "feels_like": 281.86,   "temp_min": 280.37,   "temp_max": 284.26,   "pressure": 1023,   "humidity": 100 }, "visibility": 10000, "wind": {   "speed": 1.5,   "deg": 350 }, "clouds": {   "all": 1 }, "dt": 1560350645, "sys": {   "type": 1,   "id": 5122,   "message": 0.0139,   "country": "US",   "sunrise": 1560343627,   "sunset": 1560396563 }, "timezone": -25200, "id": 420006353, "name": "Mountain View", "cod": 200 }');
    //this.setWeatherData(data);
  }

  setWeatherData(data:any){
    this.WeatherData = data;
    let currentDate = new Date();
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp -273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min -273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max -273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like-273.15).toFixed(0);
    
  }
}
