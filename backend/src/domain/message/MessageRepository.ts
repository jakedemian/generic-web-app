import { Pool } from "pg";
import { Message } from "./Message";

export const createMessageRepository = (pool: Pool) => {
  const getMessage = async (): Promise<Message | null> => {
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
