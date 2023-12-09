export default function handler(req, res) {
  const { userId, authToken, destination } = req.body;

  if (authToken === process.env.AUTH_SECRET) {
    // Tokens match, proceed with the next steps
    res.redirect(307, `/${destination}/?params=${userId}`);
  } else {
    // Tokens do not match, send an error response
    res.status(401).json({ message: 'Invalid token' });
  }
}
