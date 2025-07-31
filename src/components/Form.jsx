import { X } from "lucide-react";
import React, { useContext } from "react";
import { adminContext } from "../context/AdminContextProvider";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    formVisible,
    setFormVisible,
    formDataCollection,
    setFormDataCollection,
  } = useContext(adminContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newEntry = { ...data, id: Date.now().toString() };
    const updatedData = [...formDataCollection, newEntry];
    setFormDataCollection(updatedData);
    console.log(updatedData);
    setFormVisible(false);
    reset();
  };

  return (
    <div
      className={`w-full h-screen bg-black/70 fixed inset-0 flex items-center justify-center px-4 ${
        !formVisible && "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:max-w-xl md:px-6 relative py-6 px-2 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white rounded-md"
      >
        <div
          onClick={() => setFormVisible(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <X />
        </div>
        <h2 className="text-center py-4 text-2xl font-semibold">
          Fill Details
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="clientName">
              Client Name
            </label>
            <input
              id="clientName"
              className="w-full bg-zinc-100 shadow text-gray-800 px-2 py-2 rounded-md"
              type="text"
              placeholder="Name"
              {...register("clientName", {
                required: {
                  value: true,
                  message: "Client Name is required",
                },
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
              })}
            />
            {errors.clientName && (
              <p className="text-sm text-red-500">
                {errors.clientName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="projectName">
              Project Name
            </label>
            <input
              id="projectName"
              className="w-full bg-zinc-100 shadow text-gray-800 px-2 py-2 rounded-md"
              type="text"
              placeholder="Project Name"
              {...register("projectName", {
                required: {
                  value: true,
                  message: "Project Name is required",
                },
                minLength: {
                  value: 3,
                  message: "Minimum length is 3 characters",
                },
              })}
            />
            {errors.projectName && (
              <p className="text-sm text-red-500">
                {errors.projectName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="amount">
              Amount
            </label>
            <input
              id="amount"
              className="w-full bg-zinc-100 shadow text-gray-800 px-2 py-2 rounded-md"
              type="number"
              placeholder="Amount"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Amount is required",
                },
                min: {
                  value: 1,
                  message: "Amount must be at least 1",
                },
              })}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              className="bg-zinc-100 shadow text-gray-800 px-2 py-2 rounded-md"
              type="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Date is required",
                },
              })}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Status</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Completed"
                  {...register("status", {
                    required: "Please select a status",
                  })}
                />
                Completed
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Pending"
                  {...register("status", {
                    required: "Please select a status",
                  })}
                />
                Pending
              </label>
            </div>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          <button
            className="w-full py-2 rounded-md mb-4 bg-blue-600 text-white font-semibold cursor-pointer"
            type="submit"
          >
            Add Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
