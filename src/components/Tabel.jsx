/* eslint-disable no-unused-vars */
// components/Table.jsx
import React from 'react';

const Table = ({ data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
            <table className="min-w-full bg-white">
                <thead className="bg-gradient-to-r from-red-500 to-red-700 text-white">
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold">No</th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold">Nama</th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold">Alamat</th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold">Umur</th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-sm font-semibold">Keterangan</th>
                        <th className="px-6 py-3 border-b-2 border-gray-200 text-center text-sm font-semibold">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((student, index) => (
                            <tr key={student.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.no}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.nama}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.alamat}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.umur}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{student.ket}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-center">
                                    <button
                                        onClick={() => onEdit(student.id, student.nama)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2 transition-all duration-300"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(student.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-all duration-300"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center text-gray-500">Tidak ada data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
