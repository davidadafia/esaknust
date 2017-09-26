class Question < ActiveRecord::Base
	belongs_to :classroom
	accepts_nested_attributes_for :classroom
	has_many :parts
    accepts_nested_attributes_for :parts
end
