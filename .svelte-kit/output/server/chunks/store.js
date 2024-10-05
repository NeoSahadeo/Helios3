import { w as writable } from "./index.js";
class Modal {
  subscribe;
  set;
  update;
  content;
  constructor() {
    const { subscribe, set, update } = writable();
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
const modal = new Modal();
const passwords_store = writable([]);
class Notify {
  subscribe;
  set;
  update;
  constructor() {
    const { subscribe, set, update } = writable([]);
    this.subscribe = subscribe;
    this.set = set;
    this.update = update;
  }
  send({
    message = "",
    timeout_ms = 3e3,
    dismissable = true,
    type = "info"
  }) {
    if (!dismissable && timeout_ms == 0) {
      console.error("Cannot have dismissable: true and timeout_ms: 0");
      return;
    }
    const id = Math.random();
    this.update((messages) => [
      ...messages,
      { id, message, dismissable, type }
    ]);
    if (timeout_ms > 0) {
      setTimeout(() => {
        this.update(
          (messages) => messages.filter((element) => element.id != id)
        );
      }, timeout_ms);
    }
  }
  remove(id) {
    this.update(
      (messages) => messages.filter((element) => element.id != id)
    );
  }
}
const notify = new Notify();
export {
  modal as m,
  notify as n,
  passwords_store as p
};
