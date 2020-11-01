import React from "react";

function InputItem(props) {
  const { width, name, placeholder, label, formik } = props;
  return (
    <div className="w-full mb-4 form-group">
      <label
        className="inline-block mb-1 text-sm font-semibold text-gray-600"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="text"
        className={`block ${width} p-3 text-sm border rounded-md shadow-inner focus:outline-none`}
        name={name}
        id={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <small className="text-red-400">{formik.errors[name]}</small>
      ) : null}
    </div>
  );
}

export default InputItem;
