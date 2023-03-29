export default function handler(req, res) {
  const params = req.query.params;
  console.log(params);
  res.status(200).json(params);
}
/* 
if we now visit localhost:3000/api  output ->  {"name":"Home API route"}
if we now visit localhost:3000/api/1  output -> ["1"] 
if we now visit localhost:3000/api/1/2 output -> ["1","2"] 
if we now visit localhost:3000/api/1/2/3 output -> ["1","2","3"]

But what if what the first to be also handeled by catch all routes
just delete the index.js file , but this will show an error because 
catch all routes needs a parameter

we have something called optional catch all routes, to remove this error
just add [[params]] then we will have no error
*/
