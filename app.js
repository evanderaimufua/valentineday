
document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  const userNameContainer = document.getElementById('userNameContainer');

  if (name){
    userNameContainer.textContent = `Will You Be my Valentine ${decodeURIComponent(name)}?`;
  }

});

function validateAndRedirect(page) {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name) {
        redirectToPage(page, name);
    } else {
        alert('Please enter a name before continuing.');
        
    }
}
/* page redirection*/

function redirectToPage(page, name) {
  window.location.href = `${page}?name=${encodeURIComponent(name)}`;
}

