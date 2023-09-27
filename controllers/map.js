let map;
let openInfoWindow = null;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0012, lng: 34.8853 },
        zoom: 8,
    });

    const universities = [
        { name: "האוניברסיטה העברית", lat: 31.7767, lng: 35.2057 },
        { name: "אוניברסיטת תל אביב", lat: 32.1135, lng: 34.8045 },
        { name: "הטכניון", lat: 32.7776, lng: 35.0212 },
        { name: "מכון ויצמן", lat: 31.9124, lng: 34.8084 },
        { name: "אוניברסיטת בן גוריון", lat: 31.2622, lng: 34.8007 },
        { name: "אוניברסיטת בר אילן", lat: 32.0949, lng: 34.8143 },
        { name: "אוניברסיטת חיפה", lat: 32.7722, lng: 35.0219 },
        { name: "אוניברסיטת אריאל", lat: 32.1085, lng: 35.3036 },
        { name: "אוניברסיטת רייכמן", lat: 32.1759, lng: 34.8378 },
    ];

    universities.forEach(university => {
        addMarker(university.lat, university.lng, university.name);
    });
}

function addMarker(latitude, longitude, title) {
    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: title,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: title,
    });

    marker.addListener("click", () => {
        if (openInfoWindow) {
            openInfoWindow.close();
        }

        infoWindow.open(map, marker);
        openInfoWindow = infoWindow;
    });
}