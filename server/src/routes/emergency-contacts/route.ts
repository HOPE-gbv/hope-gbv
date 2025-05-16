import { Hono, type Context } from 'hono'
import { EMERGENCY_CONTACTS } from '../../data/config.js'

const EmergencyContacts = new Hono()

// Mock data for emergency contacts - in a real app, this would come from a database


EmergencyContacts.get('/', async (c: Context) => {
  // Get location from query parameters
  const location = c.req.query("location")?.toLowerCase()
  const category = c.req.query("category")?.toLowerCase()

  // Filter by location if provided
  let stateContacts: { lagos: any[]; abuja: any[] } = EMERGENCY_CONTACTS.stateContacts
  if (location && location in EMERGENCY_CONTACTS.stateContacts) {
    stateContacts = {
      [location]: EMERGENCY_CONTACTS.stateContacts[location as keyof typeof EMERGENCY_CONTACTS.stateContacts],
    } as any
  }

  // Filter by category if provided
  if (category) {
    const result: Record<string, any> = {}

    if (category === "national" || category === "emergency") {
      result.national = EMERGENCY_CONTACTS.national
    }

    if (category === "gbv" || category === "hotline") {
      result.gbvHotlines = EMERGENCY_CONTACTS.gbvHotlines
    }

    if (category === "state") {
      result.stateContacts = stateContacts
    }

    if (category === "mental" || category === "health") {
      result.mentalHealth = EMERGENCY_CONTACTS.mentalHealth
    }

    return c.json({ contacts: result })
  }

  // Return all contacts
  return c.json({
    contacts: {
      national: EMERGENCY_CONTACTS.national,
      gbvHotlines: EMERGENCY_CONTACTS.gbvHotlines,
      stateContacts: stateContacts,
      mentalHealth: EMERGENCY_CONTACTS.mentalHealth,
    },
  })
})

export default EmergencyContacts
