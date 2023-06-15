
export const validateSpace = /^\S*$/; // a string consisting only of non-whitespaces

export const validateName = name => {
  const re = /^([a-zA-Z]+\s?)*$/; //NOSONAR
  return re.test(name);
};

export const validateNumber = number => {
  const re = /^([4-9][0-9]{9})*$/; //NOSONAR
  return re.test(number);
};

export const valdiatePin = text => {
  const re = /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})*$/; //NOSONAR
  return re.test(text);
};

export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:!\s@\"]+(\.[^<>()[\]\\.,;:!\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //NOSONAR
  return re.test(String(email).toLowerCase());
};

export const validatePassword = password => {
  const re = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[.@#$%^&+=]).*$/; //NOSONAR
  return re.test(password);
};

export const validateAadhar = aadhar => {
  const re = /^\d{12}$/; //NOSONAR
  return re.test(aadhar);
};

export const maskify = value => {
  if (value !== null) {
    let cardNumber = '';
    for (let i = 0; i < value.length; i++) {
      if (i >= 12 && i < 16) {
        cardNumber = cardNumber + value[i];
      } else {
        cardNumber = cardNumber + '\u2022';
      }
    }
    let joy = cardNumber.match(/.{1,4}/g); //NOSONAR
    return joy.join(' ');
  }
};



export const isTrimmed = s => {
  return !/(^\s)|(\s$)/.test(s); //NOSONAR
};


export const arrayValidator = productItems => {

  let isArray =

    productItems && Array.isArray(productItems) && productItems.length > 0;

  return isArray;

};
export const nameshorting = productItems => {


  productItems.sort(function (a, b) {

    if (a.name < b.name) {

      return -1;

    }

    if (a.name > b.name) {

      return 1;

    }


  });
  return productItems;




};