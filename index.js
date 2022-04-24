const userlist = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ]

const nameElement = document.querySelector(".name")
 
 const imageElement = document.querySelector('#img')
 const emailElement = document.querySelector('.email')

 const prevbtn = document.querySelector('#prev')
 const nextbtn = document.querySelector('#next')



 let index = 0
 const currentelement = userlist[index]
 addlist(currentelement)

 function addlist(indexofobject){
  nameElement.innerHTML= `${'name : '}
  ${indexofobject.first_name} ${indexofobject.last_name} `
  emailElement.innerHTML = ` ${"email : "} ${indexofobject.email}`
  imageElement.src = indexofobject.avatar

 }

 
  nextbtn.addEventListener('click',displaynext)
  prevbtn.addEventListener('click',displayPrev)

  function displaynext(){
    if(index === userlist.length-1){
      index=0
    }
    else{
      index++
    }
    addlist(userlist[index])
    console.log(index)
  }

  function displayPrev(){
    if(index === 0){
      index=userlist.length-1
    }
    else{
      index--
    }
    addlist(userlist[index])
    console.log(index)
  }





 
  
