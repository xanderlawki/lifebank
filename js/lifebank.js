async function getStaff () {
  const ress =  await fetch('https://lifebank-staff-portal.herokuapp.com/admin/pages/read_all_staff.php')
   .then(ress => ress.json())
   console.log(ress);
   let result;
   result = ress;
}

