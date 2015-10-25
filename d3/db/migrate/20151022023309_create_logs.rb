class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
    	t.boolean :milk
    	t.boolean :eggs
    	t.boolean :peanuts
    	t.boolean :tree_nuts
    	t.boolean :soy
    	t.boolean :wheat
    	t.boolean :fish
    	t.boolean :shellfish
      t.timestamps null: false
    end
  end
end
