import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentAsync, updateStudentAsync, fetchStudents } from '../UserReduser';
import { UserPlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const AddStudent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const isEdit = Boolean(id);

    // Load existing student for edit mode
    const existingStudent = useSelector((state) =>
        state.student.students.find((s) => s.id === Number(id))
    );

    const [formData, setFormData] = useState({
        name: '',
        adrees: '', // Backend expects 'adrees'
        age: '',
        gender: '',
    });

    // Populate form when editing
    useEffect(() => {
        if (isEdit && existingStudent) {
            setFormData({
                name: existingStudent.name || '',
                adrees: existingStudent.adrees || existingStudent.address || '',
                age: existingStudent.age || '',
                gender: existingStudent.gender || '',
            });
        }
    }, [isEdit, existingStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send formData directly as it contains 'adrees' which the backend expects.
        // Do NOT map to 'address' or send extra fields.
        const payload = { ...formData };

        if (isEdit) {
            await dispatch(updateStudentAsync({ id: Number(id), ...payload }));
        } else {
            await dispatch(addStudentAsync(payload));
        }
        // Refresh the student list to reflect changes
        dispatch(fetchStudents());
        navigate('/studentList');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/studentList')}
                        className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium mb-4 transition-colors duration-200"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                        <span>{isEdit ? 'Back to Edit' : 'Back to Student List'}</span>
                    </button>
                    <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                            <UserPlusIcon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {isEdit ? 'Edit Student' : 'Add New Student'}
                            </h1>
                            <p className="text-gray-500 mt-1">
                                {isEdit ? 'Update student details' : 'Fill in the details to add a new student'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                placeholder="Enter student's full name"
                            />
                        </div>
                        {/* Address */}
                        <div>
                            <label htmlFor="adrees" className="block text-sm font-semibold text-gray-700 mb-2">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="adrees"
                                name="adrees"
                                required
                                value={formData.adrees}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                placeholder="Enter address"
                            />
                        </div>
                        {/* Age */}
                        <div>
                            <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                                Age <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                required
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                placeholder="Enter age"
                            />
                        </div>
                        {/* Gender */}
                        <div>
                            <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                required
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                            >
                                <option value="">Select gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        {/* Buttons */}
                        <div className="flex gap-4 pt-4 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => navigate('/studentList')}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-all duration-300 border border-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                {isEdit ? 'Update Student' : 'Add Student'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info Card */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800">
                        <span className="font-semibold">Note:</span> All fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;