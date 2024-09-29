export async function fetch_passwords(token: string) {
  try {
    const response = await fetch(
      "https://neosahadeo.pythonanywhere.com/passwords",
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      },
    );
    if (response.ok) {
      const json_response = await response.json();
      if (json_response.error) {
        return undefined;
      }
      return json_response;
    }
  } catch (error) {
    console.log(error);
  }
}
