class ClassroomsController < ApplicationController
    before_action :authenticate_user!
  def index
    @years = Year.all
    @classrooms = Classroom.all
  end

  def show
  	@classroom = Classroom.find(params[:id])
    @classrooms = Classroom.all
    @sems = Sem.all
    @outlines = Outline.all
    @resources =Resource.all
    @question = Question.find(params[:id])
    @questions =Question.all

    commontator_thread_show(@classroom)
  end

  def mates
  	@users = User.all
  end

   def create
    Classroom.create(params[:classroom])
  end
  
  def update
    classroom = current_account.classrooms.find(params[:id])
	  classroom.update!(classroom_params)
	  redirect_to classroom
  end



private
  def classroom_params
    params.require(:classroom).permit(:title, :body, :id)
    params.require(:year).permit(:year_id)
  end    
end


  <!-- Navigation -->
  <div id="navigation" class="navbar navbar-fixed-top navbar-default" role="navigation">
      <div class="container">

        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#intro">Pascology</a>
        </div>

        <div class="navigation">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <nav>
              <ul class="nav navbar-nav navbar-right">
                <li class="current"><%= link_to 'HOME',homes_index_path %></li>
                <li class="current"><%= link_to 'COURSES',years_index_path %></li>
                <li> <% if current_user %>
                    <%= link_to 'LOGOUT', '/users/sign_out' %>
                    <% else %></li>
                    <li>  <%= link_to 'LOGIN', '/users/sign_in' %></li>
                    <li> <%= link_to 'SIGNUP', '/users/sign_up' %></li>
                    <% end %>
              </ul>
            </nav>
          </div>
          <!-- /.navbar-collapse -->
        </div>

      </div>
    </div>
  <!-- /Navigation -->
<br>
<br>
<br>
<br>

<div class="container">
  <div class="col-sm-12 text-center">
  <h3><strong><%= @classroom.title %></strong></h3>
  </div>  
  <h4><strong><%= current_user.user_name %></strong></h4>

<div class="row" id="features">
    
</div>
</div>
<div class="container row">
<div class="herog col-sm-3 text-center">
       <% for resource in @classroom.resources %>
        <a><%= link_to "PDF's", resource_path(resource), :class => "btn btn-lg" %></a>
        <% end %>

        <% for question in @classroom.questions %>
        <a><%= link_to "Questions", question_path(question), :class => "btn btn-lg" %></a>
        <% end %>
</div>
<div class="herog col-sm-3">
<% @classroom.sems.order(created_at: :asc).each do |sem| %>
  <% sem.outlines.order(created_at: :asc).each do |outline| %>
    <a><%= link_to "Notes", outline_path(outline), :class => "btn btn-lg" %></a>  
  <% end %> 
<% end %>          
</div>
</div>
<div class="herog text-center">
<a><%= link_to "Back", :back, :class => "btn btn-lg" %></a>
</div>
<br>
<br>

