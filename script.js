function validateForm() {
  const firstName = document.forms["myForm"]["first-name"];
  const lastName = document.forms["myForm"]["last-name"];
  const message = document.forms["myForm"]["message"];

  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
    sendComment(firstName.value, lastName.value, message.value);
    clearForm();
  }
}

function sendComment(firstName, lastName, message) {
  const comment = `<div class="flex space-x-4 text-sm text-gray-500">
    <div class="flex-1 py-10 border-t border-gray-200">
      <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
      <div class="prose prose-sm mt-4 max-w-none text-gray-500">
        <p>${message}</p>
      </div>
    </div>
  </div>`;
  document
    .getElementById("comment-list")
    .insertAdjacentHTML("beforeend", comment);
}

function clearForm() {
  document.forms["myForm"]["first-name"].value = "";
  document.forms["myForm"]["last-name"].value = "";
  document.forms["myForm"]["message"].value = "";
}
