// function loginCallback(username, password, callback) {
//   setTimeout(() => {
//     if (username === "admin" && password === "1234") {
//       callback(null, { message: "Login successful", user: username });
//     } else {
//       callback(new Error("Invalid username or password"), null);
//     }
//   }, 500);
// }
// function abc(err, result)  {
//   if (err) {
//     console.error("Callback Error:", err.message);
//   } else {
//     console.log("Callback Success:", result);
//   }
// }
// loginCallback("admin", "1234", abc);

// function loginPromise(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         resolve({ message: "Login successful", user: username });
//       } else {
//         reject("Invalid username or password");
//       }
//     }, 500);
//   });
// }
// loginPromise("admin", "wrongpass")
//   .then(result => console.log("Promise Success:", result))
//   .catch(error => console.error("Promise Error:", error));


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
