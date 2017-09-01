ActiveAdmin.register User do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :email, :created_at, :last_sign_in_at, :current_sign_in_at, :user_name, :whatsapp
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

    index do
    column :user_name
    column :whatsapp
    column :email
    column :created_at
    column :last_sign_in_at
	  column :current_sign_in_at
    column '' do |user|
      link_to 'VIEW', admin_user_path(user) if authorized? :update, user
    end
  end
  
end
