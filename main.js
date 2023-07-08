//onload
(function () {
  emailjs.init("rSr6_y6MNtLHljZFZ");
})();

let form = document.querySelector("#contact-form");
let submitButton = document.querySelector("#submit-btn");
let successDiv = document.querySelector("#success-div");
let messageContainer = document.querySelector("#success-div > p");
let service = {
  serviceId: "service_04fwch8",
  templateId: "template_ya7yofa",
  publicKey: "rSr6_y6MNtLHljZFZ",
};

//functions
function formHandler(e) {
  e.preventDefault();
  let { formObj, Isvalid } = validation(form);

  if (!Isvalid) handleFail("Form inputs not valid!!");
  if (Isvalid == true && Object.keys(formObj).length != 0) {
    //sendform
    emailjs.send(service.serviceId, service.templateId, formObj).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        handleSucess();
      },
      function (error) {
        handleFail("Error sending the message");
        console.log("FAILED...", error);
      }
    );
  }
}
function handleSucess() {
  let successTimeout;
  messageContainer.textContent = "Message Sent";
  submitButton.classList.toggle("hidden");
  successDiv.classList.toggle("hidden");
  //reset form
  //timeout
  successTimeout = setTimeout(() => {
    form.reset();
    submitButton.classList.toggle("hidden");
    successDiv.classList.toggle("hidden");
    clearTimeout(successTimeout);
  }, 5000);
}
function handleFail(message) {
  let successTimeout;
  messageContainer.textContent = message;
  submitButton.classList.toggle("hidden");
  successDiv.classList.toggle("hidden");
  successDiv.classList.replace("text-blue", "text-coral");
  //reset form
  //timeout
  successTimeout = setTimeout(() => {
    submitButton.classList.toggle("hidden");
    successDiv.classList.toggle("hidden");
    successDiv.classList.replace("text-coral", "text-blue");
    clearTimeout(successTimeout);
  }, 5000);
}

function validation(form) {
  let Isvalid = true;
  let formObj = {};
  [...form].forEach((input) => {
    if (input.value == "" && input.id !== "submit-btn") {
      input.classList.toggle("border-coral");
      Isvalid = false;
    }
  });
  [...form].forEach((input) => {
    if (input.id !== "submit-btn") {
      let value = input.value.trim();
      formObj[input.name] = value;
    }
  });
  console.log({ formObj, Isvalid });
  return { formObj, Isvalid };
}

//event handlers
submitButton.addEventListener("click", formHandler);
