class RidesController < ApplicationController
    def index
        rides = Ride.all 
        render json: rides
    end

    def show
        ride = Ride.find(params[:id])
        render json: ride
    end

 
    def create
        ride = Ride.create(ride_params)
        render json: ride
        
    end

    def update
        ride = Ride.find(params[:id])
        ride.update(params.permit(:time))

        render json: ride
     end 


    def destroy
        ride = Ride.find(params[:id])
        ride.destroy

        render json: ride

    end

    private

    def ride_params
        params.require(:ride).permit(:name, :rating, :distance, :time, :image_url, :user_id)
    end



end
