document.addEventListener('DOMContentLoaded', function() {
  console.log('Hamburger menu JS loaded');
  
  // Get menu elements
  const allMenuButton = document.querySelector('.bottom-bar__all-menu-trigger');
  const allMenuDrawer = document.getElementById('all-menu-drawer');
  
  if (allMenuButton && allMenuDrawer) {
    console.log('Menu elements found');
    const closeButton = allMenuDrawer.querySelector('.all-menu-drawer__close-button');
    
    // Toggle menu on button click
    allMenuButton.addEventListener('click', function(e) {
      console.log('Menu button clicked');
      e.preventDefault();
      e.stopPropagation();
      allMenuDrawer.classList.toggle('is-open');
    });
    
    // Close button handler
    if (closeButton) {
      closeButton.addEventListener('click', function() {
        allMenuDrawer.classList.remove('is-open');
      });
    }
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (allMenuDrawer.classList.contains('is-open') && 
          !allMenuDrawer.contains(e.target) && 
          e.target !== allMenuButton) {
        allMenuDrawer.classList.remove('is-open');
      }
    });
  } else {
    console.error('Menu elements not found');
    if (!allMenuButton) console.error('Menu button not found');
    if (!allMenuDrawer) console.error('Menu drawer not found');
  }
});