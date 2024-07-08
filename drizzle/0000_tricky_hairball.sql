CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50),
	"username" varchar(50),
	"email" varchar(50)
);
