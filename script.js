function toggleHiddenContent(buttonNumber) {
  var hiddenContent = document.getElementById('hidden-content-' + buttonNumber);
  
  if (hiddenContent.style.display === '' || hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block';
  } else {
    hiddenContent.style.display = 'none';
  }
}
