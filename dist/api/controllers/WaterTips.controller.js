import { WaterTip } from "../services/WaterTips.service";
import logger from "../../utils/logger";
export class WaterTips {
    static async GetTip(req, res) {
        try {
            const lang = req.query.lang;
            const allowedLanguages = ["ar", "en"];
            if (!allowedLanguages.includes(lang)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid language. Only 'ar' and 'en' are supported.",
                });
            }
            const result = await WaterTip.GetTip(lang);
            if (!result.status) {
                return res.status(404).json({
                    success: false,
                    message: result.message === "Failed to fetch tip."
                        ? "No tip found."
                        : result.message || "No tip found.",
                });
            }
            return res.status(201).json({
                success: true,
                Tip: result.tip,
            });
        }
        catch (error) {
            logger.error("Error in GetTip controller:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error.",
            });
        }
    }
    static async AddTip(req, res) {
        try {
            const { password, tip, lang } = req.body;
            const allowedLanguages = ["ar", "en"];
            if (!allowedLanguages.includes(lang)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid language. Only 'ar' and 'en' are supported.",
                });
            }
            if (password !== process.env.PASSWORD) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized: Incorrect password.",
                });
            }
            const result = await WaterTip.AddTip(tip, lang);
            if (!result.status) {
                return res.status(result.code).json({
                    success: false,
                    message: result.message,
                });
            }
            res.status(201).json({
                success: true,
                Tip: result,
            });
        }
        catch (error) {
            logger.error("Error in AddTip controller:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error.",
            });
        }
    }
    static async RemoveTip(req, res) {
        try {
            const { password, tip, lang } = req.body;
            const allowedLanguages = ["ar", "en"];
            if (!allowedLanguages.includes(lang)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid language. Only 'ar' and 'en' are supported.",
                });
            }
            if (password !== process.env.PASSWORD) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized: Incorrect password.",
                });
            }
            const result = await WaterTip.RemoveTip(tip, lang);
            if (!result.status) {
                return res.status(409).json({
                    success: false,
                    message: result.message,
                });
            }
            res.status(201).json({
                success: true,
                Tip: result,
            });
        }
        catch (error) {
            logger.error("Error in RemoveTip controller:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error.",
            });
        }
    }
    static async ListTip(req, res) {
        try {
            const { password, tip, lang } = req.query;
            const allowedLanguages = ["ar", "en"];
            if (!allowedLanguages.includes(lang)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid language. Only 'ar' and 'en' are supported.",
                });
            }
            if (password !== process.env.PASSWORD) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized: Incorrect password.",
                });
            }
            const result = await WaterTip.ListTip(tip, lang);
            if (result.message) {
                return res.status(result.code).json({
                    success: false,
                    message: result.message,
                });
            }
            res.status(201).json({
                success: true,
                Tip: result,
            });
        }
        catch (error) {
            logger.error("Error in ListTip controller:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error.",
            });
        }
    }
}
