      
        const vLat = document.getElementById("the-latitude")
        const vLng = document.getElementById("the-longitude")
        
        const ciccio = {lat: 37.361386, lng: 15.087400}
        const portone = {lat: 37.363255, lng: 15.087231}
        const test = {lat:37.360826, lng:15.087535}
        

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
        

        async function process_position(lat, lng){

            vLat.innerHTML = lat.toString()
            vLng.innerHTML = lng.toString()
            
            var dist = await distance(ciccio.lat, ciccio.lng,lat,lng)
            var distanzaDalPortone = await distance(portone.lat, portone.lng,lat,lng)
            var dm = distanzaDalPortone * 1000

            document.querySelector('#result-distance').textContent = '  ' + dist * 1000 + ' metri';
            document.querySelector('#portone-distance').textContent = '  ' + distanzaDalPortone * 1000 + ' metri';

            if (dm < 70){
               // window.open('tel:3922729329')
                document.querySelector('#cancello').textContent = ' APRI IL CANCELLO!!!!';
            }
        
        }
        
        function distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
                    
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        
        }

