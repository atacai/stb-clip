class HomesController < ApplicationController
	def index
	end

	def test
		Light.find(params['id'].to_i).put(:state, :on => params['status'] == 'true', :sat => params['sat'].to_i, :bri => params['bri'].to_i, :hue => params['hue'].to_i)
	end
end
