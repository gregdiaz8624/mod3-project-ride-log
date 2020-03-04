class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :rides
end
