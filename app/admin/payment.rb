ActiveAdmin.register Payment do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :id, :value, :user_id, :classroom_id
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
    column :user_id
    column :classroom_id
    column :created_at
    column '' do |payment|
    link_to 'VIEW', admin_payment_path(payment) if authorized? :update, payment
    end
  end
end
 