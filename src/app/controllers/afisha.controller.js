'use strict';
module.exports = function AfishaController(jsonApi, dateService, $state, $location) {
  var vm = this;

  vm.status = "Loading";

  console.log($state.current.name);

  switch($state.current.name) {
    case('afisha.today'):
      console.log('123');
      jsonApi.fetch("http://api.kinopoisk.cf/getTodayFilms?date=" + dateService.getToday()).then(function(response) {
        vm.films = jsonApi.parse(response, 'filmsData');
        console.log(vm.films);
        vm.status = "Ready";
      });
      break;
    case('afisha.soon'):
      jsonApi.fetch("http://api.kinopoisk.cf/getSoonFilms").then(function(response) {
        vm.films = jsonApi.parse(response, 'previewFilms');
        console.log(vm.films);
        vm.status = "Ready";
      });
      break;
  }

  vm.switchPosterSize = function(imgPath, imgWidth) {
    return jsonApi.switchPosterSize(imgPath, imgWidth);
  };

  vm.getClass = function(currentState) {
    return $state.current.name === currentState;
  }
};