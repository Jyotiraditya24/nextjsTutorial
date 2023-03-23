export default function handler(req, res) {
  res.status(200).json({ name: "Home API route" });
}
// we are sending json response 
//handler as it handles the incoming request
// we have to always default export the handler
// and now to go localhost:3000/api