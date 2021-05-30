export const select = () => {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("active");
  }

  function selectChoose() {
    let text = this.innerHTML,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerHTML = text;
    select.classList.remove("active");
    console.log(text);
  }
};
