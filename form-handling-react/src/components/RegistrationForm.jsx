import { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }
        setError("");
        console.log("Submitting:", formData);

        fetch('http://mockapi.io/register', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => res.json())
        .then((data) => console.log("Success:", data))
        .catch((err) => console.error("Error:", err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            />
            <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            />
            <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;