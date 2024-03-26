import userServices from "../services/User.services";

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
            const mess = userServices.tao_nguoi_dung(name, password);

            return res.json({
                ok: mess,
            });
        } catch (error) {
            console.log("error");
            return res.json({});
        }
    }
}

const user = new User();
export default user;
