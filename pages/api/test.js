export default function TestAPI(req, res) {
  const svg = `<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg> `;
  res.send(svg);
}
