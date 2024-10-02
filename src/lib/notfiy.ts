export async function notify(
  parentElement: HTMLElement,
  childElement: HTMLElement,
  message: string,
  timeout: number = 3,
): Promise<undefined> {
  parentElement.insertAdjacentHTML(
    "afterbegin",
    (childElement.innerHTML = message),
  );
  setTimeout(() => {
    childElement.remove();
  }, timeout);
  return undefined;
}
