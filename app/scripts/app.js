'use strict';

angular
  .module('lorryApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngLodash',
    'ngDialog',
    'config',
    'directive-templates',
    'angular.filter',
    '720kb.tooltips',
    'ngClipboard'
  ]).config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath('images/ZeroClipboard.swf');
  }]);