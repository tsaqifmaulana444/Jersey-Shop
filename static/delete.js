const del = document.getElementById("delete")
del.addEventListener("click", (e) => {
  const endpoint = `/sell/${del.dataset.doc}`

  fetch(endpoint, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => window.location.href = data.redirect)
    .catch((e) => console.log(e))
})
