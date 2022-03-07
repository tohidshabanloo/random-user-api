const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const name = document.querySelector("#first");
  const phone = document.querySelector("#phone");
  const lastName = document.querySelector("#last");
  const location = document.querySelector("#street");
  const emailTag = document.querySelector("#email");
  const imgTag = document.querySelector("#photo");

  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => {
      const { cell, email } = json.results[0];
      const { first, last } = json.results[0].name;
      const streetName = json.results[0].location.street.name;
      const photo = json.results[0].picture.large;
      name.innerHTML = first;
      phone.innerHTML = cell;
      lastName.innerHTML = last;
      location.innerHTML = streetName;
      emailTag.innerHTML = email;
      imgTag.src = photo;
    })
    .catch(e);
});
