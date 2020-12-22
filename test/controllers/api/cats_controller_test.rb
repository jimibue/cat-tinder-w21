require 'test_helper'

class Api::CatsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cats_index_url
    assert_response :success
  end

  test "should get updpate" do
    get api_cats_updpate_url
    assert_response :success
  end

end
