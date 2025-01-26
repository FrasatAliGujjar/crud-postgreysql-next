"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminPanel() {

    // _________________________________________________________
    const [fullName, setFullName] = useState("");
    const [section, setSection] = useState("");
    const [reg, setReg] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");

    let [dbStudents, setDbStudents] = useState([]); //For Loading Students
    // _________________________________________________________

    useEffect(() => {
        StudentLoading();
    }, [dbStudents]);

    // _________________________________________________________

    const resetFields = () => {
        setFullName("");
        setSection("");
        setReg("");
        setContactNumber("");
        setAddress("");
    };

    // _________________________________________________________

    const StudentLoading = async () => {
        const response = await axios.get("/api/admin");
        setDbStudents(response.data);
    };

    // _________________________________________________________

    const handleAddStudent = async (e) => {
        e.preventDefault();
        await axios.post('/api/admin', { fullName, section, reg, contactNumber, address });
        toast.success('Student added successfully!', { position: 'top-center', autoClose: 3000 });
        resetFields();
    };
    // _________________________________________________________

    const handleDeleteStudent = async (e) => {
        e.preventDefault();
        await axios.delete('/api/admin', { data: { reg: reg } });
        toast.success('User deleted successfully!', { position: 'top-center', autoClose: 3000 });
        resetFields();
    };
    // _________________________________________________________

    const handleEditStudent = async (e) => {
        e.preventDefault();
        await axios.patch('/api/admin', { fullName, section, reg, contactNumber, address });
        toast.success('User updated successfully!', { position: 'top-center', autoClose: 3000 });
        resetFields();
    };
    // _________________________________________________________

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Crud Panel - Next Prisma MonogoDB</h1>
            {/* Add Student */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Add Student</h2>
                <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={section} onChange={(e) => setSection(e.target.value)} placeholder="Section" required className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={reg} onChange={(e) => setReg(e.target.value)} placeholder="Registration Number" required className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" required className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <button type="submit" className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600">Add Student</button>
                </form>
            </div>

            {/* Delete Student */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">Delete Student</h2>
                <form onSubmit={handleDeleteStudent} className="flex space-x-4">
                    <input type="text" value={reg} onChange={(e) => setReg(e.target.value)} placeholder="Student Reg #" required className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <button type="submit" className="text-white font-bold py-2 px-4 rounded bg-red-500 hover:bg-red-600">Delete Student</button>
                </form>
            </div>

            {/* Edit Student */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Edit Student</h2>
                <form onSubmit={handleEditStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" value={reg} onChange={(e) => setReg(e.target.value)} placeholder="Registration Number" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={section} onChange={(e) => setSection(e.target.value)} placeholder="Section" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    <button type="submit" className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-600">Update Student</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
