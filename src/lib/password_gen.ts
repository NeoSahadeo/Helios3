const valid_symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+"];

function rand_symbol() {
  return valid_symbols[Math.floor(Math.random() * valid_symbols.length)];
}

function rand_number() {
  return Math.floor(Math.random() * 10).toString();
}

function rand_upper_case() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function rand_lower_case() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

export function generate({
  length = 20,
  numbers = true,
  symbols = true,
  upper_case = true,
  lower_case = true,
}: {
  length?: number;
  numbers?: boolean;
  symbols?: boolean;
  upper_case?: boolean;
  lower_case?: boolean;
}) {
  let password: string = "";
  let selected = [];

  if (!numbers && !symbols && !upper_case && !lower_case) return "";
  if (length <= 0) return "";

  if (numbers) selected.push(rand_number);
  if (symbols) selected.push(rand_symbol);
  if (upper_case) selected.push(rand_upper_case);
  if (lower_case) selected.push(rand_lower_case);

  for (let x = 0; x < length; x++) {
    password += selected[Math.floor(Math.random() * selected.length)]();
  }

  return password;
}
