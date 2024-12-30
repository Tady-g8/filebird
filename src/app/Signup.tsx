

export default function Signup() {

    function processSignup() {
        const username = document.getElementById("username") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;

        const data = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        fetch('http://localhost:4200/Signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Signup failed');
            }
        }).finally(() => {
            window.location.reload();
        })
    }

    return (
        <div className="Login p-5 justify-center w-full">
            <input className="w-full mb-5 bg-transparent border-b border-b-slate-500" id="username" type="text" placeholder="Username" />
            <input className="w-full mb-5 bg-transparent border-b border-b-slate-500" id="email" type="text" placeholder="Email" />
            <input className="w-full mb-5 bg-transparent border-b border-b-slate-500" id="password" type="password" placeholder="Password" />
            <div className="flex justify-center">
                <button 
                    className="LoginButton w-3/12 bg-blue-500 rounded-full py-1" 
                    onClick={() => {processSignup()}}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}