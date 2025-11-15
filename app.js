// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Temperature
const tempRef = ref(db, "environment/DHT11/Temp");
onValue(tempRef, (snapshot) => {
  document.getElementById("db-temp").textContent =
    "Temperature: " + snapshot.val();
});

// Humidity
const humRef = ref(db, "environment/DHT11/Humidity");
onValue(humRef, (snapshot) => {
  document.getElementById("db-hum").textContent =
    "Humidity: " + snapshot.val();
});

// Gas
const gasRef = ref(db, "environment/Gas");
onValue(gasRef, (snapshot) => {
  const el = document.getElementById("db-gas");
  const val = snapshot.val();
  el.textContent = val == 0 ? "Gas: Not Detected" : "Gas: Detected";
  el.style.color = val == 0 ? "green" : "red";
});

// Presence
const presRef = ref(db, "environment/Presence");
onValue(presRef, (snapshot) => {
  const el = document.getElementById("db-pres");
  const val = snapshot.val();
  el.textContent = val == 0 ? "Presence: Not Detected" : "Presence: Detected";
  el.style.color = val == 0 ? "green" : "red";
});
