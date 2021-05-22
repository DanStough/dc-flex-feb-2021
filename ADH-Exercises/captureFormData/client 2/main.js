const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const formattedData = formatData(data);
  sendData("http://localhost:3000/newcontact", formattedData);
});

const formatData = (fd) => {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return data;
};

const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};
