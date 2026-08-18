(() => {
  // let products = [
  //   {
  //     img: "https://basket-15.wbbasket.ru/vol2283/part228339/228339564/images/big/1.webp",
  //     name: "Хиджаб",
  //   },
  //   {
  //     img: "https://img5.lalafo.com/i/posters/api/e8/44/eb/7ea3e3410be749b8de99f42ae5.jpeg",
  //     name: "Спортивные хиджабы",
  //   },
  //   {
  //     img: "https://basket-27.wbbasket.ru/vol4959/part495932/495932768/images/big/1.webp",
  //     name: "Подростковые хиджабы",
  //   },
  // ];
  //
  let products = JSON.parse(localStorage.getItem("cardBlock1"));

  renderProducts();

  // поиск формы добавления продукта
  const addProductForm = document.querySelector(".addProductForm");

  // обработка события
  addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = addProductForm.querySelector("[name=name]").value;
    const img = addProductForm.querySelector("[name=img]").value;

    if (!name | !img) {
      return;
    }

    const newProduct = {
      img: img,
      name: name,
    };

    // добавить в массив products новый элемент
    products.push(newProduct);

    renderProducts();
    // очистка формы
    addProductForm.reset();
  });

  function renderProducts() {
    // поиск блока для товаров
    const cardBlock1 = document.querySelector(".cardBlock1");

    // наполнение блока для товаров cardBlock1 из массива products
    cardBlock1.innerHTML = products.map(
      (item, index) =>
        `<div class="card">   
            <img
                class="imageCard"
                src=${item.img}
                alt=""
            />
            <div class="cardText">${item.name}</div>
            <button index=${index} class="deleteBtn btn"> Удалить</button>
        </div>`,
    );

    // Удаление
    const deleteProduct = document.querySelectorAll(".deleteBtn");

    Array.from(deleteProduct).forEach((item) =>
      item.addEventListener("click", (e) => {
        const index = e.target.getAttribute("index");
        products.splice(index, 1);
        renderProducts();
      }),
    );
  }

  const saveCardBlock1 = document.querySelector(".saveCardBlock1");
  saveCardBlock1.addEventListener("click", () => {
    localStorage.setItem("cardBlock1", JSON.stringify(products));
  });
})();
