let searchBar = document.getElementById("ProductSearchBar");
let grid = document.getElementsByTagName("grid")[0];

searchBar.addEventListener("input", (eventData) => {

  for (let i = 0; i < grid.children.length; i++) {
    const itemIncludesSearchValue = grid.children[i].children
      .item(2)
      .textContent.toLowerCase().includes(String(eventData.target.value).toLowerCase());
    const elementContainsHideClass =
      grid.children[i].classList.contains("hide");

    if (!itemIncludesSearchValue && !elementContainsHideClass) {
      grid.children[i].classList.add("hide");
    } else if (itemIncludesSearchValue && elementContainsHideClass) {
      grid.children[i].classList.remove("hide");
    }
  }
});
