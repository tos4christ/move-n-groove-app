class ChangeActivityType < ActiveRecord::Migration[6.0]
  def change
    rename_column :activities, :type, :activity_type
  end
end
