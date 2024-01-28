// Your JavaScript code goes here
document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('mouseover', () => {
      document.querySelector('.ad').classList.add('blur');
  });

  category.addEventListener('mouseleave', (e) => {
      if (!category.contains(e.relatedTarget)) {
          document.querySelector('.ad').classList.remove('blur');
      }
  });
});
