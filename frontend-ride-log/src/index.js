
const ridesList = document.querySelector("#ride-list")
const rideDetail = document.querySelector("#ride-detail")
const rideForm = document.querySelector('#new-ride') 

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
    fetch('http://localhost:3000/rides', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: event.target.name.value,
      image_url: event.target.image_url.value,
      distance: event.target.distance.value,
      rating: event.target.rating.value,
      time: event.target.time.value,
      user_id: 1
    })
  })
  .then(res => res.json())
  .then(ride => renderRides(ride))
  }
}) 

fetch("http://localhost:3000/users/1")
.then(response => response.json())
.then(data => data.rides.forEach(renderRides))

function renderRides(ride){ 
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

  rideDetail.append(title, distance, time, rating, img , destroy)

  destroy.addEventListener('click', (event) => {
    event.preventDefault()
    

    fetch(`http://localhost:3000/rides/${ride.id}`, {
    method: "DELETE"
    })
   
    rideDetail.innerHTML = "Ride Deleted"

  })
 // destroy.closest(".ride-li")
// const destroyBikeLi = ridesList.querySelectorAll.filter(rideLi => rideLi.dataset.id === ride.id)
    // console.log(destroyBikeLi)
    // console.log(ride.id)
    // // if (event.target.dataset.id == ridesList.querySelector("data-id")){
    // //   rideLi.remove()
    // // }

}

