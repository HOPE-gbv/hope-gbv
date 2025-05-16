import { Hono } from 'hono';
import EmergencyCall from './emergency-call/route.js';
import EmergencyContacts from './emergency-contacts/route.js';
import LawyerMatch from './lawyer-match/route.js';
import Lawyer from './lawyer/lawyers.js';
import Report from './reports/route.js';
import Resources from './resources/route.js';
import { auth, cases, lawyers, reports, stats } from '../routes/admin/index.js';

const router = new Hono();

router.route('/emergency-call', EmergencyCall);
router.route('/emergency-contacts', EmergencyContacts);
router.route('/lawyer-match', LawyerMatch);
router.route('/lawyer', Lawyer);
router.route('/reports', Report);
router.route('/resources', Resources);
router.route('/auth', auth);
router.route('/cases', cases);
router.route('/lawyers', lawyers);
router.route('/reports', reports);
router.route('/stats', stats);

export default router;
