function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  function showProjectDetails(details) {
    document.getElementById("modalContent").innerText = details;
    document.getElementById("projectModal").style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById("projectModal").style.display = 'none';
  }
  