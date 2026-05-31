const params = new URLSearchParams(window.location.search);

const code = params.get("code");
const familyId = params.get("id");

document.getElementById("codeBox").textContent =
  code || "UNKNOWN";

const deepLink =
  `nimons360://family/${familyId}?code=${code}`;

setTimeout(() => {
  window.location.href = deepLink;

  setTimeout(() => {
    document.getElementById("status").textContent =
      "Nimons360 is not installed on this device. Please install the application first.";
  }, 1500);

}, 500);