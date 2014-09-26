'use strict';

var services = angular.module('contact.services', []);

var fake_database = [
    {
        name: "Mafinar Khan",
        designation: "Product Manager",
        company: "Panacea Systems Ltd",
        email: "mafinar@gmail.com",
        website: "http://code-shoily.tumblr.com",
        address: "169, Elephant Road, Dhaka - 1215, Bangladesh",
        color: "emerald",
        favorite: true,
        phones: [
            {type: {label: "Mobile (Personal)"}, number: "01717208051"},
            {type: {label: "Mobile (Office)"}, number: "01755633963"},            
        ]
    },
    {
        name: "Peter Parker",
        designation: "Photographer",
        company: "Daily Bugle",
        email: "peter.parker@xxx.xx",
        website: "http://spideys.fake.us",
        address: "Somewhere in, New York, USA",
        color: "pomegranate",
        favorite: false,
        phones: [
            {type: {label: "Mobile (Personal)"}, number: "1-800-SPIDEY"},
        ]
    },
    {
        name: "Tony Stark",
        designation: "CEO",
        company: "Stark Industries",
        email: "ironman@xxx.xxx",
        website: "",
        address: "Stark Industries, Marvel Universe",
        color: "sun-flower",
        favorite: false,
        phones: [
            {type: {label: "Mobile (Personal)"}, number: "01717XXXXXX"},
            {type: {label: "Mobile (Office)"}, number: "017XXXXXXXX"},            
        ]
    },
    {
        name: "Bruce Wayne",
        designation: "CEO",
        company: "Wayne Enterprise",
        email: "i.am.batman@xxx.xxx",
        website: "http://i.am.batman",
        address: "Wayne Enterprises, Gotham City, DC Universe",
        color: "wet-asphalt",
        favorite: false,
        phones: [
            {type: {label: "Landline (Personal)"}, number: "1-800-IAMBATMAN"},
            {type: {label: "Landline (Office)"}, number: "1-900-IAMBATMAN"},            
        ]
    },
    {
        name: "Clark Kent",
        designation: "News Reporter",
        company: "Daily Globe",
        email: "big.blue@xxx.xxx",
        address: "Smallville, Kansas, DC Universe",
        color: "belize-hole",
        favorite: true,
        phones: [
            {type: {label: "Landline (Personal)"}, number: "1-800-SUPES"},
        ]
    },
]


services.service('ContactService', ["$rootScope", function($rootScope) {
    this.list = fake_database;
    
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
