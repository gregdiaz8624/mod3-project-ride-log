
const ridesList = document.querySelector("#ride-list")
const rideDetail = document.querySelector("#ride-detail")
const rideForm = document.querySelector('#new-ride') 


//------------------------Initial Fetch-----------------------------------

fetch("http://localhost:3000/users/1")
.then(response => response.json())
.then(userObj => userObj.rides.forEach(renderRide))

//-----------------------Display List------------------------------------

function renderRide(ride){ 
    let rideLi = document.createElement("li")
    rideLi.className = "ride-li"
    rideLi.dataset.id = ride.id
    rideLi.innerText = ride.name

    ridesList.append(rideLi)

    rideLi.addEventListener("click", (event) => {
        rideDetail.innerHTML = ""
        renderDetail(ride)
    })
}

//----------------------Helper Function-----------------------------

function gatherFormData(event){
  return {
    name: event.target.name.value,
      image_url: event.target.image_url.value,
      distance: event.target.distance.value,
      rating: event.target.rating.value,
      time: event.target.time.value,
      user_id: 1
  }
}

//----------------------Create New Ride-------------------------------
rideForm.addEventListener('submit', (event) => {   
  
  event.preventDefault()  
  
  if (event.target.name.value === "" ||
      event.target.distance.value === "" ||
      event.target.image_url.value === "" ||
      event.target.rating.value === ""||
      event.target.time.value === "")
  {
    alert("Entry invalid")  
  } 
  else {
    let newRide = gatherFormData(event);
    fetch('http://localhost:3000/rides', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newRide)
  })
  .then(res => res.json())
  .then(ride => {
    renderRide(ride)
    rideDetail.innerHTML = ""
    renderDetail(ride)
  })
    
  }
 rideForm.reset()
}) 

//----------------------Ride Detail------------------------------------

function renderDetail(ride){
    
  let title = document.createElement("h3")
  let rating = document.createElement("h5")
  let distance = document.createElement("p")
  let time = document.createElement("p")
  let img = document.createElement("img")
  let destroy = document.createElement("button")

  title.innerText = ride.name 
  distance.innerText = "Total Distance: "+ ride.distance + " miles"
  time.innerText = "Personal Best Time: "+ ride.time
  img.src = ride.image_url 
  img.className = "image"
  rating.innerText = `Rating ${ride.rating}/5`
  destroy.setAttribute ("class", "deleteButton")
  destroy.setAttribute ("data-id", `${ride.id}`)
  
  destroy.innerText = "Delete"

  rideDetail.append(title, distance, time, rating, img, destroy) 
  // console.log(ride)

  
  //------------------Delete Ride---------------------------------------

  destroy.addEventListener('click', (event) => {
    event.preventDefault()
    
    const deletey = document.querySelector(`.ride-li[data-id='${ride.id}']`)

    fetch(`http://localhost:3000/rides/${ride.id}`, {
    method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
    deletey.remove()
    rideDetail.innerHTML = "Ride Deleted"
    })
  
  })

  //--------------------Update Ride-------------------------------------

                //to be added
                //Have to create a form/ update the controller 
                //need to create button,

                //make patch /ride/${id}
                //DOM and event listener and fetch "PATCH"(what makes it an update) on submit to button 



}//---------------- End of Ride Detail ----------------------------------

