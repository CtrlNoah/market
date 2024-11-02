const loadPartial = (elementId, partialFile) => {
  fetch(partialFile)
    .then((response) => response.text())
    .then((data) => (document.getElementById(elementId).innerHTML = data))
    .catch((error) => console.error("Ошибка загрузки partial:", error));
};

loadPartial("navbar", "../src/shared/modules/navbar/ui.html");
// loadPartial("order", "../src/pages/home/modules/order/ui.html");
loadPartial("product-list", "../src/pages/home/modules/product-list/ui.html");
loadPartial("main", "../src/pages/home/modules/main/ui.html");
loadPartial("footer", "../src/shared/modules/footer/ui.html");
