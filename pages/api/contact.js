export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // For now, log the contact form submission.
  // Replace with your preferred email service (e.g., nodemailer, SendGrid, etc.)
  console.log('Contact form submission:', { name, email, phone, subject, message })

  return res.status(200).json({ success: true })
}
