import { Test } from "./Test";

export interface TestRepository {
  getMessage(): Promise<Test | null>;
}
