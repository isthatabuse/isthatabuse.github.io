document.addEventListener("DOMContentLoaded", function () {
  console.log("migration-popup.js loaded");

  if (document.getElementById("itaMigrationOverlay")) return;

  document.body.classList.add("ita-popup-lock");

  const overlay = document.createElement("div");
  overlay.id = "itaMigrationOverlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "itaMigrationMessage");

  const popup = document.createElement("div");
  popup.id = "itaMigrationPopup";

  const message = document.createElement("p");
  message.id = "itaMigrationMessage";
  message.innerHTML =
    'All content on IsThatAbuse.com has been migrated to the <a href="https://pacificmaplepsych.com/resources/abuse.html">Abuse Resources section of Pacific Maple Psych Centre</a>.';

  popup.appendChild(message);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  console.log("migration popup appended to body");
});
