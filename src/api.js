const url = "https://jsonplaceholder.typicode.com";

export const fetchPhotos = () =>
  fetch(`${url}/photos`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
