const menu = document.querySelector("#tabMenu");
const spotlight = document.querySelector("#spotlight");
const tabs = [...document.querySelectorAll(".tab")];
const activeName = document.querySelector("#activeName");
const activeCount = document.querySelector("#activeCount");

function activateTab(tab, moveFocus = false) {
  const index = tabs.indexOf(tab);

  tabs.forEach((item, itemIndex) => {
    const active = itemIndex === index;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  menu.style.setProperty("--active-index", index);
  activeName.textContent = tab.dataset.tab.toUpperCase();
  activeCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(tabs.length).padStart(2, "0")}`;

  if (moveFocus) tab.focus();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let index = tabs.indexOf(tab);
    if (event.key === "ArrowLeft") index = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "ArrowRight") index = (index + 1) % tabs.length;
    if (event.key === "Home") index = 0;
    if (event.key === "End") index = tabs.length - 1;
    activateTab(tabs[index], true);
  });
});

activateTab(tabs[0]);
