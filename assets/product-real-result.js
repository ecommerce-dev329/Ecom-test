const result_item = document.querySelectorAll(".result-item");
const point_ele = document.querySelectorAll(".result-item-point");
const result_bottom_content = document.querySelectorAll(
  ".result-bottom-content"
);

point_ele.forEach((ele) => {
  ele.addEventListener("click", function () {
    const content_ele = this.nextElementSibling.lastElementChild;
    const rbc = result_bottom_content[parseInt(this.dataset.index) - 1];

    if (!this.classList.contains("active")) {
      point_ele.forEach((ele, index) => {
        ele.classList.remove("active");
        ele.innerHTML = "+";
        result_bottom_content[index].style.height = 0;
        ele.nextElementSibling.lastElementChild.style.height = 0;
      });

      this.innerHTML = "-";
      this.classList.add("active");
      rbc.style.height = rbc.scrollHeight + "px";
      content_ele.style.height = content_ele.scrollHeight + "px";
    } else {
      this.innerHTML = "+";
      rbc.style.height = 0;
      content_ele.style.height = 0;
      this.classList.remove("active");
    }
  });
});
