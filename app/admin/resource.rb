ActiveAdmin.register Resource do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :title, :id, :body, :classroom_id
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
    column :classroom_id
    column :created_at
    column '' do |resource|
      link_to 'VIEW', admin_resource_path(resource) if authorized? :update, resource
    end
  end
end
 