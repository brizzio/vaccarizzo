      
        const vLat = document.getElementById("the-latitude")
        const vLng = document.getElementById("the-longitude")
        
        const ciccio = {lat: 37.361386, lng: 15.087400}
        

        function geo_success(position) {
            process_position(position.coords.latitude, position.coords.longitude);
        }

        function geo_error() {
        alert("Sorry, no position available.");
        }

        var geo_options = {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
        };

        var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
        

        function process_position(lat, lng){

            vLat.innerHTML = lat.toString()
            vLng.innerHTML = lng.toString()
            
            var d = distance(ciccio.lat, ciccio.lng,lat,lng)

        
        }
        
        function distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
                    
        var dist = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        document.querySelector('#result-distance').textContent = '  ' + dist + ' metri';
        }

