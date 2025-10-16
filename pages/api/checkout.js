export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  // Placeholder: on valide l'appel et retourne OK
  return res.status(200).json({ ok: true, message: 'checkout stub' })
}
