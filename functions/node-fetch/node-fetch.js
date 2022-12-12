// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = () =>
  fetch("/.netlify/functions/node-fetch", { headers: { accept: "Accept: application/json" } })
    .then((x) => x.json())
    .then(({ msg }) => setMsg(msg))

module.exports = { handler }
