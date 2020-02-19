function initMap() {
    var options = {
        zoom:3,
        center: {lat:46.253, lng:20.148}
    }
    var map = new google.maps.Map(document.getElementById('map'), options);
}