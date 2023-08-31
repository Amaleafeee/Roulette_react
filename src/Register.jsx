import React, {useState} from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>REGISTER</h2>
                <label htmlFor="username">USERNAME</label>
                <input value={username} onChange={(e) => setEmail(e.target.value)} type="Username" placeholder="Username" id="username" name="username"/>
                <label htmlFor="email">EMAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@mail.com" id="email" name="email"/>
                <label htmlFor="password">PASSWORD</label>
                <input  value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">REGISTER</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in</button>
        </div>
    )
}