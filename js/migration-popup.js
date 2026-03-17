document.addEventListener("DOMContentLoaded", function () {
  // Prevent duplicate injection
  if (document.getElementById("itaMigrationOverlay")) return;

  // Lock page scroll
  document.body.classList.add("ita-popup-lock");

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "itaMigrationOverlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "itaMigrationMessage");

  // Create popup box
  const popup = document.createElement("div");
  popup.id = "itaMigrationPopup";

  // Create message
  const message = document.createElement("p");
  message.id = "itaMigrationMessage";
  message.innerHTML =
    'All content on IsThatAbuse.com has been migrated to the <a href="https://pacificmaplepsych.com/resources/abuse.html">Abuse Resources section of Pacific Maple Psych Centre</a>.';

  popup.appendChild(message);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Keep popup unexitable by blocking common dismissal interactions
  document.addEventListener(
    "keydown",
    function (e) {
      // Prevent Escape from doing anything meaningful here
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );

  // If anything tries to remove the popup, immediately restore it
  const observer = new MutationObserver(function () {
    if (!document.body.contains(overlay)) {
      document.body.appendChild(overlay);
    }
    if (!document.body.classList.contains("ita-popup-lock")) {
      document.body.classList.add("ita-popup-lock");
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: false,
    attributes: true,
    attributeFilter: ["class"]
  });
});
