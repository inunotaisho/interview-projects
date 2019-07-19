import angular from 'angular';
import sellerTableInputCtrl from './seller-table.vc.js'
import sellerTableInputTemplate from './seller-table.vc.html';

angular.module('sellertable', ['sellerTableInputCtrl'])
.directive('sellertable',() => {
return {
    restrict: 'E',
    template: sellerTableInputTemplate,
    require:'^ngModel',
    controller: sellerTableInputTemplate
    };
});