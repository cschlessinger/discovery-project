class LogsController < ApplicationController

	def index
		yes_responses = Log.where(symptoms: true)
		no_responses = Log.where(symptoms: false)

		@milk_yes = yes_responses.where(milk: true).count
		@milk_no = no_responses.where(milk: true).count

		@eggs_yes = yes_responses.where(eggs: true).count
		@eggs_no = no_responses.where(eggs: true).count

		@peanuts_yes = yes_responses.where(peanuts: true).count
		@peanuts_no = no_responses.where(peanuts: true).count

		@tree_nuts_yes = yes_responses.where(tree_nuts: true).count
		@tree_nuts_no = no_responses.where(tree_nuts: true).count

		@soy_yes = yes_responses.where(soy: true).count
		@soy_no = no_responses.where(soy: true).count

		@wheat_yes = yes_responses.where(wheat: true).count
		@wheat_no = no_responses.where(wheat: true).count

		@fish_yes = yes_responses.where(fish: true).count
		@fish_no = no_responses.where(fish: true).count	

		@shellfish_yes = yes_responses.where(shellfish: true).count
		@shellfish_no = no_responses.where(shellfish: true).count	
	end

	def new
		@log = Log.new
	end

	def create
		@log = Log.create(log_params)
		flash[:notice] = 'Your entry has successfully been recorded.'
		redirect_to logs_path
	end

	def show

	end

	def edit
		
	end

	def update
		
	end

	def destroy
		
	end

	private

	def log_params
		params.require(:log).permit(:milk, :eggs, :peanuts, :tree_nuts, :soy, :wheat, :fish, :shellfish, :symptoms)
	end

end
