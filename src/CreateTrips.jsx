import React, { useState, useEffect } from 'react';
import { createTrip, getOperator } from './utils/apis';

function CreateTrips() {
  const initialFormState = {
    from: '',
    to: '',
    date: '',
    time: '',
    operator_id: '',
    price: '',
    seats_available: '',
    bus_plate: '',
    duration: '',
  };

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [operators, setOperators] = useState([]);

  // 🔁 Fetch operators from backend on mount
  useEffect(() => {
    const fetchOperators = async () => {
      try {
        const data = await getOperator();
        setOperators(data);
      } catch (err) {
        console.error('❌ Failed to load operators:', err.message);
      }
    };
    fetchOperators();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // clear field error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key.replace('_', ' ')} is required`;
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      await createTrip(form);
      alert('✅ Trip created successfully!');
      setForm(initialFormState);
      setErrors({});
    } catch (err) {
      alert(err.message || '❌ Failed to create trip');
    }
  };

  return (
    <div className="main-container">
      <div className="main-title">
        <h2>Create New Trip</h2>
      </div>

      <div className="card" style={{ backgroundColor: '#263043', padding: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          <Input name="from" placeholder="From" value={form.from} onChange={handleChange} error={errors.from} />
          <Input name="to" placeholder="To" value={form.to} onChange={handleChange} error={errors.to} />
          <Input name="price" placeholder="Price" value={form.price} onChange={handleChange} error={errors.price} />
          <Input name="seats_available" placeholder="Seats Available" value={form.seats_available} onChange={handleChange} error={errors.seats_available} type="number" />
          <Input name="bus_plate" placeholder="Bus Plate" value={form.bus_plate} onChange={handleChange} error={errors.bus_plate} />
          <Input name="duration" placeholder="Duration" value={form.duration} onChange={handleChange} error={errors.duration} />
          <Input name="date" value={form.date} onChange={handleChange} error={errors.date} type="date" />
          <Input name="time" value={form.time} onChange={handleChange} error={errors.time} type="time" />

          <div>
            <select
              name="operator_id"
              value={form.operator_id}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Operator</option>
              {operators.map(op => (
                <option key={op._id} value={op._id}>{op.name}</option>
              ))}
            </select>
            {errors.operator_id && <span style={errorStyle}>{errors.operator_id}</span>}
          </div>

          <button
            type="submit"
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// 🔁 Reusable Input Field
const Input = ({ name, placeholder, value, onChange, error, type = 'text' }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      style={inputStyle}
    />
    {error && <span style={errorStyle}>{error}</span>}
  </div>
);

// 💄 Styles
const inputStyle = {
  padding: '12px 16px',
  borderRadius: '6px',
  border: '1px solid #3a3a3a',
  backgroundColor: '#1d2634',
  color: '#ffffff',
  fontSize: '16px',
  outline: 'none',
  fontFamily: 'Montserrat, sans-serif',
  width: '100%',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#2962ff',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.85rem',
  marginTop: '4px',
  display: 'block',
};

export default CreateTrips;
