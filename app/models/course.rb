class Course < ActiveRecord::Base
	belongs_to :year
	accepts_nested_attributes_for :year
	has_many :classrooms
	accepts_nested_attributes_for :classrooms
end
