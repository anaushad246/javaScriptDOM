document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('imagePreview');
            imgElement.src = e.target.result;
            imgElement.style.display = 'block'; // Show the image preview
        };
        reader.readAsDataURL(file);
    }
});
