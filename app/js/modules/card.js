const card = () => {
  const tableItems = document.querySelectorAll(".card-item__table_item");

  tableItems.forEach((item) => {
    const tooltipBtn = item.querySelector(".card-item__table_question");
    const tooltip = item.querySelector(".card-item__table_tooltip");
    const tooltipCloseBtn = item.querySelector(
      ".card-item__table_tooltip-close"
    );

    tooltipBtn.addEventListener("click", () => {
      tooltip.style.visibility = "visible";
    });

    tooltipCloseBtn.addEventListener("click", () => {
      tooltip.style.visibility = "hidden";
    });
  });
};

export default card;
