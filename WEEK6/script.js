let dot = document.getElementById("dot");
let where = document.getElementById("where");
let daylight = document.getElementById("daylight");

// where the edges of your map are (measured from the map image)
let mapLeft = -198;
let mapRight = 218;
let mapTop = 132;
let mapBottom = -97;

// ---------- GET THE LIVE DATA ----------
function loadISS() {
  where.innerHTML = "Looking for the ISS...";
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showData(data);
    })
    .catch(function (error) {
      where.innerHTML = "Could not reach the ISS. Try again.";
    });
}

// ---------- USE THE DATA ----------
function showData(data) {
  let lat = data.latitude;
  let lon = data.longitude;

  document.getElementById("lat").innerHTML = lat;
  document.getElementById("lon").innerHTML = lon;
  document.getElementById("alt").innerHTML = data.altitude;
  document.getElementById("speed").innerHTML = data.velocity;

  // move the red square on the map
  let x = (lon - mapLeft) / (mapRight - mapLeft) * 100;
  let y = (mapTop - lat) / (mapTop - mapBottom) * 100;
  dot.style.left = x + "%";
  dot.style.top = y + "%";

  // sentence about where it is
  let north = "northern";
  if (lat < 0) {
    north = "southern";
  }
  let east = "eastern";
  if (lon < 0) {
    east = "western";
  }
  where.innerHTML = "The ISS is over the " + north + " and " + east + " hemispheres.";

  // colours change with day and night on the station
  if (data.visibility === "daylight") {
    document.body.style.backgroundColor = "#2a6f97";
    daylight.innerHTML = "It is daytime for the ISS right now.";
  } else if (data.visibility === "eclipsed") {
    document.body.style.backgroundColor = "#05070d";
    daylight.innerHTML = "It is night for the ISS right now.";
  } else {
    document.body.style.backgroundColor = "#4a3b6b";
    daylight.innerHTML = "It is dawn or dusk for the ISS right now.";
  }
}

loadISS();