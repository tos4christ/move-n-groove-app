class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :type
      t.time :duration
      t.date :date

      t.timestamps
    end
  end
end
