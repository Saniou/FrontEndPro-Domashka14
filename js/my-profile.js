const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
console.log(width+' * '+height);
console.log("Total width/height: ", screen.width + " * " + screen.height);

const successCallback = (position) => {
    console.log(position);
  };
  const errorCallback = (error) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);