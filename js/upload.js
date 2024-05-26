document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim().toLowerCase().replace(/\s+/g, '');
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  if (!name || !title || !description || !category || !file) {
    alert('Please fill in all fields and upload a file.');
    return;
  }

  const uniqueToken = generateToken(name);

  const formData = new FormData();
  formData.append('name', name);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('category', category);
  formData.append('file', file);
  formData.append('token', uniqueToken);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.message === 'File uploaded successfully') {
      displayToken(uniqueToken);
      toggleBlurEffect();
    } else {
      alert(data.message);
    }
  })
  .catch(error => console.error('Error:', error));
});

function generateToken(name) {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 6);
  return `${name}-${timestamp}-${randomString}`;
}

function toggleBlurEffect() {
  const mainContent = document.querySelector('.main-content');
  mainContent.classList.toggle('blurred');
}

function displayToken(token) {
  const tokenDisplay = document.getElementById('tokenDisplay');
  tokenDisplay.textContent = token;

  const tokenContainer = document.getElementById('tokenContainer');
  tokenContainer.style.display = 'block';

  const copyTokenButton = document.getElementById('copyToken');
  copyTokenButton.addEventListener('click', function() {
    navigator.clipboard.writeText(token)
      .then(() => {
        alert('Token copied to clipboard!');
        tokenContainer.style.display = 'none';
        toggleBlurEffect();
      })
      .catch(err => console.error('Failed to copy token:', err));
  });

  document.getElementById('uploadForm').reset();
}
