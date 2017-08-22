class Outline < ActiveRecord::Base
	belongs_to :classroom
	accepts_nested_attributes_for :classroom
end
