export abstract class AuthPromisService {

    public abstract signIn( email: string, password: string ):
        Promise<undefined | string>;

}
