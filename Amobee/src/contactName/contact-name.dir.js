import angular from 'angular';
import contactNameCtrl from './contact-name.vc.js';
import contactTemplate from './contact-name.vc.html';

angular.module('contactinput', ['contactNameCtrl'])
.directive('contactinput',() => {
return {
    restrict: 'E',
    template: contactTemplate,
    require:'^ngModel',
    controller: contactNameCtrl
    };
});