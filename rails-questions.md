# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
-  Stands for Structured Query Language, it is a query language. It is used to facilitate retrieving specific information from databases.



2. What the PostgreSQL query that would return all the content in a particular table?
This would be: SELECT * FROM an dthe name of the file


3. What is the command to create a new Rails application with a PostgreSQL database?
 $ rails new app_name -d postgresql -T


4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
$ rails g model meals meals_breakfast:string meals_lunch:string meals_dinner:string


5. What is a migration? Why would you use one?
Migrations are used to chnage the shape of an existing database.


6. What is the command to generate a migration file?
$ rails generate migration add_item_to_meals
or
$ rails generate migration AddItemToMeals




7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
$ rails generate model List
$ rails generate migration add_item_to_meals
or
$ rails generate migration AddItemToMeals



8. What is the schema file in a Rails application? Can What is the schema file in a Rails application? Can you modify the schema directly?? Why or why not?
It documents the final current state of the database schema, and no we can not modofy the schema directly because it has already been migrated. 


9. What is the Rails console?
 $ rails c


10. What is the Rails console command to see all the content in a particular table?
\|