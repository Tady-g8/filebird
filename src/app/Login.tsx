

export default function Login() {

    function processLogin() {
        const username = document.getElementById("username") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;

        const data = {
            username: username.value,
            password: password.value
        }

        fetch('http://localhost:4200/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Username or Password is incorrect');
            }
        }).then(data => {
            sessionStorage.setItem('username', data.username);
            window.location.reload();  
        })
    }

    return (
        <div className="Login p-5 justify-center w-full">
            <input className="w-full mb-5 bg-transparent border-b border-b-slate-500" id="username" type="text" placeholder="Username" />
            <input className="w-full mb-5 bg-transparent border-b border-b-slate-500" id="password" type="password" placeholder="Password" />
            <div className="flex justify-center">
                <button onClick={processLogin} className="LoginButton w-3/12 bg-blue-500 rounded-full py-1">Login</button>
            </div>
        </div>
    )
}