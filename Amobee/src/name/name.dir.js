import angular from 'angular';
import nameInputCtrl from './name.vc.js'
import nameInputTemplate from './name.vc.html';

angular.module('nameinput', ['nameInputCtrl'])
.directive('nameinput',() => {
return {
    restrict: 'E',
    template: nameInputTemplate,
    require:'^ngModel',
    controller: nameInputCtrl
    };
});