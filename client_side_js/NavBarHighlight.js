document.addEventListener('DOMContentLoaded', function () {
    // Get the navbar and all li elements
    const navbar = document.getElementById('top-nav-2050');
    const liElements = navbar.querySelectorAll('li.nav-item');

    liElements.forEach( (element)=> console.log(element.innerText));
  
    // Add event listeners to each li element
    for (let i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener('mouseover', function () {
        // Change background color on mouseover
        this.style.backgroundColor = 'lightblue';
      });
  
      liElements[i].addEventListener('mouseout', function () {
        // Change background color back to the original on mouseout
        this.style.backgroundColor = '';
      });
    }
  });
  