class AddSymptomsToLogs < ActiveRecord::Migration
  def change
    add_column :logs, :symptoms, :boolean
  end
end
