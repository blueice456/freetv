

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/*
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
/*function formatTime(date) {
  const hours12 = date.getHours() % 24 || 24;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 24;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "" : ""}`;
}

/**
 * @param {Date} date
 */
/*function formatDate(date) {
  const DAYS = [
    "Nedjelja",
    "Ponedjeljak",
    "Utorak",
    "Srijeda",
    "Cetvrtak",
    "Petak",
    "Subota"
  ];
  const MONTHS = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "August",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar"
  ];

  return `${DAYS[date.getDay()]},
    ${date.getDate()} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);
*/
