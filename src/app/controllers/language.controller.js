'use strict';
module.exports = function LanguageController($translate, $state) {
  var vm = this;

  vm.changeLanguage = function() {
    if($translate.use() == 'en') {
      $translate.use('ru');
    }
    else {
      $translate.use('en');
    }
    $state.reload();
  };

};