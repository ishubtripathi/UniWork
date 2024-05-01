// script.js
document.getElementById('createNFTForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    try {
        const response = await fetch('/api/create-nft', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'NFT created successfully!';
        } else {
            document.getElementById('message').innerText = data.message || 'An error occurred.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'An error occurred. Please try again later.';
    }
});
