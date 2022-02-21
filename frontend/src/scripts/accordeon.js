const accordeon = () => {
  const chitems = document.querySelectorAll('.characteristics__item');

  chitems.forEach((item, index) => {
    const chButton = item.querySelector('.characteristics__title');
    
    const toggleAccordeonItem = (item) => {
      const chButton = item.querySelector('.characteristics__title');
      const chContent = item.querySelector('.characteristics__description');
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        chContent.style.height = chContent.scrollHeight + "px";
      }
      chButton.classList.toggle("active");
      chContent.classList.toggle("open");
    };

    chButton.addEventListener('click', () => {
      chitems.forEach((closeItem, closeIndex) => {
        if (closeItem.querySelector('.characteristics__description').classList.contains('open') && index != closeIndex) {
          toggleAccordeonItem(closeItem);
        }
      });
      
      toggleAccordeonItem(item);
    });
  });
}

accordeon();