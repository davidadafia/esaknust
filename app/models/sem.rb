class Sem < ApplicationRecord
	has_many :outlines
    accepts_nested_attributes_for :outlines
    belongs_to :classroom
	accepts_nested_attributes_for :classroom
end
