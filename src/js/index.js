const tabsElements = document.querySelectorAll(".tab");

tabsElements.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("selected")) return;

    const tabSelected = document.querySelector(".tab.selected");
    hideSelectedElement(tabSelected);

    showNSelectElement(tab);

    const informationSectionSelected = document.querySelector(
      ".information.selected"
    );
    hideSelectedElement(informationSectionSelected);

    const informationSectionId = `information-${tab.id}`;
    const informationSectionElement =
      document.getElementById(informationSectionId);

    showNSelectElement(informationSectionElement);
  });
});

function showNSelectElement(element) {
  element.classList.add("selected");
}

function hideSelectedElement(element) {
  element.classList.remove("selected");
}
