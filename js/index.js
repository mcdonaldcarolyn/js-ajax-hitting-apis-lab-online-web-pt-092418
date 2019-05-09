// your code here
function getRepositories() {
   const username = document.querySelector('#username').value;
      const url = `https://api.github.com/users/${username}/repos`;
  const req = new XMLHttpRequest();
  eq.addEventListener('load', function () {
            // obviously do something else with the response text than just printing it out
            console.log(this.responseText);
        });
    
        req.open('GET', url);
        req.send();
}