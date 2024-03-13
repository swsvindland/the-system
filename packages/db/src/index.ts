import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";

import * as post from "./schema/post";

export const schema = { ...post };

export const db = drizzle(sql, {schema});

export * from "drizzle-orm";
