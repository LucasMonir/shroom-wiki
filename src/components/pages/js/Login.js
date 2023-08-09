import style from '../css/Login.module.css';
import LinkButton from '../../layout/js/LinkButton';

function Login() {
    return <section className={style.login_container}>
        <h1>Login to explore the fungi!</h1>
        <form action="">
            <fieldset className={style.form_container}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'/>
                <label htmlFor="email">E-mail</label>
                <input type="text" name='email' />
                <label htmlFor="password">Password</label>
                <input type="text" name='password' />
            </fieldset>
        </form>
        <p className={style.signup_button}>Or <LinkButton to='/signup' text='Join Us!'>!</LinkButton> </p>
    </section>;
}

export default Login;