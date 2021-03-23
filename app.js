document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".sidenav");
  const instances = M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".collapsible");
  let instances = M.Collapsible.init(elems, {});
});

let list_items = document.querySelectorAll(".wrapper-positions ul li");
let item_content = document.querySelectorAll(".item");

for (let i = 0; i < list_items.length; i++) {
  list_items[i].addEventListener("click", function () {
    list_items.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    let list_value = this.getAttribute("data-li");

    item_content.forEach(function (item) {
      item.style.display = "none";
    });

    if (list_value === "team") {
      document.querySelector("." + list_value).style.display = "block";
    } else if (list_value === "goalkeepers") {
      document.querySelector("." + list_value).style.display = "block";
    } else if (list_value === "defenders") {
      document.querySelector("." + list_value).style.display = "block";
    } else if (list_value === "midfielders") {
      document.querySelector("." + list_value).style.display = "block";
    } else if (list_value === "attackers") {
      document.querySelector("." + list_value).style.display = "block";
    }
  });
}
