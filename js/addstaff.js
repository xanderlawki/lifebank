

class Addstaff {
  construction(ID, first_name, last_name, marital_status, gender, phone, resumption_date, email, date_of_birth, role, next_of_kin, next_of_kin_phone_number, next_of_kin_email_address) {
    this.ID =ID,
    this.first_name = first_name,
    this.last_name = last_name,
    this.marital_status = marital_status,
    this.gender = gender,
    this.resumption_date = resumption_date,
    this.email = email,
    this.date_of_birth = date_of_birth,
    this.role = role,
    this.next_of_kin = next_of_kin,
    this.next_of_kin_phone_number = next_of_kin_phone_number,
    this.next_of_kin_email_address = next_of_kin_phone_number,
    this.phone = phone


 
  }

 
  
}


///input vaules
    


  /*
  async function getStaff () {
    await fetch("https://lifebank-staff-portal.herokuapp.com/admin/add_staff.php") 
    .then(res => res.json())
    .then(res => {
      const result = res;
    console.log(result);
    })
/////////input values

    
    const inputValue = {
      first_name: document.querySelector(".firstname").value,
      last_name: document.querySelector(".lastname").value,
      marital_status: document.querySelector(".marital").value,
      gender : document.querySelector(".gender").value,
      resumption_date: document.querySelector(".resumption").value,
      email: document.querySelector(".email").value,
      dob: document.querySelector(".dob").value,
      role: document.querySelector(".role").value,
      kin: document.querySelector(".kin").value,
      kin_phone: document.querySelector(".kin-phone").value,
      kin_email: document.querySelector(".kin-email").value


    }

    //////add input values to class
    const add = (result,  firstname, lastname, marital, gender, resumption, email, dob, role, kin, kin_phone, kin_email) => {
      let newStaff; 
      let ID;
      ID = result[0][result[0].length -1].ID + 1;
    newStaff =  new Addstaff(ID, firstname, lastname, marital, gender, resumption, email, dob, role, kin, kin_phone, kin_email);
   ////push to the arrays
    result.push(newStaff);

      return newStaff;
    }
    //////
    ///
    newresult =  add(result, inputValue.first_name, last_name, inputValue.marital_status, inputValue.gender, inputValue.resumption, inputValue.email, inputValue.dob, inputValue.role, inputValue.kin, inputValue.kin_phone, inputValue.kin_email);
   console.log(newresult);

  ///
}
getStaff();
}
*/


////controlller////
document.querySelector(".add").addEventListener("click" , e => {
  e.preventDefault();
  fetch("https://cors-anywhere.herokuapp.com/https://lifebank-staff-portal.herokuapp.com/admin/add_staff.php", {
				method: 'POST',
				body: JSON.stringify(
          {
          first_name: document.querySelector(".firstname").value,
          last_name: document.querySelector(".lastname").value,
          email: document.querySelector(".email").value,
          phone: document.querySelector(".phone_number").value,
          role: document.querySelector(".role").value,
          gender : document.querySelector(".gender").value,
          resumption_date: document.querySelector(".resumption").value,
          date_of_birth: document.querySelector(".dob").value,
          address: document.querySelector(".home_address").value,
          marital_status: document.querySelector(".marital").value,
          next_of_kin_name: document.querySelector(".kin").value,
          next_of_kin_phone_number: document.querySelector(".kin-phone").value,
          next_of_kin_email: document.querySelector(".kin-email").value,
          next_of_kin_address: document.querySelector(".kin_address").value,
          next_of_kin_relationship: document.querySelector(".kin_relationship").value,
          

        }
        ),
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
					"Retry-After": "10"
				}
       })
       .then(response => response.json())
       .then(response => {
         console.log(response)
         if(response.res === 1) {
           alert("ADDED SUCCESSFULLY")
         }
       })
})

