import { AuthLayout } from '../Layout';
import { LoginPageInfo } from '.';

export const LoginPage = () => {
    return (
        <>
          <AuthLayout title='Login' children={<LoginPageInfo/>}/>
        </>
    )
}