ActiveAdmin.register Sem do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :id, :title, :body, :footer, :classroom_id
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
    column :body
    column :classroom_id
    column :footer
    column :created_at
    column '' do |sem|
      link_to 'VIEW', admin_sem_path(sem) if authorized? :update, sem
    end
  end
end
 