import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAllowance.css";
import axios from "axios";
 

const CreateAllowance = () => {
  const [isTaxable, setIsTaxable] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isConditionBased, setIsConditionBased] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [filterText, setFilterText] = useState(""); // State for filtering input
  const [showFilterModal, setShowFilterModal] = useState(false); // State for modal visibility

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: "",
    name: "",
    amount: "",
    oneTime: "No",
    taxable: "No",
    fixed: false,
  });               

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Sample employee data
  const employees = [
    { id: 1, name: "John Doe", role: "Software Engineer" },
    { id: 2, name: "Jane Smith", role: "Product Manager" },
    { id: 3, name: "Mark Johnson", role: "Designer" },
    { id: 4, name: "Alice Brown", role: "HR Manager" },
    { id: 5, name: "John Sinha", role: "Bouncer" },
    { id: 6, name: "Charles babbage", role: "Developer" },
    { id: 7, name: "Ravijith Aggarwal", role: "Computer Engineer" },
  ];

//   // // Filter employee data based on the search input
//   // const filteredEmployees = employees.filter(
//   //   (employee) =>
//   //     employee.name.toLowerCase().includes(filterText.toLowerCase()) ||
//   //     employee.role.toLowerCase().includes(filterText.toLowerCase())
//   // ); 

  

// const getInitials = (name) => {
//   const nameArray = name.split(" ");
//   return nameArray.map((part) => part[0]).join("").toUpperCase();
// };

//   // Handle selecting an employee
//   const handleEmployeeSelect = (employeeName) => {
//     if (employeeName && !selectedEmployee.includes(employeeName)) {
//       setSelectedEmployee([...selectedEmployee, employeeName]);
//     }
//   };

//   // Handle removing an employee from the selection
//   const handleRemoveEmployee = (employeeName) => {
//     setSelectedEmployee(
//       selectedEmployee.filter((name) => name !== employeeName)
//     );
//   };





const handleSave = async () => {
  try {
    const response = await axios.post("http://localhost:5000/api/allowances", formData, { headers: { 'Content-Type': 'application/json' } });
    alert("Allowance created successfully!");
    navigate("/allowances", { state: { newAllowance: response.data } });
  } catch (error) {
    console.error("Error creating allowance:", error);
    alert("Failed to create allowance CreateAllowance.");
  }
};



  return (

    <div>
      <h2>Create Allowance</h2>
      <form>
        <div>
          <label>Code</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>One-Time</label>
          <select
            name="oneTime"
            value={formData.oneTime}
            onChange={handleInputChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>Taxable</label>
          <select
            name="taxable"
            value={formData.taxable}
            onChange={handleInputChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>Fixed</label>
          <input
            type="checkbox"
            name="fixed"
            checked={formData.fixed}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
   
  );
};

export default CreateAllowance;
