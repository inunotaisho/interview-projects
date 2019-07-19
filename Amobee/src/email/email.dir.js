import angular from 'angular';
import emailInputCtrl from './email.vc.js'
import emailInputTemplate from './email.vc.html';

angular.module('emailinput', ['emailInputCtrl'])
.directive('emailinput',() => {
return {
    restrict: 'E',
    template: emailInputTemplate,
    require:'^ngModel',
    controller: emailInputCtrl
    };
});
