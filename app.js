const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const toast = document.getElementById("toast");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
}

burger?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (e) => {
  if (e.target?.tagName === "A") {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

/* IP COPY (tu peux remplacer cfx.re/join/XXXXXX par ton lien) */
const ipBox = document.getElementById("serverIpBox");
document.getElementById("copyIpBtn")?.addEventListener("click", async () => {
  const value = ipBox?.textContent?.trim();
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
    showToast("IP copiée !");
  } catch {
    showToast("Impossible de copier (navigateur).");
  }
});