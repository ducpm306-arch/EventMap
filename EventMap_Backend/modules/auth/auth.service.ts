import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'modules/accounts/account.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const password_hash = await bcrypt.hash(dto.password, 10);
    const account = await this.accountService.createAccount({
      name: dto.name,
      email: dto.email,
      password_hash,
    } as never);
    return { id: account.id, email: account.email };
  }

  async login(dto: LoginDto) {
    const account = await this.accountService.findByEmail(dto.email);
    if (!account) throw new UnauthorizedException('Sai email hoặc mật khẩu!');

    const isMatch = await bcrypt.compare(dto.password, account.password_hash);
    if (!isMatch) throw new UnauthorizedException('Sai email hoặc mật khẩu');

    const access_token = await this.jwtService.signAsync({
      sub: account.id,
      email: account.email,
    });
    return { access_token };
  }
}
