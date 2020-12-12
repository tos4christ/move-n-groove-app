class ChangeDurationColumnType < ActiveRecord::Migration[6.0]
  def change
    change_column :activities, :duration, :integer
  end
end
