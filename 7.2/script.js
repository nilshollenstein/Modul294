document.addEventListener("DOMContentLoaded", () => {
  document.forms.challenge.addEventListener("submit", async (event) => {
    event.preventDefault();
    let authToken = await getToken();

    const usernameInput = document.getElementById("username").value;
    const messageInput = document.getElementById("message").value;

    sendMessage(authToken, usernameInput, messageInput);
  });
});

async function getToken() {
  try {
    const response = await fetch("http://10.65.4.20/challenges/1", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const headers = response.headers;
    const authToken = headers.get("authorization");
    return authToken;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

async function sendMessage(authToken, username, message) {
  try {
    const response = await fetch("http://10.65.4.20/comments", {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        Authorization: authToken,
      }),
      body: JSON.stringify({
        message: message,
        username: username,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
