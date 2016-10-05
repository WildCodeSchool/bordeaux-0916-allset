((app) => {
    'use strict'
    var cities = [
    {
        city : 'Mérignac',
        desc : '25 RUE MARCEL ISSARTIER - 33700 MERIGNAC',
        lat : 44.84007510000001,
        long : -0.7161892999999964
    },
    {
        city : 'Paris',
        desc : '460 VOIE DE LA COURTINE - 93160 NOISY LE GRAND',
        lat : 48.8388763,
        long : 2.5435062000000244
    },
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
