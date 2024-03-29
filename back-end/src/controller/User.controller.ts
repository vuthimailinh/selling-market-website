import { log } from "console";
import userServices from "../services/User.services";
import { Request, Response } from "express";
class User {
    sign_up(req: any, res: any) {
        try {
            const { name, password } = req.body;

            if (!name || !password) {
                return res.json({
                    code: "no input",
                });
            }
            // luu vao file json
            // thuc hien logic
            // tao nguoi dung
            let mess = userServices.tao_nguoi_dung(name, password);

            return res.json({
                ok: mess,
            });
        } catch (error) {
            console.log("error");
            return res.json({});
        }
    }

    login (req: Request, res: Response) {
        try{
            const { name, password } = req.body
            if(!name || !password) {
            return res.json({
                code: "no input"
            })          
            }
            let mess  = userServices.kt_user(name, password);
            return res.json({
                code: mess,
            });
        } catch (error) {
            console.log("error");
            return res.json({});
        }  
    };
}

const user = new User();
export default user;
