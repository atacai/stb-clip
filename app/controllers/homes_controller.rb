class HomesController < ApplicationController
	def index
	end

	def test
		Light.find(1).put(:state, :on => params['status'] == 'true')
		# , :sat => params['sat'], :bri => params['bri'], :hue => params['hue']
	end
end
