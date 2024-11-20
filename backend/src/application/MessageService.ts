import { createMessageRepository } from "../domain/message/MessageRepository";

export const createMessageService = (
  repository: ReturnType<typeof createMessageRepository>
) => {
  const fetchMessage = async (): Promise<string | null> => {
    const message = await repository.getMessage();
    return message ? message.message : null;
  };

  return {
    fetchMessage,
  };
};
