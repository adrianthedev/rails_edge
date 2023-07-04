class UserResource < Avo::BaseResource
  self.title = :id
  self.includes = []
  self.search_query = -> do
    scope.ransack(id_eq: params[:q], name_cont: params[:q], m: "or").result(distinct: false)
  end
  self.stimulus_controllers = "test"

  field :id, as: :id
  # Fields generated from the model
  field :name, as: :text
  field :email, as: :text
  # add fields here
end
