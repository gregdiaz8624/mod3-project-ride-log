class RideSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :image_url, :rating, :time
  has_one :user

end
