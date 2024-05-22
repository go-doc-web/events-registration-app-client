//TODO to refactor знаю что надо разнести на модули , не успеваю
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import { EventRegistrationById } from "../../redux/operations/eventOperation";
import {
  validateEmail,
  validateFullName,
} from "../../helpers/validateFormRegister";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "./EventRegistration.module.css";

const EventRegistration = () => {
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    birthDate: new Date(),
    source: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birthDate: date,
    });
  };

  const clearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      birthDate: "",
      source: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const errors = {};
    // if (!validateFullName(formData.fullName)) {
    //   errors.fullName = "Full name is required";
    // }
    // if (!validateEmail(formData.email)) {
    //   errors.email = "Invalid email address";
    // }

    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   console.log("errors", errors);
    //   return;
    // }

    dispatch(EventRegistrationById({ eventId, formData }));
    clearForm();
    setIsRegistered(true);
  };
  const participantsData = useSelector((state) => state.register.formData);
  const qrData = "Купон 10% на каву!!!";

  if (isRegistered) {
    return (
      <div className={css.successContainer}>
        <h1>Регистрация прошла успешно!</h1>
        <p>
          Спасибо, {participantsData.fullName}, за регистрацию на наше
          мероприятие.
        </p>
        <QRCode value={qrData} size={256} level="H" />

        <a href="/" className={css.homeLink}>
          Вернуться на главную
        </a>
      </div>
    );
  }

  return (
    <div className={css.registrationContainer}>
      <h1>Event registartion</h1>
      <form onSubmit={handleSubmit} className={css.registrationForm}>
        <div className={css.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Dart Vader"
            required
          />
          {errors.fullName && <p className={css.error}>{errors.fullName}</p>}
        </div>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="darth.vader@empire.com"
            required
          />
          {errors.email && <p className={css.error}>{errors.email}</p>}
        </div>
        <div className={css.formGroup}>
          <label htmlFor="birthDate">Date Of Birth</label>
          <DatePicker
            selected={formData.birthDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            locale="en"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            required
          />
        </div>
        <div className={css.formGroup}>
          <label>Where did your hear about this event</label>
          <div className={css.radioGroup}>
            <label>
              <input
                type="radio"
                name="source"
                value="Social Media"
                checked={formData.source === "Social Media"}
                onChange={handleChange}
                required
              />
              Social Media
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="Friends"
                checked={formData.source === "Friends"}
                onChange={handleChange}
              />
              Friends
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="Found myself"
                checked={formData.source === "Found myself"}
                onChange={handleChange}
              />
              Found myself
            </label>
          </div>
        </div>
        <button type="submit" className={css.submitButton}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default EventRegistration;
