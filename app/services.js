'use strict';

var services = angular.module('contact.services', []);

services.service('ContactService', ["$rootScope", function($rootScope) {
    this.list = [];
    
    this.selectContact = function(contact) {
        this.list.splice(this.list.indexOf(contact), 1);
        $rootScope.$broadcast("contact.selected", contact);
    }
    
    this.toggleFavorite = function(contact) {
        contact.favorite = !contact.favorite;
    }

    this.deleteContact = function(contact) {
        this.list.splice(this.list.indexOf(contact), 1);
    }
    
    this.getContactList = function() {
        return this.list;
    }

    this.save = function(contact) {
        this.list.push(contact);
    }

    this.phoneTypes = function() {
        return [
            {
                label: "Mobile (Personal)"
            },
            {
                label: "Mobile (Office)"
            },
            {
                label: "Landline (Personal)"
            },
            {
                label: "Landline (Office)"
            },
        ];
    }

    this.newContact = function() {
        return {
            name: "[ Name ]",
            designation: "[ Tag ]",
            company: "",
            email: "",
            website: "",
            address: "",
            color: "emerald",
            favorite: false,
            phones: []
        }
    }
}]);
