class Outline < ActiveRecord::Base
	belongs_to :sem
	accepts_nested_attributes_for :sem

	
end
