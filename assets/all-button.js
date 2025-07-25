document.addEventListener('DOMContentLoaded', function() {
  console.log('All button script loaded');
  
  // Get the All button
  const allButton = document.querySelector('.all-categories-button');
  
  if (allButton) {
    console.log('All button found');
    
    // Add click handler
    allButton.addEventListener('click', function(e) {
      console.log('All button clicked');
      e.preventDefault();
      
      // Option 1: Toggle the same menu as the hamburger button
      const allMenuDrawer = document.getElementById('all-menu-drawer');
      if (allMenuDrawer) {
        allMenuDrawer.classList.toggle('is-open');
      } else {
        // Option 2: Navigate to all products collection
        window.location.href = '/collections/all';
      }
    });
  } else {
    console.error('All button not found');
  }
});