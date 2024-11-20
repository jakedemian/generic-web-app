import { createTestRepository } from "../infrastructure/test.repo";

export const createTestService = (
  repository: ReturnType<typeof createTestRepository>
) => {
  const fetchMessage = async (): Promise<string | null> => {
    const message = await repository.getMessage();
    return message ? message.message : null;
  };

  return {
    fetchMessage,
  };
};
