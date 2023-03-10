# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, options={})
    if resource.persisted?
      render json: {
        status: {
          code: 200,
          message: "User created successfully",
          data: UserSerializer.new(resource).serializable_hash[:data][:attributes],
        }
      }, status: :ok
    else 
      render json: {
        status: {
          code: 400,
          message: "User could not be created successfully",
          errors: resource.errors.full_messages,
        }
      }, status: :unprocessable_entity
    end
  end
end
