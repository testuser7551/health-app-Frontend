import React, { useRef } from 'react'
import { Upload, FileText ,RefreshCw} from "lucide-react";


export default function Records() {
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can now upload to server or process file
      // e.g. send with FormData to backend API
    }
  };

  // Open file picker when button clicked
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="md:text-4xl text-3xl font-bold text-secondary font-gilmer">Medical Records</h1>
        <p className="md:text-md text-sm font-poppins text-gray-700">
          Your medical records synced via TEFCA from Epic, Cerner, and Athena
          endpoints
        </p>

        {/* Sync Status */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
          <div className="lg:flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold font-gilmer text-primary-accent">
                Sync Status
              </h2>
              <p className="text-md text-gray-800 mt-5 font-semibold font-poppins">
                Connected to Augi Health
              </p>
              <p className="text-md text-gray-500 mt-1 font-poppins">
                Last synced: Today at 9:45 AM
              </p>
            </div>

            <div className="flex gap-3 mt-3 lg:mt-0">
              <button className="flex items-center gap-2 bg-primary-accent text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-600 transition cursor-pointer">
                <RefreshCw size={16} />
                Sync Now
              </button>
              {/* Upload Record */}
              <button
                onClick={handleUploadClick}
                className="flex items-center gap-2 bg-gradient-to-b to-secondary from-primary-accent hover:bg-gradient-to-t text-white text-sm font-medium px-4 py-2 rounded-lg transition cursor-pointer"
              >
                <Upload size={16} />
                Upload Record
              </button>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
          <h2 className="text-2xl font-bold font-gilmer text-primary-accent">Our Partners</h2>
          <p className="text-md text-gray-500 mt-5 font-medium font-poppins">
            We partner with leading healthcare technology providers to securely
            access your medical records.
          </p>
          <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
            <img
              src="/assets/Records/epic-logo-BKWoWS44.png"
              alt="Epic"
              className="h-20 object-contain grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/assets/Records/cerner-logo-C30xjmok.png"
              alt="Oracle"
              className="h-20 object-contain grayscale hover:grayscale-0 transition-all"

            />
            <img
              src="/assets/Records/athena-logo-Bdh0GwFK.png"
              alt="Athena Health"
              className="h-20 object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>

        {/* No Records */}
        <div className="bg-white rounded-2xl shadow-md p-10 mt-6 flex flex-col items-center justify-center text-center">
          <FileText className="text-gray-600 w-14 h-14 mb-3" />
          <p className="text-md text-gray-500 mt-2 font-medium font-poppins">
            No medical records yet. Upload your first record to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
