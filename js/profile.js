
if(window.location.pathname === "/profile.html") {
  console.log(window.location.pathname)
  const markup = `
      <div class="header">
      <div> <a href="#profile">welcome</a></div>
      <p>hey u </div>
      </div>
      
`
document.querySelector(".container").insertAdjacentHTML("beforeend", markup)
}
else {
  null
}



  if(window.location.hash === '/profile.html#profile') {
   console.log(window.location.hash)
   window.addEventListener("hashchange", ()=> {
     document.querySelector(".container").innerHTML = "";
     console.log(window.location.hash)
    const markup = `
    <div class="sample">
    <div class="samplepage">
    <p>damn</p>
    </div>
  </div>
    `
    document.querySelector(".container").insertAdjacentHTML("beforeend", markup)
   })
  
   
  
 }
 /*export const renderProfilepage = (result)=> {
  const markup = `
  <div class=profile__header>
  <h2 class="staff__profile">staff profile</h2>
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
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">Gender</div>
                <div class="profile__info">${result.gender}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">Role</div>
                <div class="profile__info">${result.role}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">Resumption date</div>
                <div class="profile__info">${result.resumption_date}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">DOB</div>
                <div class="profile__info">${result.date_of_birth}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">Phone number</div>
                <div class="profile__info">${result.phone}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">Email Address</div>
                <div class="profile__info">${result.email}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
              <div class="profile__data">
                <div class="profile__title">Next of Kin(name)</div>
                <div class="profile__info">${result.next_of_kin}</div>
                <div class="profile__icon">
                  <img src="https://image.flaticon.com/icons/png/512/84/84380.png" class="icon-image">
                </div>
              </div>
            </div>
  `
  document.querySelector('.profile__container').insertAdjacentHTML('beforeend', markup);

}
 
*/