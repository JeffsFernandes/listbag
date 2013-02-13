require 'test_helper'

class JsonControllerTest < ActionController::TestCase
  test "should get lista" do
    get :lista
    assert_response :success
  end

end
