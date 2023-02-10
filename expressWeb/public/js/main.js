let btnclick =  document.getElementById("searchbtn");
let plday = document.getElementById('day');
let pldate = document.getElementById('date');
let getcity = document.getElementById('cityName');
// let mycity = getcity.value;
let addcity = document.getElementById('city_name');
let temp = document.getElementById('temp');
let deg = document.getElementById('deg');
let cen = document.getElementById('cen');
let temp_status = document.getElementById('temp_status');

var weekday = new Array(7);
weekday[0] = "sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


var months = new Array(12);
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";
months[6] = "Jul";
months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";

const getInfo = async(event)=>{
    event.preventDefault();
let mycity = getcity.value;

//    alert("button is clicked");
   let mydate = new Date();
  const myday =  mydate.getDay();
  const day = weekday[myday];
  const date = mydate.getDate();
  const year = mydate.getFullYear();
  const mymoth = mydate.getMonth();
  const month = months[mymoth];
  console.log(month);

  if (mycity==="") {
      addcity.innerText = "please write city name before search";
    }
    else{

        try {
            
            
        pldate.innerHTML = `${date}${month}${year}`;
        plday.innerHTML = `${day}`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${mycity}&appid=6450a159b75b1665aa53bb27312c259c`;
    

    const response = await fetch(url);

    const obj = await response.json();
     var arr = [obj];
        
     console.log(arr);
     let mytemp22 = arr[0].main.temp;
     
     
     let output = mytemp22-273;
     temp.innerText =  Math.floor(output);
     deg.innerText = "o";
     cen.innerText = "C";
     let country = arr[0].sys.country;
     addcity.innerText = `${mycity},${country}`;
  console.log(arr[0].weather[0].main=='Clouds');
  if (arr[0].weather[0].main=='Clouds') {
    temp_status.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
  }
  
  if (arr[0].weather[0].main=='Clear') {
    temp_status.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (arr[0].weather[0].main=='Rain') {
    temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
  }

        } catch (error) {
            console.log(error);
      addcity.innerText = "please write city name properly";
            
        }
        
}

}
btnclick.addEventListener("click",getInfo);
