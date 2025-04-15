
import React from 'react';
import SectionContainer from './SectionContainer';
import { FiEdit2 } from 'react-icons/fi';

const AvailabilitySection = ({ onToggleModal, showModal }) => {
  return (
    <SectionContainer title="Availability">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">Monday - Friday: 10:00 AM - 4:00 PM</p>
          <p className="text-gray-600">Saturdays: By appointment only</p>
        </div>
        <button
          className="text-blue-600 flex items-center"
          onClick={onToggleModal}
        >
          <FiEdit2 className="mr-1" /> Edit
        </button>
      </div>

      {/* Availability Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Available Times</h3>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onToggleModal}
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
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Days
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="days"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Time
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="time"
                    id="time"
                    defaultValue="10:00"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div className="mb-4">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Add Optional Notes
                </label>
                <textarea
                  id="notes"
                  rows="4"
                  placeholder="Add optional notes"
                  className="block w-full resize-none py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
      )}
    </SectionContainer>
  );
};

export default AvailabilitySection;
