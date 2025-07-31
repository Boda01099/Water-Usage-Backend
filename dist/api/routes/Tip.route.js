import { Router } from "express";
import { WaterTips } from "../controllers/WaterTips.controller";
const router = Router();
/**
 * @swagger
 * /api/tip:
 *   get:
 *     summary: Get a random water tip in the specified language
 *     tags:
 *       - Water Tips
 *     parameters:
 *       - in: query
 *         name: lang
 *         schema:
 *           type: string
 *           enum: [ar, en]
 *         required: true
 *         description: Language of the tip ('ar' or 'en')
 *     responses:
 *       201:
 *         description: A random water tip
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 Tip:
 *                   type: string
 *       400:
 *         description: Invalid language
 *       404:
 *         description: No tip found
 */
router.get('/tip', WaterTips.GetTip);
/**
 * @swagger
 * /api/tip:
 *   post:
 *     summary: Add a new water tip
 *     tags:
 *       - Water Tips
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               tip:
 *                 type: string
 *               lang:
 *                 type: string
 *                 enum: [ar, en]
 *     responses:
 *       201:
 *         description: Tip added successfully
 *       400:
 *         description: Invalid language
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Tip already exists
 */
router.post('/tip', WaterTips.AddTip);
/**
 * @swagger
 * /api/tip:
 *   delete:
 *     summary: Remove a water tip
 *     tags:
 *       - Water Tips
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               tip:
 *                 type: string
 *               lang:
 *                 type: string
 *                 enum: [ar, en]
 *     responses:
 *       201:
 *         description: Tip removed successfully
 *       400:
 *         description: Invalid language
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Tip does not exist
 */
router.delete('/tip', WaterTips.RemoveTip);
/**
 * @swagger
 * /api/tip/all:
 *   get:
 *     summary: List all water tips in a specified language
 *     tags:
 *       - Water Tips
 *     parameters:
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin password for authentication
 *       - in: query
 *         name: lang
 *         schema:
 *           type: string
 *           enum: [ar, en]
 *         required: true
 *         description: Language code ('ar' or 'en')
 *     responses:
 *       201:
 *         description: List of tips
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 Tip:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: boolean
 *                     tips:
 *                       type: array
 *                       items:
 *                         type: string
 *       400:
 *         description: Invalid language
 *       401:
 *         description: Unauthorized
 */
router.get('/tip/all', WaterTips.ListTip);
export default router;
