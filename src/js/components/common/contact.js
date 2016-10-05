((app) => {
    'use strict'
    var cities = [
    {
        city : 'Bordeaux',
        desc : 'La ville de Bordeaux',
        lat : 44.8404400,
        long : -0.5805000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Paris',
        desc : 'La capitale touristique',
        lat : 48.856614,
        long : 2.3522219000000177
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Une filiale AllSet, pas comme les autres ...',
        lat : 36.0800,
        long : -115.1522
    }
];

    app.component("contact", {
            templateUrl: 'js/components/common/contact.html',
            controller: function($scope) {

                var mapOptions = {
                    zoom: 4,
                    center: new google.maps.LatLng(46.227638, 2.213749000000007),
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                $scope.markers = [];

                var infoWindow = new google.maps.InfoWindow();
                var imagePath = "http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png";
                var createMarker = function(info) {

                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: new google.maps.LatLng(info.lat, info.long),
                        icon: imagePath,
                        title: info.city
                    });
                    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

                    google.maps.event.addListener(marker, 'click', function() {
                        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                        infoWindow.open($scope.map, marker);
                    });

                    $scope.markers.push(marker);

                }

                for (i = 0; i < cities.length; i++) {
                    createMarker(cities[i]);
                }

                $scope.openInfoWindow = function(e, selectedMarker) {
                    e.preventDefault();
                    google.maps.event.trigger(selectedMarker, 'click');
                }
            }
        }) // app.component
})(angular.module('app.common'))
