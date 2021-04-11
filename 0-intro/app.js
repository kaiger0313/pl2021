document.querySelectorAll('.btn').forEach((item) => {
  item.addEventListener('click', (e) => {
    alert(`${e.target.innerText} Clicked`);
  });
});
