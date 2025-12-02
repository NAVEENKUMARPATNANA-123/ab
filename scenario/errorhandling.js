function loginAsync(username, password) {
    if (username === "admin" && password === "1234") {
      return { message: "Login successful", user: username };
    } else {
      throw new Error("Invalid username or password");
    }
  }
  
  async function doLogin() {
    try {
      const result = await loginAsync("admin", "124");
      console.log("Async/Await Success:", result);
    } catch (err) {
      console.error("Async/Await Error:", err.message);
    }
  }
  doLogin();
  