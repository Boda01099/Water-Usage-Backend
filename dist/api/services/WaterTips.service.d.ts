export declare class WaterTip {
    static GetTip(language: string): Promise<{
        status: boolean;
        tip: any;
        message?: undefined;
        code?: undefined;
    } | {
        status: boolean;
        message: string;
        code: number;
        tip?: undefined;
    }>;
    static AddTip(Tip: string, lang: string): Promise<{
        status: boolean;
        message: string;
        code: number;
        Tips?: undefined;
    } | {
        status: boolean;
        Tips: void | (import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            Tip: string;
            language: "ar" | "en";
        }, {}> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            Tip: string;
            language: "ar" | "en";
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        });
        message?: undefined;
        code?: undefined;
    } | {
        status: boolean;
        message: string;
        code?: undefined;
        Tips?: undefined;
    }>;
    static RemoveTip(Tip: string, lang: string): Promise<{
        status: boolean;
        message: string;
        code: number;
        tip?: undefined;
    } | {
        status: boolean;
        message: string;
        tip: import("mongoose").Document<unknown, {}, {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            Tip: string;
            language: "ar" | "en";
        }, {}> & {
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            Tip: string;
            language: "ar" | "en";
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        code?: undefined;
    }>;
    static ListTip(Tip: string, lang: string): Promise<{
        tips: any[];
        status?: undefined;
        message?: undefined;
    } | {
        status: boolean;
        message: string;
        tips?: undefined;
    }>;
}
