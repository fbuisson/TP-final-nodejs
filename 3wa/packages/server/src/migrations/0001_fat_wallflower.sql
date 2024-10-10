CREATE TABLE IF NOT EXISTS "book_genres" (
	"book_id" uuid,
	"genre_id" uuid
);
--> statement-breakpoint
ALTER TABLE "books" DROP CONSTRAINT "books_genres_id_genres_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book_genres" ADD CONSTRAINT "book_genres_book_id_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."books"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book_genres" ADD CONSTRAINT "book_genres_genre_id_genres_id_fk" FOREIGN KEY ("genre_id") REFERENCES "public"."genres"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "books" DROP COLUMN IF EXISTS "genres_id";