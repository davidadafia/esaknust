class Classroom < ActiveRecord::Base
	acts_as_commontable
	
	has_many :users
    accepts_nested_attributes_for :users
    has_many :outlines
    accepts_nested_attributes_for :outlines
    has_many :resources
    accepts_nested_attributes_for :resources
    belongs_to :year
	accepts_nested_attributes_for :year
end
