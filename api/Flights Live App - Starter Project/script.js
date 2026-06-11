const container = document.getElementById("container");

//Vendosja e kordinatave gjeografike latituda dhe longituda
const kosovaBounds = {
  latMin: 41.85,
  latMax: 43.25,
  lonMin: 20.05,
  lonMax: 21.75,
};

// Detyra 1: Vendos URL të një fotografie të avionit.
// Shembull: const airplaneImage = "https://...";
const airplaneImage =
  "https://www.skycop.com/wp-content/uploads/2018/12/ryanair-aircraft.webp";

async function merrAvionetKosoves() {
  try {
    // Detyra 2: Bëj kërkesën fetch për API-në: "https://opensky-network.org/api/states/all"
    const res = await fetch(
      "https://opensky-network.org/api/states/all",
    );
    const data = await res.json();
    const states = data.states;
    console.log(states);
    if (!states || states.length === 0) {
      container.innerHTML = "<p>Nuk ka avionë aktualisht.</p>";
      return;
    }

    // Detyra 3: Filtroni avionët që ndodhen vetëm brenda kufijve të Kosovës.
    // Këshillë: përdor latitude = avion[6], longitude = avion[5]
    const avionetKosove = states.filter((avion) => {
      const latitude = avion[6];
      const longitude = avion[5];

      return (
        latitude &&
        longitude &&
        latitude >= kosovaBounds.latMin &&
        latitude <= kosovaBounds.latMax &&
        longitude >= kosovaBounds.lonMin &&
        longitude <= kosovaBounds.lonMax
      );
    });

    if (avionetKosove.length === 0) {
      container.innerHTML = "<p>Nuk ka avionë mbi Kosovë aktualisht.</p>";
      return;
    }

    container.innerHTML = "";

    for (let avion of avionetKosove) {
      const [
        icao24,
        callsign,
        origin_country,
        time_position,
        last_contact,
        longitude,
        latitude,
        baro_altitude,
        on_ground,
        velocity,
      ] = avion;

      const div = document.createElement("div");
      div.className = "avion";

      // Detyra 4: Ndrysho HTML-në më poshtë për të shtuar edhe informacione të tjera sipas dëshirës.
      div.innerHTML = `
        <img src="${airplaneImage}" alt="Avion">
        <strong>${callsign ? callsign.trim() : icao24}</strong>
        <p>✈️ Shteti: ${origin_country}</p>
        <p>📍 Lat: ${latitude.toFixed(2)} , Lon: ${longitude.toFixed(2)}</p>
      `;

      container.appendChild(div);
    }
  } catch (error) {
    container.innerHTML = "<p>⚠️ Nuk mund të ngarkohet lista e avionëve.</p>";
  }
}

// Detyra 5: Ndrysho kohën e rifreskimit (aktualisht 60000ms = 1 minutë)
merrAvionetKosoves();
setInterval(merrAvionetKosoves, 360000);
