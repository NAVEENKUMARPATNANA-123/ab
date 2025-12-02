function fakeLoginAPI(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ success: true, message: "Login successful!" });
      } else {
        reject(new Error("Invalid credentials!"));
      }
    }, 1000);
  });
}

async function login(username, password) {
  try {
    let response = await fakeLoginAPI(username, password);
    console.log( response.message);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

login("admin", "1234");  
login("user", "wrong");  
