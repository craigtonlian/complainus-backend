// To test signup

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user: {
      email: "leo@leo.com",
      password: "leopassword",
    },
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log(res.headers.get("Authorization"));
      localStorage.setItem("token", res.headers.get("Authorization"));
      return res.json();
    } else {
      throw new Error(res);
    }
  })
  .then((json) => console.dir(json))
  .catch((err) => console.error(err));

  // To test login authentication check
  fetch("http://localhost:3000/private/test", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status == "401") {
        throw new Error("Unauthorized Request. Must be signed in.");
      }
    })
    .then((json) => console.dir(json))
    .catch((err) => console.error(err));

    //To test login
    fetch("http://localhost:3000/users/sign_in", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user: {
      email: "bob@bob.com",
      password: "bobpassword",
    },
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log(res.headers.get("Authorization"));
      localStorage.setItem("token", res.headers.get("Authorization"));
      return res.json();
    } else {
      return res.text().then((text) => Promise.reject(text));
    }
  })
  .then((json) => console.dir(json))
  .catch((err) => console.error(err));

  //To test logout
  fetch("http://localhost:3000/users/sign_out", {
  method: "delete",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((json) => Promise.reject(json));
    }
  })
  .then((json) => {
    console.dir(json);
  })
  .catch((err) => console.error(err));


  //correct form receive
  {"user"=>{"email"=>"may@may.com", "password"=>"[FILTERED]"}, "registration"=>{"user"=>{"email"=>"may@may.com", "password"=>"[FILTERED]"}}} 
  //wrong format
  {"email"=>"may@may.com", "password"=>"[FILTERED]", "registration"=>{"email"=>"may@may.com", "password"=>"[FILTERED]"}}