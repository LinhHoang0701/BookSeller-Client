const InputField = ({ field, form, type, className, label, placeholder }) => {
  const { name } = field;

  const { errors, touched } = form;

  const showError = errors[name] && touched[name];
  return (
    <div className="form-group">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...field}
      />
      {showError && <p className="invalid-feedback">{errors[name]}</p>}
    </div>
  );
};

export default InputField;
