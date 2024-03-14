function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Add an event listener to the trigger element
document.addEventListener('DOMContentLoaded', function() {
  const triggerElement = document.querySelector('.trigger-element');
  triggerElement.addEventListener('click', openPopup);
});