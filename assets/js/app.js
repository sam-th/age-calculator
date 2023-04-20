// ReGexs
const dayRegex = /^(3[01]|[12][0-9]|0[1-9])$/;
const monthRegex = /^(0[1-9]|1[012])$/;
const yearRegex = /^\d{4}$/;

// elements
const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const submitBtn = document.querySelector(".details-box__middle-icon-container");

// functions
function isInputEmpty(elem) {
  let isEmpty = null;
  if (!/\w/.test(elem.value)) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  return isEmpty;
}
function regexTest(elem, regexCode) {
  let regesTestResult = null;
  if (regexCode.test(elem.value)) {
    regesTestResult = true;
  } else {
    regesTestResult = false;
  }
  return regesTestResult;
}
function makeErrStyle(elem, errTextElem, errText) {
  elem.style.border = "2px solid #c12222";
  errTextElem.innerHTML = errText;
}

// validation functions
function dayValidation() {
  let result = null;
  const dayInputErrElem = document.querySelector("#day-input-err");
  if (isInputEmpty(dayInput)) {
    makeErrStyle(dayInput, dayInputErrElem, "This field is required");
    result = false;
  } else if (!regexTest(dayInput, dayRegex)) {
    makeErrStyle(dayInput, dayInputErrElem, "Must be a valid day");
    result = false;
  } else {
    dayInput.style.border = "2px solid #efefef";
    dayInputErrElem.innerHTML = "";
    result = true;
  }

  return result;
}
function monthValidation() {
  let result = null;
  const monthInputErrElem = document.querySelector("#month-input-err");

  if (isInputEmpty(monthInput)) {
    makeErrStyle(monthInput, monthInputErrElem, "This field is required");
    result = false;
  } else if (!regexTest(monthInput, monthRegex)) {
    makeErrStyle(monthInput, monthInputErrElem, "Must be a valid month");
    result = false;
  } else {
    monthInput.style.border = "2px solid #efefef";
    monthInputErrElem.innerHTML = "";
    result = true;
  }

  return result;
}
function yearValidation() {
  const yearInputErrElem = document.querySelector("#year-input-err");
  let result = null;
  let date = new Date();
  let currentYear = +date.getFullYear();
  if (isInputEmpty(yearInput)) {
    makeErrStyle(yearInput, yearInputErrElem, "This field is required");
    result = false;
  } else if (!regexTest(yearInput, yearRegex)) {
    makeErrStyle(yearInput, yearInputErrElem, "Must be a valid year");
    result = false;
  } else if (currentYear < yearInput.value) {
    makeErrStyle(yearInput, yearInputErrElem, "Must be a valid year");
    result = false;
  } else {
    yearInput.style.border = "2px solid #efefef";
    yearInputErrElem.innerHTML = "";
    result = true;
  }

  return result;
}

// main function
function ageCalculate() {
  // elems
  dayValidation();
  monthValidation();
  yearValidation();
}

// events
submitBtn.addEventListener("click", () => {
  ageCalculate();
});
