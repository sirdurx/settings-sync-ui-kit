
import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

interface AvailabilitySectionProps {
  onToggleModal: () => void;
  showModal: boolean;
}

const AvailabilitySection = ({ onToggleModal, showModal }: AvailabilitySectionProps) => {
  return (
    <div
      className="bg-white rounded-md shadow-sm p-8 mb-6"
      style={{
        width: "1044px",
        height: "150px",
        borderRadius: "5px",
        border: "0.5px solid #E2E8F0",
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ width: "480px" }}
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Availability
          </h2>
          <p className="text-gray-600">
            Monday - Friday: 10:00 AM - 4:00 PM
          </p>
          <p className="text-gray-600">Saturdays: By appointment only</p>
        </div>
        <button
          className="text-[#1F4E79]/80 p-3 bg-[#1F4E79]/10 flex items-center rounded-full cursor-pointer"
          onClick={onToggleModal}
        >
          <FiEdit2 size={30} />
        </button>
      </div>
      {showModal && <AvailabilityModal onClose={onToggleModal} />}
    </div>
  );
};

const AvailabilityModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-md w-1/2 p-6"
        style={{ maxWidth: "600px" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Edit Available Times
          </h3>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <form>
          <div className="mb-4 grid grid-cols-2 gap-4">
            {/* Days Field */}
            <div>
              <label
                htmlFor="days"
                className="block text-sm font-medium text-gray-700"
              >
                Days*
                <span className="text-red-500">*</span>
              </label>
              <select
                id="days"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            {/* Time Field */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time*
                <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="time"
                defaultValue="10:00"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Optional Notes */}
          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Add Optional Notes
            </label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Add Optional notes"
              className="mt-1 block w-full resize-none py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="bg-[#1F4E79] text-white px-4 py-2 rounded-md hover:bg-[#1A4163] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvailabilitySection;
