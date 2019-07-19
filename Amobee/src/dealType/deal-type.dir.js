import angular from 'angular';
import dealTypeCtrl from './deal-type.vc.js';
import dealTemplate from './deal-type.vc.html';

angular.module('dealinput', ['dealTypeCtrl'])
.directive('dealinput',() => {
return {
    restrict: 'E',
    template: dealTemplate,
    require:'^ngModel',
    controller: dealTypeCtrl
    };
});