import { error } from "console";
import { log } from "winston";
import { any } from "zod";

const fs = require('fs');
class UserServices {
    tao_nguoi_dung(email: string, password: string): string {
        // ket noi database de tao nguoi dung
        if (1) {
            return "ok";
        }
        return "no ok";
    };

    kt_user(name: string, password: string): string {        
        try {
            const dataUser = JSON.parse(fs.readFileSync('./user.json', 'utf8')); 
            console.log(dataUser);
                       
            if(dataUser.user.some((userObj: { name: string; password: string; }) => userObj.name === name && userObj.password === password)) {
                return "Login thành công";
            } else {
                return "Tên hoặc mật khẩu không đúng";
            }
        } catch (error) {
            console.error("Lỗi khi đọc tệp user.json:", error);
            return "Đã xảy ra lỗi";
        }
    }
    
}

const userServices = new UserServices();
export default userServices;
