class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :body
      t.string :title
      t.boolean :done

      t.timestamps
    end
  end
end
