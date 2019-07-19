import angular from 'angular';
import officesInputCtrl from './offices.vc.js'
import officesInputTemplate from './offices.vc.html';

angular.module('officeinput', ['officeInputCtrl'])
.directive('officeinput',() => {
return {
    restrict: 'E',
    template: officesInputTemplate,
    require:'^ngModel',
    controller: officesInputCtrl
    };
});