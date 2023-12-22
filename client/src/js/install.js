const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  console.log('beforeinstallprompt fired');
  butInstall.style.visibility = 'visible';
  butInstall.textContent = 'Click to Install!';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('appinstalled fired', event);
});