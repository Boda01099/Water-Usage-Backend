import { Request, Response } from "express";
export declare class WaterTips {
    static GetTip(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static AddTip(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static RemoveTip(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static ListTip(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
