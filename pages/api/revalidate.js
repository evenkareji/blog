export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid Token" });
  }
  try {
    await res.unstable_revalidate("/blog/schedule");
    await res.unstable_revalidate("/blog/music");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
