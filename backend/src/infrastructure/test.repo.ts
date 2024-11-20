import { Pool } from "pg";
import { Test } from "../domain/test/Test";
import { TestRepository } from "../domain/test/TestRepoisitory";

export const createTestRepository = (pool: Pool): TestRepository => {
  const getMessage = async (): Promise<Test | null> => {
    const res = await pool.query("SELECT * FROM test LIMIT 1");
    if (res.rows.length > 0) {
      const row = res.rows[0];
      return { id: row.id, message: row.message };
    }
    return null;
  };

  return {
    getMessage,
  };
};
