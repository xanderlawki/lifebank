

////create a class///

class database {

  constructor() {
  

  }

   async getInfo() {
      try {
        const res =  await window.fetch('https://lifebank-staff-portal.herokuapp.com/admin/pages/read_all_staff.php')
         .then(res => res.json())
        
        this.result = res;
    
       
        console.log(this.result);
        ////for local storage which is not yet needed//
        window.localStorage.setItem("result", JSON.stringify(this.result));
       
      }
      catch(error) {
        alert(error)
      }
  //////render profile function////
      renderProfile(staffdata.result, staffdata.result)
      ////render result function//////
      renderResult(staffdata.result)
      renderResult(staffdata.result)
      //////display buttons functions////
      displaybutton();
      ////code for the page 1 ////
      if(window.location.hash === "" && window.location.pathname  === "/homepage.html") {
        document.querySelector(".one").addEventListener("click", ()=> {
          document.querySelector(".staff__container").innerHTML = ""
          renderResult(staffdata.result, 1,  16)
          const markup = `
                <div class="staff__card">
                <div class="staff__image">
                  <a href="#${result.ID}"><img src="./images/avatar_image.webp" class="image"></a> 
                </div>
                <div class="staff__name">
                    <h3>${result.first_name} ${result.last_name}</h3>
                </div>
                <div class="staff__position">
                    <h3>${result.role}</h3>
                </div>
                <div class="staff__profile">
              <div style="color:rgb(126, 21, 21);" onclick="sharemail ${result.email} </div>
                </div>
                </div>
    `
  
        
   
      document.querySelector(".staff__container").insertAdjacentHTML("beforeend", markup)
  
     
          
        })
      }
       /////code for page 2 /////
       if(window.location.hash === "" && window.location.pathname === "/homepage.html") {
        document.querySelector(".two").addEventListener("click", ()=> {
          document.querySelector(".staff__container").innerHTML = ""
          renderResult(staffdata.result, 3,  16)
          const markup = `
                <div class="staff__card">
                <div class="staff__image">
                  <a href="#${result.ID}"><img src="./images/avatar_image.webp" class="image"></a> 
                </div>
                <div class="staff__name">
                    <h3>${result.first_name} ${result.last_name}</h3>
                </div>
                <div class="staff__position">
                    <h3>${result.role}</h3>
                </div>
                <div class="staff__profile">
              <div style="color:rgb(126, 21, 21);" onclick="sharemail("> ${result.email} </div>
                </div>
                </div>
    `
  
        
   
      document.querySelector(".staff__container").insertAdjacentHTML("beforeend", markup)
  
     
          
        })
      }
      /////code for page 3 /////
      if(window.location.hash === "" && window.location.pathname === "/homepage.html") {
        document.querySelector(".three").addEventListener("click", ()=> {
          document.querySelector(".staff__container").innerHTML = ""
          renderResult(staffdata.result, 3,  16)
          const markup = `
                <div class="staff__card">
                <div class="staff__image">
                  <a href="#${result.ID}"><img src="./images/avatar_image.webp" class="image"></a> 
                </div>
                <div class="staff__name">
                    <h3>${result.first_name} ${result.last_name}</h3>
                </div>
                <div class="staff__position">
                    <h3>${result.role}</h3>
                </div>
                <div class="staff__profile">
              <div style="color:rgb(126, 21, 21);" onclick="sharemail("> ${result.email} </div>
                </div>
                </div>
    `
  
        
   
      document.querySelector(".staff__container").insertAdjacentHTML("beforeend", markup)
  
     
          
        })
      }
      ///// code for page four //////
      if(window.location.hash === "" && window.location.pathname === "/homepage.html") {
        document.querySelector(".four").addEventListener("click", ()=> {
          document.querySelector(".staff__container").innerHTML = ""
          renderResult(staffdata.result, 4,  16)
          const markup = `
                <div class="staff__card">
                <div class="staff__image">
                  <a href="#${result.ID}"><img src="./images/avatar_image.webp" class="image"></a> 
                </div>
                <div class="staff__name">
                    <h3>${result.first_name} ${result.last_name}</h3>
                </div>
                <div class="staff__position">
                    <h3>${result.role}</h3>
                </div>
                <div class="staff__profile">
              <div style="color:rgb(126, 21, 21);" onclick="sharemail("> ${result.email} </div>
                </div>
                </div>
    `
  
        
   
      document.querySelector(".staff__container").insertAdjacentHTML("beforeend", markup)
  
     
          
        })
      }
      
      
     
     
      
     
     
      
      
     
        
    }
  

}

const staffdata = new database();
console.log(staffdata)
staffdata.getInfo();

  
  
  

 

 

 
 /////displaying the homepage ////
