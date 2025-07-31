import WaterTipsModel from "../../models/WaterTips.model";
import logger from "../../utils/logger";
export class WaterTip {
    static async GetTip(language) {
        try {
            const [tip] = await WaterTipsModel.aggregate([
                { $match: { language } },
                { $sample: { size: 1 } },
            ]);
            if (!tip) {
                throw new Error("No water tip available for the specified language.");
            }
            return { status: true, tip: tip.Tip };
        }
        catch (error) {
            logger.error("Error in GetTip service:", error);
            return { status: false, message: "Failed to fetch tip.", code: 500 };
        }
    }
    static async AddTip(Tip, lang) {
        try {
            const validation = await WaterTipsModel.findOne({ Tip });
            if (validation) {
                return {
                    status: false,
                    message: "This tip already exists.",
                    code: 409,
                };
            }
            const Tips = await WaterTipsModel.create({ Tip, lang }).catch((err) => {
                logger.error("Error in Create Tip service:", err);
            });
            return { status: true, Tips };
        }
        catch (error) {
            logger.error("Error in AddTip service:", error);
            return { status: false, message: "Failed to fetch tip." };
        }
    }
    static async RemoveTip(Tip, lang) {
        try {
            const tip = await WaterTipsModel.findOne({ Tip, language: lang });
            if (!tip) {
                return {
                    status: false,
                    message: "This tip doesn't exist.",
                    code: 409,
                };
            }
            await tip.deleteOne();
            return {
                status: true,
                message: "Tip removed successfully.",
                tip,
            };
        }
        catch (error) {
            logger.error("Error in RemoveTip service:", error);
            return {
                status: false,
                message: "Failed to remove tip.",
                code: 500,
            };
        }
    }
    static async ListTip(Tip, lang) {
        try {
            const tipsArray = await WaterTipsModel.find({ language: lang }).select('Tip -_id');
            const tips = tipsArray.map((item) => item.Tip);
            return { tips };
        }
        catch (error) {
            logger.error("Error in ListTip service:", error);
            return { status: false, message: "Failed to fetch tips." };
        }
    }
}
