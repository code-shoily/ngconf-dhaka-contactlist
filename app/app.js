'use strict';

var app = angular.module('app', ['contact.controllers', 'contact.directives', 'ngAnimate']);

var TimeCtrl = function($scope, $timeout) {
    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
}

app.controller("TimeCtrl", ["$scope", "$timeout", TimeCtrl]);


