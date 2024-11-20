import Knex from "knex";
import { Test } from "../domain/test/Test";
import { TestRepository } from "../domain/test/TestRepoisitory";

export const createTestRepository = (knex: Knex): TestRepository => {
  const getMessage = async (): Promise<Test | null> => {
    const row = await knex<Test>("test").first();
    if (row) {
      return { id: row.id, message: row.message };
    }
    return null;
  };

  return {
    getMessage,
  };
};
