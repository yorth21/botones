function searchLocation(event) {
    event.preventDefault();
  
    const location = document.getElementById("location").value;
  
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === "OK") {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        const center = { lat: latitude, lng: longitude };
  
        const map = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 12,
        });
  
        const marker = new google.maps.Marker({
          position: center,
          map: map,
        });
      } else {
        alert("No se pudo encontrar la ubicación");
      }
    });
  }
  