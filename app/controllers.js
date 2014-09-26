'use strict';

var app = angular.module('contact.controllers', ['contact.services']);

app.controller("FormCtrl", ["$scope", "ContactService", function($scope, ContactService) {
    $scope.contact = ContactService.newContact();
    $scope.phone_types = ContactService.phoneTypes();
    
    $scope.$on("contact.selected", function(event, contact) {
        $scope.contact = contact;
    });
    
    $scope.setColor = function(color) {
        $scope.contact.color = color;
    };

    $scope.clearContact = function() {
        $scope.contact = ContactService.newContact();
        $scope.contactForm.$setPristine();
    };
    
    $scope.saveContact = function() {
        ContactService.save($scope.contact);
        $scope.clearContact();
    };
    
    $scope.addPhone = function() {
        $scope.contact.phones.push({
            type: {
                icon: "fa-home",
                label: "Mobile (Personal)"
            },
            number: "",
        });
    };
    
    $scope.removePhone = function(index) {
        $scope.contact.phones.splice(index, 1);
    };
}]);

app.controller("ContactListCtrl", ["$scope", "ContactService", function($scope, ContactService) {
    $scope.contactList = ContactService.getContactList();
    $scope.getColor = function(color) {
        return color + "-border";
    }
    $scope.edit = function(contact) {
        ContactService.selectContact(contact);
    }
    $scope.delete = function(contact) {
        ContactService.deleteContact(contact);
    }
    $scope.toggleFavorite = function(contact) {
        ContactService.toggleFavorite(contact);
    }
    
    $scope.predicate = {label:"Name", value:"name"};
    $scope.props = [
        {label:"Name", value:"name"},
        {label:"Favorite", value:"-favorite"},
        {label:"Company", value:"company"}
    ]
}]);
