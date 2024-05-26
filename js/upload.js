document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Form validation (simple example, can be expanded)
  const name = document.getElementById('name').value.trim().toLowerCase().replace(/\s+/g, '');
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const fileInput = document.getElementById('file');

  if (!name || !title || !description || !category || !fileInput.files.length) {
      alert('Please fill in all fields and upload a file.');
      return;
  }

  // Generate a unique token
  function generateToken(name) {
      const timestamp = Date.now().toString(36);
      const randomString = Math.random().toString(36).substring(2, 6);
      return `${name}-${timestamp}-${randomString}`;
  }

  const uniqueToken = generateToken(name);

  // Display the unique token
  displayToken(uniqueToken);

  // Toggle blur effect on main content
  toggleBlurEffect();
});

// Function to toggle blur effect on content behind the token popup
function toggleBlurEffect() {
  const mainContent = document.querySelector('.main-content');
  mainContent.classList.toggle('blurred');
}

// Function to display token container as pop-up
function displayToken(token) {
  // Display the unique token
  const tokenDisplay = document.getElementById('tokenDisplay');
  tokenDisplay.textContent = token;

  // Show the token container
  const tokenContainer = document.getElementById('tokenContainer');
  tokenContainer.style.display = 'block';

  // Copy the token to clipboard when copy button is clicked
  const copyTokenButton = document.getElementById('copyToken');
  copyTokenButton.addEventListener('click', function() {
      navigator.clipboard.writeText(token)
          .then(() => {
              alert('Token copied to clipboard!');
              tokenContainer.style.display = 'none'; // Hide the token container
              toggleBlurEffect(); // Remove blur effect
          })
          .catch(err => {
              console.error('Failed to copy token: ', err);
          });
  });

  // Clear the form
  document.getElementById('uploadForm').reset();
}