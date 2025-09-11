import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Password: </label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Registration;
