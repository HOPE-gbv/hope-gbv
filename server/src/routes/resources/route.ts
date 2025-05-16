import { Hono,type  Context } from 'hono'
import { RESOURCES } from '../../data/config.js'

const Resources = new Hono()

// Mock data for resources - in a real app, this would come from a database


Resources.get('/resources', async (c: Context) => {
  // Get category from query parameters
  const category = c.req.query("category")

  // If a specific category is requested, return only those resources
  if (category && category in RESOURCES) {
    return c.json({
      resources: RESOURCES[category as keyof typeof RESOURCES],
    })
  }

  // Otherwise, return all resources
  return c.json({
    resources: {
      safetyPlanning: RESOURCES.safetyPlanning,
      legalResources: RESOURCES.legalResources,
      supportHealing: RESOURCES.supportHealing,
      alliesSupport: RESOURCES.alliesSupport,
    },
  })
})

export default Resources
