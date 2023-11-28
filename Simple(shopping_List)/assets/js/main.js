// global vars
const shoppingForm = document.querySelector("#shoppingForm");
const clearContainer = document.getElementById("clear-container");
let itemId = 0;

//event listeners
shoppingForm.addEventListener("submit", addToShopList);

function addToShopList(e) {
  e.preventDefault();
  let itemInput = document.getElementById("item");
  //   check for empty input value
  if (!itemInput.value) {
    alert("you must provide a value for item");
  } else {
    clearContainer.classList.remove("d-none");
    // create element and add it to shopping lisy
    handleItems(itemInput.value);
  }
  shoppingForm.reset();
}

// adding elements logic
function handleItems(val) {
  // unique id to all created elements
  itemId++;
  const itemContainer = document.getElementById("shopping_items");

  // let item = `
  //       <li class="text-primary my-3 d-flex align-items-center" id="item${itemId}">
  //         <h2 class="h3 text-white text-center h3 mx-3 pt-2 w-50">${val}</h2>
  //         <button class="btn btn-warning mx-3" id="delete${itemId}">delete from list</button>
  //       </li>
  // `;

  let item = `
          <li class="text-white my-3" id="item${itemId}">
          <div class="d-flex">
            <h3 class="text-white text-center h3 pt-2 w-50">${val}</h3>
            <button class="btn btn-warning mx-3" id="delete${itemId}">
              delete from list
            </button>
          </div>
        </li>
  `;
  //   add element to the top
  itemContainer.insertAdjacentHTML("afterbegin", item);

  let createdBtn = document.getElementById(`delete${itemId}`);

  createdBtn.addEventListener("click", function () {
    // get value of button/item id to be passed to delete function
    let id = createdBtn.getAttribute("id").slice(6);
    removeElement(`item${id}`);
  });
  //   remove all items from shop list
  clearAllItems(itemContainer, clearContainer);
}

// remove elements by id
function removeElement(elemId) {
  let toBeRemoved = document.getElementById(elemId);
  let parent = toBeRemoved.parentElement;
  toBeRemoved.remove();

  //   check if shop list is empty and hide delete all button
  if (parent.childElementCount === 0) {
    clearContainer.classList.add("d-none");
  }
}

// delete all elements and  hide a btn
function clearAllItems(elem1, elem2) {
  const clearBtn = document.getElementById("clear-all");
  clearBtn.addEventListener("click", function () {
    elem1.innerHTML = "";
    elem2.classList.add("d-none");
  });
}
