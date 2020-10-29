export default function flixstart() {
  let swUrl = `${process.env.PUBLIC_URL}/flix.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((result) => {
      console.log("result", result);
    })
    .catch((err) => {
      console.log("err", err);
    });
}
