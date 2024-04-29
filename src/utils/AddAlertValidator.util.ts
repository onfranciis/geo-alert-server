import { IAlert } from "../types/Alert.types";

export const AddAlertValidator = async (form: Partial<IAlert>) => {
  return new Promise<Partial<IAlert>>((resolve, reject) => {
    if ([form.message, form.location].includes(undefined)) {
      return reject(`Invalid form!`);
    }

    Object.values(form).forEach((value, index) => {
      if ((value || "").trim().length == 0) {
        const title = Object.keys(form)[index];
        return reject(`${title} is empty!`);
      }
    });

    return resolve(form);
  });
};
