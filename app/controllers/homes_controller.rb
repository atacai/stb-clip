class HomesController < ApplicationController
	def index
	end

	def test
		@clip = Clip.new
		# @clip.status = params['status']
		# @clip.sat = params['sat']
		# @clip.bri = params['bri']
		# @clip.hue = params['hue']
		# @clip.generate
		# p @clip
		redirect_to root_path
	end
end
