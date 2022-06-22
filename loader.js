

function initLoader(){
  const app = document.querySelector('#header');
  const loader = document.getElementById('loader')
  app.style.visibility = "hidden"
  loader.style.visibility = "visible"
}

function initApp(){
  const app = document.querySelector('#header');
  const loader = document.getElementById('loader')
  app.style.visibility = "visible"
  loader.style.visibility = "hidden"
}




document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});
