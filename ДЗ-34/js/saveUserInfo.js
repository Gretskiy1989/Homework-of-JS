function showInfo() {
    
    let userInform = localStorage.getItem("saveUserInfo");
  
    
    if (userInform) {
      let div = document.createElement("div");
      div.classList.add("container");
      document.body.append(div);
  
      let h1 = document.createElement("h1");
      div.append(h1);
      h1.innerHTML = "Your data has been successfully registered";
  
      let ul = document.createElement("ul");
      ul.classList.add("list-group");
      div.append(ul);
  
      let convertLocalStorage = JSON.parse(userInform);
  
      for (let key in convertLocalStorage) {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        if (convertLocalStorage[key]) {
          li.innerHTML = `<b>${key}:</b> ${convertLocalStorage[key]}`;
          ul.append(li);
        } else {
          li.innerHTML = `<b>${key}:</b> Данные не заполнены`;
          li.classList.add("list-group", "text-danger");
          ul.append(li);
        }
      }
    } else {
      
      alert("Всегда рады видеть новых пользователей!");
    
    }
  }
  showInfo();