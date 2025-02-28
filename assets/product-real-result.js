const result_item = document.querySelectorAll(".result-item");
const point_ele = document.querySelectorAll(".result-item-point");

point_ele.forEach((ele) => {
  ele.addEventListener("click", function () {
    const content_ele = this.nextElementSibling.lastElementChild;
    console.log(content_ele.scrollHeight);

    if (!this.classList.contains("active")) {
      point_ele.forEach((ele) => {
        ele.classList.remove("active");
        ele.innerHTML = "+";
        ele.nextElementSibling.lastElementChild.style.height = 0;
      });
      this.classList.add("active");
      content_ele.style.height = content_ele.scrollHeight + "px";
      this.innerHTML = "-";
    } else {
      this.classList.remove("active");
      content_ele.style.height = 0;
      this.innerHTML = "+";
    }
  });
});
