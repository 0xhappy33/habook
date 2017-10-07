function initMap() {
    var myLatLng = {lat: 16.065997, lng: 108.231149};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '8 Nguyen Thong'
    });
}
initMap();