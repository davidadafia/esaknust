class Classroom < ActiveRecord::Base
	has_many :users
    accepts_nested_attributes_for :users
    belongs_to :year
	accepts_nested_attributes_for :year

	acts_as_commontable
end
