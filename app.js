const showAnswer = (e) => {
  // console.log(e);
  const i = event.target.id.split("-").pop();
  document.getElementsByClassName("faq-item")[i - 1].classList.toggle("active");
};
