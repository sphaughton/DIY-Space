ENV['RAILS_ENV'] ||= 'test'
require 'spec_helper'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'
require 'capybara'

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
end
