import React, { useReducer } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../App.css';
import '../../bootstrap.min.css';
import { 
    BrowserRouter as Router,
    Link } from 'react-router-dom';

function reducer(state, data){
    if (data.field === "reset"){
        return {
            username: "",
            password: "",
        };
    }
    return {
        ...state,
        [data.field]: data.value,
    };
}

const Login = () => {
    const [formFields, dispatch] = useReducer(reducer, {
        username: "",
        password: "",
    })
    const [show, setShow] = React.useState(false);

    const handleChange = event => {
        dispatch({ field: event.target.name, value: event.target.value});
    };

    const { username, password} = formFields;

    const handleRequestSubmit = event => {
        setShow(true);
        event.preventDefault();
        authenticate(formFields).then(response => {
            if (response === true){
                <Router>
                    <Link to="../Dashboard/index" />
                </Router>
                dispatch({ field: "reset"})
            }
            else {
                window.alert("Wrong username or password")
            }
        });
    };
    // const HandleSignIn = (e) => {
    //     e.preventDefault()
    //     //let username = this.refs.username.value
    //     //let password = this.refs.password.value
    //     let [userName, setuserName] = React.useState('')
    //     let [password, setPassword] = React.useState('')
    //     this.props.onSignIn(userName, password)
    //   }

	return (
		<div>
			<Header />
            <div className="App">
                <form onSubmit={handleRequestSubmit} className="App-header">
                    <h3>Sign in</h3>
                    <p> Username: </p>
                    &nbsp;
                    <input 
                        required
                        type="text" 
                        //ref="username" 
                        placeholder="enter you username"
                        // onInput =  {event => HandleSignIn(event.target.value)}
                        className="form-control"
                        onChange={handleChange} 
                        value={username} />
                    <p> Password: </p>
                    &nbsp;
                    <input 
                        required
                        type="password" 
                        //ref="password" 
                        placeholder="enter password" 
                        //onInput = {event => HandleSignIn(event.target.value)}
                        onChange={handleChange}
                        className="form-control"
                        value={password} />
                    <input type="submit" value="Login" />
                </form>
            </div>
			<Footer />
		</div>
	);
};

export default Login;
