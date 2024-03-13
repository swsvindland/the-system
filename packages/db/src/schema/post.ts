import {
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const post = pgTable("post", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});
