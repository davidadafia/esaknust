class Year < ActiveRecord::Base
	has_many :classrooms
	accepts_nested_attributes_for :classrooms
end
