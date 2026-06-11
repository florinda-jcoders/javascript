const vendet = {
  Prishtina: "Europe/Belgrade",
  Berlin: "Europe/Berlin",
  Istanbul: "Europe/Istanbul",
  Tokyo: "Asia/Tokyo",
  Sydney: "Australia/Sydney",
};

const lista = document.getElementById("kohat");

async function merrKohen() {
  for (const [vendi, zona] of Object.entries(vendet)) {
    try {
      const response = await fetch(
        `https://proxy.corsfix.com/?https://timeapi.io/api/v1/time/current/zone?timezone=${zona}`,
      );
      const data = await response.json();


      // Detyra 1: Nga objekti "data", merre datën dhe ktheje në objekt të tipit Date.
       const date = new Date(data)

      // Detyra 2: Formatoni kohën duke përdorur .toLocaleTimeString()
       console.log(date)

      const li = document.createElement("li");

      // Detyra 3: Ndrysho këtë rresht në mënyrë që të shfaqet:
      // PRISHTINA → 10:25:13
      li.textContent = `${vendi}: ${date.time}`; // plotëso këtë pjesë

      lista.appendChild(li);
    } catch (error) {
      console.error("Gabim duke marrë kohën:", error);
    }
  }
}

merrKohen();
