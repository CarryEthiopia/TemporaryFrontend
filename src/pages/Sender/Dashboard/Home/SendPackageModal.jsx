import { useState } from "react";
import {
  Close as CloseIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types"; // Add this import

const SendPackageModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    category: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    value: "",
    description: "",
    fragile: false,
    image: null,
    deliverySpeed: "standard",
    organizationLevel: "individual",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Header */}
          <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Send Package
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Organization Level */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Sending As
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="organizationLevel"
                      value="individual"
                      checked={form.organizationLevel === "individual"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Individual
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="organizationLevel"
                      value="business"
                      checked={form.organizationLevel === "business"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Business
                  </label>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="documents">Documents</option>
                  <option value="fragile">Fragile Items</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    name="length"
                    value={form.length}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Width (cm)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={form.width}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={form.height}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Weight and Value */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Declared Value ($)
                  </label>
                  <input
                    type="number"
                    name="value"
                    value={form.value}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Delivery Speed */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Delivery Speed
                </label>
                <select
                  name="deliverySpeed"
                  value={form.deliverySpeed}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="standard">Standard (3-5 days)</option>
                  <option value="express">Express (1-2 days)</option>
                  <option value="same-day">Same Day</option>
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Package Image (optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mx-auto h-32 w-auto"
                      />
                    ) : (
                      <CloudUploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          name="image"
                          onChange={handleImageChange}
                          className="sr-only"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="fragile"
                  checked={form.fragile}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Mark as Fragile
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Delivery
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
SendPackageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SendPackageModal;
