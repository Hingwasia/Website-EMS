export type ErrorMap<T extends object> = Partial<Record<keyof T, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
const NAME_REGEX = /^[A-Za-z?-?][A-Za-z?-?\s'.-]{1,79}$/;

const isNonEmpty = (value: string) => value.trim().length > 0;
const hasMeaningfulLength = (value: string, min: number) => value.trim().length >= min;

export interface ContactPageFormValues {
  Full_Name: string;
  Email_Address: string;
  Phone_Number: string;
  Company_Name: string;
  Service_Interest: string;
  Project_Budget: string;
  Project_Details: string;
  Current_Stack: string;
  Biggest_Challenge: string;
}

export interface ContactModalFormValues {
  Full_Name: string;
  Email_Address: string;
  Company_Name: string;
  Current_Stack: string;
  Biggest_Challenge: string;
  Phone_Number: string;
  Service_Interest: string;
  Project_Budget: string;
  Project_Details: string;
}

export const validateContactPageForm = (values: ContactPageFormValues): ErrorMap<ContactPageFormValues> => {
  const errors: ErrorMap<ContactPageFormValues> = {};

  if (!isNonEmpty(values.Full_Name)) {
    errors.Full_Name = 'Please enter your full name.';
  } else if (!NAME_REGEX.test(values.Full_Name.trim())) {
    errors.Full_Name = 'Use 2 to 80 characters. Letters, spaces, apostrophes, periods, and hyphens only.';
  }

  if (!isNonEmpty(values.Email_Address)) {
    errors.Email_Address = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(values.Email_Address.trim())) {
    errors.Email_Address = 'Enter a valid email address.';
  }

  if (isNonEmpty(values.Phone_Number)) {
    const digits = values.Phone_Number.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15 || !PHONE_REGEX.test(values.Phone_Number.trim())) {
      errors.Phone_Number = 'Enter a valid phone number with 7 to 15 digits.';
    }
  }

  if (isNonEmpty(values.Company_Name) && values.Company_Name.trim().length > 120) {
    errors.Company_Name = 'Company name must be 120 characters or fewer.';
  }

  if (!isNonEmpty(values.Service_Interest)) {
    errors.Service_Interest = 'Please select a service.';
  }

  if (isNonEmpty(values.Project_Budget) && values.Project_Budget.trim().length > 40) {
    errors.Project_Budget = 'Please choose a valid budget option.';
  }

  if (!isNonEmpty(values.Project_Details)) {
    errors.Project_Details = 'Please describe your project in a few sentences.';
  } else if (!hasMeaningfulLength(values.Project_Details, 30)) {
    errors.Project_Details = 'Project details must be at least 30 characters long.';
  } else if (values.Project_Details.trim().length > 1500) {
    errors.Project_Details = 'Project details must be 1500 characters or fewer.';
  }

  if (isNonEmpty(values.Current_Stack) && values.Current_Stack.trim().length > 200) {
    errors.Current_Stack = 'Current tech stack must be 200 characters or fewer.';
  }

  if (isNonEmpty(values.Biggest_Challenge) && values.Biggest_Challenge.trim().length > 500) {
    errors.Biggest_Challenge = 'Biggest challenge must be 500 characters or fewer.';
  }

  return errors;
};

export const validateContactModalForm = (values: ContactModalFormValues): ErrorMap<ContactModalFormValues> => {
  const errors: ErrorMap<ContactModalFormValues> = {};

  if (!isNonEmpty(values.Full_Name)) {
    errors.Full_Name = 'Please enter your full name.';
  } else if (!NAME_REGEX.test(values.Full_Name.trim())) {
    errors.Full_Name = 'Use 2 to 80 characters. Letters, spaces, apostrophes, periods, and hyphens only.';
  }

  if (!isNonEmpty(values.Email_Address)) {
    errors.Email_Address = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(values.Email_Address.trim())) {
    errors.Email_Address = 'Enter a valid email address.';
  }

  if (!isNonEmpty(values.Company_Name)) {
    errors.Company_Name = 'Please enter your company name.';
  } else if (values.Company_Name.trim().length > 120) {
    errors.Company_Name = 'Company name must be 120 characters or fewer.';
  }

  if (isNonEmpty(values.Current_Stack) && values.Current_Stack.trim().length > 200) {
    errors.Current_Stack = 'Current tech stack must be 200 characters or fewer.';
  }

  if (!isNonEmpty(values.Biggest_Challenge)) {
    errors.Biggest_Challenge = 'Please describe your biggest challenge.';
  } else if (!hasMeaningfulLength(values.Biggest_Challenge, 20)) {
    errors.Biggest_Challenge = 'Biggest challenge must be at least 20 characters long.';
  } else if (values.Biggest_Challenge.trim().length > 600) {
    errors.Biggest_Challenge = 'Biggest challenge must be 600 characters or fewer.';
  }

  if (isNonEmpty(values.Phone_Number)) {
    const digits = values.Phone_Number.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15 || !PHONE_REGEX.test(values.Phone_Number.trim())) {
      errors.Phone_Number = 'Enter a valid phone number with 7 to 15 digits.';
    }
  }

  if (!isNonEmpty(values.Service_Interest)) {
    errors.Service_Interest = 'Please select a service.';
  }

  if (isNonEmpty(values.Project_Budget) && values.Project_Budget.trim().length > 40) {
    errors.Project_Budget = 'Please choose a valid budget option.';
  }

  if (isNonEmpty(values.Project_Details) && values.Project_Details.trim().length > 1500) {
    errors.Project_Details = 'Project details must be 1500 characters or fewer.';
  }

  return errors;
};
