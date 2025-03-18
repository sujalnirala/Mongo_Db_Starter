import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            alert(response.data.message);
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <form className="p-6 bg-white shadow-lg rounded-lg" onSubmit={handleLogin}>
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mb-2" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
            </form>
        </div>
    );
}

export default App;