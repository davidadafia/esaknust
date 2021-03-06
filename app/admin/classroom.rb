ActiveAdmin.register Classroom do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :title, :body, :id, :year_id
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

	index do
    column :id
    column :title
    column :year_id
    column :created_at
    column '' do |classroom|
      link_to 'VIEW', admin_classroom_path(classroom) if authorized? :update, classroom
    end
  end
end
 