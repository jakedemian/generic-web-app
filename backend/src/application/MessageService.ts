import { MessageRepository } from "../domain/message/MessageRepository";
import { Message } from "../domain/message/Message";

export class MessageService {
  private repository: MessageRepository;

  constructor(repository: MessageRepository) {
    this.repository = repository;
  }

  async getMessage(): Promise<string | null> {
    const message: Message | null = await this.repository.getMessage();
    return message ? message.message : null;
  }
}
