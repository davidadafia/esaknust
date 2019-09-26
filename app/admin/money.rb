ActiveAdmin.register Money do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :id, :value, :classroom_id, :user_name, :user_id
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
    column :value
    column :user_name
    column :user_id
    column :classroom_id
    column :created_at
    column '' do |money|
    link_to 'VIEW', admin_money_path(money) if authorized? :update, money
    end
  end
end
 