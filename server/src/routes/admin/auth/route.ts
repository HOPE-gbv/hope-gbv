import { Hono, type Context } from 'hono'
import { Buffer } from 'node:buffer'; // Import the Buffer class
import prisma from '@/db/client.js'; // Import Prisma client

const auth = new Hono()

auth.post('/api/admin/auth/login', async (c: Context) => {
  try {
    const { email, password } = await c.req.json()

    // Find the user with matching credentials in the database
    const user = await db.adminUser.findUnique({
      where: { email: email },
    });

    if (!user || user.password !== password) { // In a real app, hash passwords
      return c.json({ error: "Invalid credentials" }, 401)
    }

    // Todo : Implement a proper JWT or session token
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

auth.get('/api/admin/auth/validate', async (c: Context) => {
  const cookie = c.req.header('cookie');
  const token = cookie?.split('; ').find((row: string) => row.startsWith('admin_token='))?.split('=')[1];

  if (!token) {
    return c.json({ authenticated: false }, 401)
  }

  try {
    // Decode the token
    const userData = JSON.parse(Buffer.from(token, "base64").toString())
    const user = await db.adminUser.findUnique({
      where: { id: userData.id },
    });

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

auth.post('/api/admin/auth/logout', async (c: Context) => {
  // Clear the admin token cookie
  c.header('Set-Cookie', `admin_token=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/`);
  return c.json({ success: true })
})

export default auth
