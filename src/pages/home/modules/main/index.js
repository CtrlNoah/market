let map;
        let marker;

        function init() {
            map = new ymaps.Map("map", {
                center: [61.2900, 30.3000], 
                zoom: 10
            });
        }

        function panToLocation(lat, lng, title) {
            map.setCenter([lat, lng], 14); 

            if (marker) {
                marker.geometry.setCoordinates([lat, lng]);
            } else {
                marker = new ymaps.Placemark([lat, lng], {
                    balloonContent: title
                });
                map.geoObjects.add(marker);
            }
        }

        ymaps.ready(init);



