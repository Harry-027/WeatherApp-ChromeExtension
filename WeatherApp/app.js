var app = angular.module('weather', []);

app.controller('Wthr1', ['$scope','$http',function($scope,$http) { 
  var cityy;
  var dtt=[],day=[],nite=[],main=[],desc=[],med1=[];
  var min=[];
  var max=[];
  var med=[];
  var manuall=null;
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  
  var fn = function(cityy){
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q:    cityy,
      mode: 'json',
      appid: 'b81e521a1bae0373be7ede20a1d8bd5f'
    }
  };
  console.log(request);
  $http(request)
    .then(function(response) {
      $scope.data = response.data;
      for(i=0;i<=6;i++) {
        dtt[i]= response.data.list[i].dt;
        dtt[i]= new Date(dtt[i]*1000);
        dtt[i]=dtt[i].getDate() + '/' + (1 + dtt[i].getMonth()).toString() + '/' + dtt[i].getFullYear();
        med[i]= response.data.list[i];
        med1[i]= response.data.list[i].weather[0];
        min[i]=med[i].temp.min;
        max[i]=med[i].temp.max;
        day[i]=med[i].temp.day;
        nite[i]=med[i].temp.night;
        main[i]=med1[i].main;
        desc[i]=med1[i].description;
      }
      console.log(desc,main);
$scope.dats = [
    {Datee: dtt[0], Dayyy: day[0], Night:nite[0], Minn : min[0], Maxx : max[0], Main: main[0], Desc : desc[0]},
    {Datee: dtt[1], Dayyy: day[1], Night:nite[1], Minn : min[1], Maxx : max[1], Main: main[1], Desc : desc[1]},
    {Datee: dtt[2], Dayyy: day[2], Night:nite[2], Minn : min[2], Maxx : max[2], Main: main[2], Desc : desc[2]},
    {Datee: dtt[3], Dayyy: day[3], Night:nite[3], Minn : min[3], Maxx : max[3], Main: main[3], Desc : desc[3]},
    {Datee: dtt[4], Dayyy: day[4], Night:nite[4], Minn : min[4], Maxx : max[4], Main: main[4], Desc : desc[4]},
    {Datee: dtt[5], Dayyy: day[5], Night:nite[5], Minn : min[5], Maxx : max[5], Main: main[5], Desc : desc[5]},
    {Datee: dtt[6], Dayyy: day[6], Night:nite[6], Minn : min[6], Maxx : max[6], Main: main[6], Desc : desc[6]}
  ];
  
    }).
    catch(function(response) {
      $scope.data = response.data;
    });
};

  var fn1 = function(fn) {
  $http.get('https://freegeoip.net/json/').then(function(resp){
     cityy = resp.data.city ;
     $scope.stt = resp.status;
     console.log(resp.status);
     if (resp.data.city=='') {
     $scope.m="Can't locate your city-Below Forecast for: Pune.." ;
     cityy='Pune'; 
                             }
     else 
     $scope.m="Current Location - " + cityy;
     console.log(cityy);   
     fn(cityy);
}).catch(function(response) {
          $scope.wll = response.data || "Request failed";
          $scope.stt = response.status;
          $scope.kl= "Unable to fetch the current location...Please try later or refresh the page..."
          console.log($scope.kl)});
}

   fn1(fn);
$scope.fn3 = function(){
manuall=$scope.manual;
console.log(manuall);
$scope.m= "Given Location - " + manuall;
fn(manuall);
}

}]);