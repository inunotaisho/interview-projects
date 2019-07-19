import angular from 'angular';
import currencyCtrl from './currency.vc.js';
import currencyTemplate from './currency.vc.html';

angular.module('currency', ['currencyCtrl'])
.directive('currency',() => {
return {
    restrict: 'E',
    template: currencyTemplate,
    require:'^ngModel',
    controller: currencyCtrl
    };
});