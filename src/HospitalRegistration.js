import React, { useState } from "react";
import "./HospitalRegistration.css"; // Updated styling

const HospitalRegistration = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [doctors, setDoctors] = useState([
    {
      name: "",
      specialty: "",
      contact_number: "",
      appointment_timing: "",
      email: "",
      password: "",
      department: "",
    },
  ]);
  const [error, setError] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!hospitalName || !hospitalAddress || !contactNumber) {
      setError("Please fill in all hospital fields.");
      return;
    }

    if (
      doctors.some(
        (doctor) =>
          !doctor.name ||
          !doctor.specialty ||
          !doctor.contact_number ||
          !doctor.appointment_timing ||
          !doctor.email ||
          !doctor.password
      )
    ) {
      setError("Please fill in all doctor fields.");
      return;
    }

    setError("");
    alert("Hospital and doctors registered successfully!");
  };

  const addDoctor = () => {
    setDoctors([
      ...doctors,
      {
        name: "",
        specialty: "",
        contact_number: "",
        appointment_timing: "",
        email: "",
        password: "",
        department: "",
      },
    ]);
  };

  const updateDoctorField = (index, field, value) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[index][field] = value;
    setDoctors(updatedDoctors);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Healthcare Management - Registration</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-section">
          <h2>Hospital Details</h2>
          <label>Hospital Name:</label>
          <input
            type="text"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />

          <label>Hospital Address:</label>
          <textarea
            value={hospitalAddress}
            onChange={(e) => setHospitalAddress(e.target.value)}
          ></textarea>

          <label>Contact Number:</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>

        <div className="form-section">
          <h2>Doctors</h2>
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-section">
              <h3>Doctor {index + 1}</h3>
              <label>Name:</label>
              <input
                type="text"
                value={doctor.name}
                onChange={(e) => updateDoctorField(index, "name", e.target.value)}
              />
              <label>Specialization:</label>
              <input
                type="text"
                value={doctor.specialty}
                onChange={(e) =>
                  updateDoctorField(index, "specialty", e.target.value)
                }
              />
              <label>Contact Number:</label>
              <input
                type="text"
                value={doctor.contact_number}
                onChange={(e) =>
                  updateDoctorField(index, "contact_number", e.target.value)
                }
              />
              <label>Department:</label>
              <input
                type="text"
                value={doctor.department}
                onChange={(e) =>
                  updateDoctorField(index, "department", e.target.value)
                }
              />
              <label>Appointment Timing:</label>
              <input
                type="text"
                value={doctor.appointment_timing}
                onChange={(e) =>
                  updateDoctorField(index, "appointment_timing", e.target.value)
                }
              />
              <label>Email:</label>
              <input
                type="email"
                value={doctor.email}
                onChange={(e) =>
                  updateDoctorField(index, "email", e.target.value)
                }
              />
              <label>Password:</label>
              <input
                type={passwordVisibility ? "text" : "password"}
                value={doctor.password}
                onChange={(e) =>
                  updateDoctorField(index, "password", e.target.value)
                }
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {passwordVisibility ? "Hide Password" : "Show Password"}
              </button>
            </div>
          ))}
          <button type="button" onClick={addDoctor}>
            Add Another Doctor
          </button>
        </div>

        <button type="submit" className="submit-button">
          Register
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default HospitalRegistration;
