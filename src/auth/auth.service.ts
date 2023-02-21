import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/users/schemas/user.schema';
import { IUser } from 'src/users/interfaces/users.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { EncryptService } from 'src/tools/encrypt.service';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private encryptService: EncryptService,
    ) {};

    async validateUser(email: string, password: string): Promise<IUser>{
        const user = await this.usersService.findOneByEmail(email);

        if(user){
            const isValidPassword = await this.encryptService.compare(password, user.password);
            
            if(isValidPassword) {
                const { password, ...result } = user;
                return result as IUser;                
            }
        }
        return null;
    }

    async login(userObjectLogin: any) {

        const { email, password } = userObjectLogin;
        const findUser = await this.usersService.findOneByEmail(email)
        if (!findUser) {
        throw new HttpException('AUTHENTICATION_ERROR', 404);
        }
        const checkPassword = await compare(password, findUser.password);

        if (!checkPassword) {
        throw new HttpException('AUTHENTICATION_ERROR', 404);
        }
        const payload = {username: findUser.username, email:findUser.email, id: findUser._id};
        const token = this.jwtService.sign(payload);
        
        const data = {
        user:findUser,
        token
        };

        return data;

    }
}
