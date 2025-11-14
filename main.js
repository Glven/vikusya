const heart_lock = `
  <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 7.2892V7C6.25 5.19099 6.79645 3.72534 7.85181 2.71548C8.90153 1.71101 10.3582 1.25 12 1.25C13.6418 1.25 15.0985 1.71101 16.1482 2.71548C17.2036 3.72534 17.75 5.19099 17.75 7V7.2892C19.634 7.98746 21 9.87329 21 12.0992C21 15.9375 18.0316 18.1516 15.5044 20.0368C15.2417 20.2327 14.9838 20.4251 14.7344 20.6154C13.8 21.3285 12.9 22 12 22C11.1 22 10.2 21.3285 9.26556 20.6154C9.01624 20.4251 8.75832 20.2327 8.49565 20.0368C5.96837 18.1516 3 15.9375 3 12.0992C3 9.87329 4.36604 7.98746 6.25 7.2892ZM7.75 7C7.75 5.4953 8.19732 4.46095 8.88885 3.79924C9.58601 3.13213 10.6294 2.75 12 2.75C13.3706 2.75 14.414 3.13213 15.1112 3.79924C15.8027 4.46095 16.25 5.4953 16.25 7V7.00134C14.8849 6.96863 13.3895 7.53302 12 8.93062C10.6105 7.53302 9.11513 6.96863 7.75 7.00134V7ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="#000000"/>
  </svg>
`

const heart_unlock = `
  <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 7C7.75 5.48967 8.1881 4.45301 8.8607 3.79247C9.5362 3.12908 10.545 2.75 11.8718 2.75C13.5394 2.75 14.7129 3.34422 15.3621 4.39436C15.5798 4.74669 16.042 4.85575 16.3944 4.63795C16.7467 4.42015 16.8557 3.95797 16.6379 3.60564C15.6448 1.99898 13.9089 1.25 11.8718 1.25C10.2634 1.25 8.83628 1.71407 7.80968 2.72225C6.78019 3.73328 6.25 5.19662 6.25 7V7.2892C4.36604 7.98746 3 9.87329 3 12.0992C3 15.9375 5.96837 18.1516 8.49565 20.0368C8.75832 20.2327 9.01624 20.4251 9.26556 20.6154C10.2 21.3285 11.1 22 12 22C12.9 22 13.8 21.3285 14.7344 20.6154C14.9838 20.4251 15.2417 20.2327 15.5044 20.0368C18.0316 18.1516 21 15.9375 21 12.0992C21 7.86196 16.0499 4.85701 12 8.93062C10.6105 7.53302 9.11513 6.96863 7.75 7.00134V7ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="#ff2b2b"/>
  </svg>
`

const image = document.getElementById('image');
let isActive = false;


image.innerHTML = heart_lock;

image.addEventListener('click', setStyles);

function setStyles () {
  const title = document.querySelector('.title');
  const imageNew = document.querySelector('.image');

  title.classList.toggle('title--active');
  imageNew.classList.toggle('image--active');
  
  if (!isActive) {
    image.innerHTML = heart_unlock;
    image.style.opacity = 0.5;
  } else {
    image.innerHTML = heart_lock;
    image.style.opacity = 1;
  }

  isActive = !isActive;
}