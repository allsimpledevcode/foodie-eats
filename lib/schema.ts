import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 50 }),
  lastName: varchar('last_name', { length: 50 }),
  phoneNumber: varchar('phone_number', { length: 20 }),
  passwordHash: varchar('password_hash', { length: 255}).notNull(),
  email: varchar('email', { length: 50 }).notNull(),
  profilePicture: varchar("profile_picture", { length: 255 }),
  createdAt: timestamp('created_at').defaultNow()
});
