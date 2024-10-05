import { writable } from "svelte/store";
import type { Password_Object } from "./utils";

class Modal {
  subscribe: any;
  set: any;
  update: any;
  content: any;

  constructor() {
    const { subscribe, set, update } = writable<any>();
    this.subscribe = subscribe;
    this.set = set;
    this.update = update;
    this.content = null;
  }

  open() {
    this.set(true);
  }
  close() {
    this.set(false);
  }
}

export const modal = new Modal();

export const passwords_store = writable<Password_Object[]>([]);

// Message System Start
export type MessageType = {
  id?: number;
  timeout_ms?: number;
  message?: string;
  dismissable?: boolean;
  type?: "success" | "error" | "warning" | "info";
};

class Notify {
  subscribe: any;
  set: any;
  update: any;

  constructor() {
    const { subscribe, set, update } = writable([] as MessageType[]);
    this.subscribe = subscribe;
    this.set = set;
    this.update = update;
  }

  send({
    message = "",
    timeout_ms = 3000,
    dismissable = true,
    type = "info",
  }: MessageType) {
    // Check if dismissable and timeout_ms is exclusive
    if (!dismissable && timeout_ms == 0) {
      console.error("Cannot have dismissable: true and timeout_ms: 0");
      return;
    }

    const id = Math.random();
    this.update((messages: MessageType[]): any => [
      ...messages,
      { id: id, message: message, dismissable, type },
    ]);
    if (timeout_ms > 0) {
      setTimeout(() => {
        this.update((messages: MessageType[]): any =>
          messages.filter((element) => element.id != id),
        );
      }, timeout_ms);
    }
  }

  remove(id: number) {
    this.update((messages: MessageType[]): any =>
      messages.filter((element) => element.id != id),
    );
  }
}

export const notify = new Notify();
// Message System END
