import { AuthPromisService } from './auth-promis.service';
import { AuthClass } from '@aws-amplify/auth';

export class CognitoPromiseService implements AuthPromisService {

    constructor( private awsService: AuthClass ) {

    }

    async signIn( email: string, password: string ): Promise<undefined|string> {
        try {
            const user = await this.awsService.signIn( email, password );

            const jwtToken =
                user.getSignInUserSession().getAccessToken().getJwtToken();
            const refreshToken =
                user.getSignInUserSession().getRefreshToken().getToken();
            localStorage.setItem( 'jwt_token', jwtToken );
            localStorage.setItem( 'refresh_token', refreshToken );

            return undefined;
        } catch (e) {
            return e.message;
        }
    }


}
