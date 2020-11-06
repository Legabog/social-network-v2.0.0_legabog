import React from "react";
import "./RegistrationBlockBody.css";

import { RegistrationField } from "../RegistrationField";
import { BirthdayField } from "../BirthdayField";
import { GenderField } from "../GenderField";
import { PolicyMessage } from "../PolicyMessage";
import { RegistrationButton } from "../RegistrationButton";
import { RegistrationBlockError } from "pres-components/RegistrationBlockError";
import { useTranslation } from "react-i18next";

export const RegistrationBlockBody = (props) => {
  const { t } = useTranslation()

  return (
    <div className="registration-block__body">
      <RegistrationBlockError registrationError={props.registrationError} />

      <RegistrationField
        {...props}
        type={"text"}
        name={"firstname"}
        placeholder={t("unauthorized.registration-block.body.field-1.placeholder")}
        value={props.name}
        inputHandler={props.inputNameHandler}
        onFocus={props.checkNameField}
        checked={props.checkedName}
        validator={props.nameValidator}
        // error
        error_text={t("unauthorized.registration-block.body.field-1.error")}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"text"}
        name={"surname"}
        placeholder={t("unauthorized.registration-block.body.field-2.placeholder")}
        value={props.surname}
        inputHandler={props.inputSurnameHandler}
        onFocus={props.checkSurnameField}
        checked={props.checkedSurname}
        validator={props.surnameValidator}
        // error
        error_text={t("unauthorized.registration-block.body.field-2.error")}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"text"}
        name={"telephone"}
        placeholder={t("unauthorized.registration-block.body.field-3.placeholder")}
        value={props.telephone}
        inputHandler={props.inputTelephoneHandler}
        onFocus={props.checkTelephoneField}
        checked={props.checkedTelephone}
        validator={props.telephoneValidator}
        // error
        error_text={t("unauthorized.registration-block.body.field-3.error")}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"text"}
        name={"email"}
        placeholder={t("unauthorized.registration-block.body.field-4.placeholder")}
        value={props.email}
        inputHandler={props.inputEmailHandler}
        onFocus={props.checkEmailField}
        checked={props.checkedEmail}
        validator={props.emailValidator}
        // error
        error_text={t("unauthorized.registration-block.body.field-4.error")}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"password"}
        name={"password"}
        placeholder={t("unauthorized.registration-block.body.field-5.placeholder")}
        value={props.password}
        inputHandler={props.inputPasswordHandler}
        onFocus={props.checkPasswordField}
        checked={props.checkedPassword}
        validator={props.passwordValidator}
        // error
        error_text={t("unauthorized.registration-block.body.field-5.error")}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <RegistrationField
        {...props}
        type={"password"}
        name={"confirmpassword"}
        placeholder={t("unauthorized.registration-block.body.field-6.placeholder")}
        value={props.confirmPasword}
        inputHandler={props.inputConfirmPasswordHandler}
        onFocus={props.checkConfirmPasswordField}
        checked={props.checkedConfirmPassword}
        validator={props.confirmPasswordValidator}
        // error
        error_text={t("unauthorized.registration-block.body.field-6.error")}
        error_marginLeft={"-700px"}
        error_marginTop={"-40px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />

      <BirthdayField {...props} />
      <GenderField {...props} />
      <PolicyMessage />
      <RegistrationButton {...props} />
    </div>
  );
};

