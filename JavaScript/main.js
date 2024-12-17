// Map Initialization Function
function initMap() {
    // Marker Data
    const markerData = {
        locationName: 'Amy Dostal Psychologist',
        lat: -37.9303704,
        lng: 145.0550147,
        address: 'Beingwell, 56 East Boundary Road,<br> Bentleigh East VIC 3165',
    };

    // Custom Map Styles
    const customMapStyles = [
        {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }], // Turn off all default labels
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text',
            stylers: [{ visibility: 'on' }] // Show locality (suburb) labels
        },        
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#ff9500' }], // Highlight train lines in green
        },
    ];

    // Default Map Options
    const mapOptions = {
        center: { lat: markerData.lat, lng: markerData.lng },
        zoom: 12,
        disableDefaultUI: true, // Disable default controls for a cleaner look
        styles: customMapStyles, // Apply custom styles
    };

    // Create the Map
    const map = new google.maps.Map(document.getElementById('map-iframe'), mapOptions);

    // Create Marker
    const marker = new google.maps.Marker({
        position: { lat: markerData.lat, lng: markerData.lng },
        map: map,
    });

    // Create a Circle to Represent 5km Radius
    const circle = new google.maps.Circle({
        map: map,
        center: { lat: markerData.lat, lng: markerData.lng },
        radius: 5000, // Radius in meters (5km)
        fillColor: '#2196F3', // Light blue fill color
        fillOpacity: 0.15, // Semi-transparent fill
        strokeColor: '#2196F3', // Blue stroke color
        strokeOpacity: 0.8, // Slightly opaque stroke
        strokeWeight: 2, // Stroke width
    });

    // Add Zoom In and Zoom Out Buttons
    const zoomInButton = document.createElement('div');
    zoomInButton.textContent = '+';
    zoomInButton.style.cursor = 'pointer';
    zoomInButton.style.backgroundColor = '#fff';
    zoomInButton.style.border = '1px solid #ccc';
    zoomInButton.style.borderRadius = '20px';
    zoomInButton.style.padding = '10px';
    zoomInButton.style.fontSize = '20px';
    zoomInButton.style.margin = '5px';
    zoomInButton.style.textAlign = 'center';

    const zoomOutButton = document.createElement('div');
    zoomOutButton.textContent = '−';
    zoomOutButton.style.cursor = 'pointer';
    zoomOutButton.style.backgroundColor = '#fff';
    zoomOutButton.style.border = '1px solid #ccc';
    zoomOutButton.style.borderRadius = '20px';
    zoomOutButton.style.padding = '10px';
    zoomOutButton.style.fontSize = '20px';
    zoomOutButton.style.margin = '5px';
    zoomOutButton.style.textAlign = 'center';

    zoomInButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() + 1);
    });

    zoomOutButton.addEventListener('click', () => {
        map.setZoom(map.getZoom() - 1);
    });

    const zoomControlDiv = document.createElement('div');
    zoomControlDiv.style.position = 'absolute';
    zoomControlDiv.style.bottom = '20px';
    zoomControlDiv.style.right = '20px';
    zoomControlDiv.style.display = 'flex';
    zoomControlDiv.style.flexDirection = 'column';
    zoomControlDiv.appendChild(zoomInButton);
    zoomControlDiv.appendChild(zoomOutButton);

    document.getElementById('map-iframe').appendChild(zoomControlDiv);

    // Add Key for 5km Radius and Train Lines
    const keyDiv = document.createElement('div');
    keyDiv.innerHTML = `
        <div style="
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.9);
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        ">
            <div style="display: flex; align-items: center; margin-bottom: 5px;">
                <div style="
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: #2196F3;
                    opacity: 0.2;
                    border: 2px solid #2196F3;
                    margin-right: 8px;
                "></div>
                <span>5km Radius</span>
            </div>
            <div style="display: flex; align-items: center;">
                <div style="
                    width: 16px;
                    height: 4px;
                    background-color: #ff9500;
                    margin-right: 8px;
                "></div>
                <span>Train Network</span>
            </div>
        </div>
    `;
    keyDiv.style.position = 'absolute';
    keyDiv.style.top = '10px';
    keyDiv.style.left = '10px';
    keyDiv.style.zIndex = '9999';

    document.getElementById('map-iframe').appendChild(keyDiv);
}


// POP-UP

function togglePopup(){
    document.getElementById("pop-up-wrapper1").classList.toggle("active");
}
