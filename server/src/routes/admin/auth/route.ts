import { Hono, type Context } from 'hono'
import { Buffer } from 'node:buffer'; // Import the Buffer class
import { ADMIN_USERS } from '../../../data/config.js';

// In a real application, this would use a secure authentication system
// with proper password hashing, database storage, etc.


const auth = new Hono()

auth.post('/admin/auth/sign-in', async (c: Context) => {
  try {
    const { email, password } = await c.req.json()

    // Find the user with matching credentials
    const user = ADMIN_USERS.find((u) => u.email === email && u.password === password)

    if (!user) {
      return c.json({ error: "Invalid credentials" }, 401)
    }

    // In a real app, you would use a proper JWT or session token
    // This is a simplified example
    const token = Buffer.from(JSON.stringify({ id: user.id, role: user.role })).toString("base64");

    // Set a secure HTTP-only cookie
    c.header('Set-Cookie', `admin_token=${token}; HttpOnly; Secure; SameSite=Strict; Max-Age=${60 * 60 * 24}; Path=/`);

    return c.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    })
  } catch (error) {
    console.error("Authentication error:", error)
    return c.json({ error: "Authentication failed" }, 500)
  }
})

auth.get('/admin/auth/validate', async (c: Context) => {
  const cookie = c.req.header('cookie');
  const token = cookie?.split('; ').find((row: string) => row.startsWith('admin_token='))?.split('=')[1];

  if (!token) {
    return c.json({ authenticated: false }, 401)
  }

  try {
    // Decode the token
    const userData = JSON.parse(Buffer.from(token, "base64").toString())
    const user = ADMIN_USERS.find((u) => u.id === userData.id)

    if (!user) {
      return c.json({ authenticated: false }, 401)
    }

    return c.json({
      authenticated: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    })
  } catch (error) {
    console.error("Token validation error:", error)
    return c.json({ authenticated: false }, 401)
  }
})

auth.delete('/admin/auth/sign-out', async (c: Context) => {
  // In a real app, this would delete the admin token cookie
  // For this example, we'll just return a success message
  c.header('Set-Cookie', `admin_token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/`);
  return c.json({ success: true })
})

export default auth
