ActiveAdmin.register Part do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :id, :title, :body, :question_id
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
    column :question_id
    column :created_at
    column '' do |part|
      link_to 'VIEW', admin_part_path(part) if authorized? :update, part
    end
  end
end
 