# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Ride.destroy_all


u1 = User.create(name: "Gregory")

r1 = Ride.create(
    name: "Mall Run", 
    distance: 15, 
    rating: 3, 
    image_url: "https://qns.com/wp-content/uploads/2016/01/bike-lanes-qns-blvd.jpg",
    user_id: User.all.sample.id,
    time: "0:50"
    )

r2 = Ride.create(
    name: "Five Borough Bike Tour", 
    distance: 40, 
    rating: 5, 
    image_url: "http://www.mynytaxi.com/wp-content/uploads/2014/05/Five-Borough-Bike-Tour.gif",
    user_id: User.all.sample.id,
    time: "3:15"
    )

r3 = Ride.create(
    name: "Work Commute", 
    distance: 12, 
    rating: 2, 
    image_url: "https://blogmedia.evbstatic.com/wp-content/uploads/rally-legacy/2018/07/30121700/NYC-Neighborhood-Guide_-How-to-Hang-Out-in-DUMBO-Like-a-Local-1-1500x750.png",
    user_id: User.all.sample.id, 
    time: "1:20"
    )

r4 =  Ride.create(
    name: "Sunday Cafe Ride", 
    distance: 4, 
    rating: 4, 
    image_url: "https://images.unsplash.com/photo-1564223269775-8130cb84f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80",
    user_id: User.all.sample.id,
    time: "0:20"
    )