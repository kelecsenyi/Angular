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
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=budapest&appid=a4820b2b7fd65cfcc5e5a0e36e277191')
    .then((result) => {
      return result.json();
    }).then((data) => {
      return this.setWeatherData(data);
    });
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
