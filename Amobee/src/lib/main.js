'use strict'

import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import nameinput from '../name/name.dir';
import currency from '../currency/currency.dir.js';
import officeinput from '../offices/offices.dir.js';
import dealinput from "../dealType/deal-type.dir.js";
import contactinput from '../contactName/contact-name.dir.js';
import emailinput from '../email/email.dir.js';
import layoutTemplate from './layout.html';


angular.module('myApp', ['ngRoute', 'ngResource', 'nameinput', 'currency', 'officeinput', 'dealinput', 'contactinput', 'emailinput'])
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider
            .when('/', {
                template: layoutTemplate
            })
    }]);