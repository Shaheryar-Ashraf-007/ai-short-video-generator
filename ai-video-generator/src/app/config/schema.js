import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    imageUrl: varchar('imageUrl', { length: 255 }),
    subscription: varchar('subscription').default('false')
});
