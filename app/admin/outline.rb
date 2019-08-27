ActiveAdmin.register Outline do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :id, :title, :body, :sem_id, :paid
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
    column :sem_id    
    column :created_at
    column :paid
    column '' do |outline|
    link_to 'VIEW', admin_outline_path(outline) if authorized? :update, outline
    end
  end
end
 