const renderHomepage = (result)=> {
  

  if(window.location.hash === "" && window.location.pathname === "/homepage.html" ) {
    const markup = `
              <div class="staff__card">
              <div class="staff__image">
                <a href="#${result.ID}"><img src="./images/avatar_image.webp" class="image"></a> 
              </div>
              <div class="staff__name">
                  <h3>${result.first_name} ${result.last_name}</h3>
              </div>
              <div class="staff__position">
                  <h3>${result.role}</h3>
              </div>
              <div class="staff__profile">
            <div style="color:rgb(126, 21, 21);">${result.email}</div>
              </div>
              </div>
  `

 
 
    document.querySelector(".staff__container").insertAdjacentHTML("beforeend", markup)

    
   
   
  }
 
   
  }

  //////rendering the profile page ////
 
  const renderProfile = (results, result)=> {
  
    
    window.addEventListener("hashchange", ()=> {
      console.log(10)
      document.querySelector(".container").innerHTML = "";
     const id =  window.location.hash.replace("#", "");
    
     
        console.log(id)
      console.log(result)
     
       result =  results.find(results => results.ID == id);
        console.log(id)
        console.log(result)
        
        
        const markup = `
      
       
        <div class="container">
         <div class="profile__container">
             
                   <div class=profile__header>
            <h2>staff profile</h2>
          </div>
            <div class="profile__base__data">
              <div class="profile__image">
                <img src="./images/avatar_image.webp" class="img">
              </div>
            <div class="profile__name">
             
                     <h3>${result.first_name} ${result.last_name}</h3> 
                     <h3>${result.role}</h3>
                    </div>
                    </div>
                        <div class="profile__data">
                          <div class="profile__title">Marital status</div>
                          <div class="profile__info">${result.marital_status}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Gender</div>
                          <div class="profile__info">${result.gender}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Role</div>
                          <div class="profile__info">${result.role}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Resumption date</div>
                          <div class="profile__info">${result.resumption_date}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">DOB</div>
                          <div class="profile__info">${result.date_of_birth}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Phone number</div>
                          <div class="profile__info">${result.phone}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Email Address</div>
                          <div class="profile__info">${result.email}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Next of Kin(name)</div>
                          <div class="profile__info">${result.next_of_kin_name}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Next of Kin(Email address)</div>
                          <div class="profile__info">${result.next_of_kin_email}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Next of Kin(Phone number)</div>
                          <div class="profile__info">${result.next_of_kin_name}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                          <div class="profile__title">Next of Kin(Relationship)</div>
                          <div class="profile__info">${result.next_of_kin_relationship}</div>
                          <div class="profile__icon">
                           
                          </div>
                        </div>
                        <div class="profile__data">
                        
                        <div class="profile__title">Status</div>
                        <div class="profile__info" id="status">${result.employment_status}</div>
                        <button class="btn"> save </button>
                          
                        
                      </div>
                      <div class="profile__icon">
                      <div class="back">
                         <a href="/homepage.html"><img src="https://img.icons8.com/android/24/000000/back.png" class="back__image"/></a>
                       </div>
                   </div>
                  </div>
                 
              
        `

        document.querySelector(".container").insertAdjacentHTML("beforeend", markup);
        document.querySelector(".pagination").style.display = "none"
        
        console.log(result.ID)
        let status = document.getElementById("status").textContent;
        console.log(status)
        ///making the status text editable ////
        document.getElementById("status").addEventListener("click", ()=> {
          document.getElementById("status").contentEditable = true;
          let status = document.getElementById("status").textContent;
          console.log(status)
        })
        ////sending the status information to the backend////
        document.querySelector(".btn").addEventListener("click" , e => {
  
          e.preventDefault();
          
            fetch("https://cors-anywhere.herokuapp.com/https://lifebank-staff-portal.herokuapp.com/admin/update_staff.php", {
        			method: 'POST',
         				body: JSON.stringify(
                   {
                    id: result.ID,
                    employment_status: document.getElementById("status").textContent     
                 }
                
                 ),
                 
                 
        				headers: {
        					"Content-Type": "application/json;",
        				    "Retry-After": "10"
        				}
              })
              .then(response => response.json())
               .then(response => {
                 if(response.res === 1){
                   alert("Successfully updated")
                 }
                 else {
                   alert("error.. please try again")
                 }
               })

          
             
        })
        
        
        
        
    })
    }
   
  
     
    
    ////render result function ////
   const renderResult = (result, page = 1, resperpage = 16)=> {
    const start = (page - 1) * resperpage;
    const end = page * resperpage;
    
    
  result.slice(start, end).forEach(renderHomepage);
  
  
}
      ///the display buttoon///
  const displaybutton = ()=> {
    if(window.location.hash === "") {
    const markup =  `
        <button class="one">1</button>
        <button class="two">2</button>
        <button class="three">3</button>
        <button class="four">4</button>
    `
    document.querySelector(".pagination").insertAdjacentHTML("beforeend", markup)
  }
  else {
    null
  }
}
  

  


   /////awesome 437 lines of code ////