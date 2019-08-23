class Classroom < ActiveRecord::Base
	acts_as_commontable
	
    has_many :outlines
    accepts_nested_attributes_for :outlines
    has_many :sems
    accepts_nested_attributes_for :sems
    has_many :resources
    accepts_nested_attributes_for :resources
    has_many :questions
    accepts_nested_attributes_for :questions
    belongs_to :year
	accepts_nested_attributes_for :year


end
