let map;
let openInfoWindow = null;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0012, lng: 34.8853 },
        zoom: 8,
    });

    // Insert to DB
    const cities = [
        { name: "Jerusalem", lat: 31.7767, lng: 35.2057 },
        { name: "Tel Aviv", lat: 32.1135, lng: 34.8045 },
        { name: "Haifa", lat: 32.7776, lng: 35.0212 },
        { name: "Rishon LeZion", lat: 31.9124, lng: 34.8084 },
        { name: "Petah Tikva", lat: 32.0871, lng: 34.8879 },
        { name: "Ashdod", lat: 31.7982, lng: 34.6497 },
        { name: "Netanya", lat: 32.3329, lng: 34.8597 },
        { name: "Beer Sheva", lat: 31.2529, lng: 34.7915 },
        { name: "Holon", lat: 32.0149, lng: 34.7793 },
        { name: "Bnei Brak", lat: 32.0820, lng: 34.8379 },
        { name: "Rehovot", lat: 31.8958, lng: 34.8185 },
        { name: "Ramat Gan", lat: 32.0806, lng: 34.8142 },
        { name: "Ashkelon", lat: 31.6704, lng: 34.5715 },
        { name: "Bat Yam", lat: 32.0238, lng: 34.7519 },
        { name: "Kfar Saba", lat: 32.1756, lng: 34.9060 },
        { name: "Herzliya", lat: 32.1652, lng: 34.8402 },
        { name: "Nahariya", lat: 33.0058, lng: 35.0943 },
        { name: "Modiin-Maccabim-Reut", lat: 31.8964, lng: 35.0147 },
        { name: "Beit Shemesh", lat: 31.7501, lng: 34.9885 },
        { name: "Lod", lat: 31.9522, lng: 34.8959 }
    ];

    cities.forEach(city => {
        addMarker(city.lat, city.lng, city.name);
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