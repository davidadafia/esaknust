ActiveAdmin.register Blog do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	
 permit_params :title, :body, :writer, :blopic
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
    column :writer
    column :created_at
    column '' do |blog|
      link_to 'VIEW', admin_blog_path(blog) if authorized? :update, blog
    end
  end
end
 