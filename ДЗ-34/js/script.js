const formInfo = document.getElementById("form"); 

formInfo.addEventListener("submit", function (event) {
  event.preventDefault();

  
  let userInfo = document.querySelectorAll(
    "#form input, #form select, #form textarea"
  );

  let objectForInfo = {}; 

  for (let key of userInfo) {
    objectForInfo[key.name] = key.value;
  }
  
  localStorage.setItem("saveUserInfo", JSON.stringify(objectForInfo));

  window.open("form-info.html");

});