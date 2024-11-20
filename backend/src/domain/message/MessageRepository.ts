import { Pool } from "pg";
import { Message } from "./Message";

export class MessageRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async getMessage(): Promise<Message | null> {
    const res = await this.pool.query("SELECT * FROM test LIMIT 1");
    if (res.rows.length > 0) {
      const row = res.rows[0];
      return new Message(row.id, row.message);
    }
    return null;
  }
}
