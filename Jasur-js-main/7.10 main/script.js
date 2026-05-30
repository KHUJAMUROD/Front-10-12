const form = document.getElementById("myForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const age = document.getElementById("age");
const dateInput = document.getElementById("date");
const phone = document.getElementById("phone")

const createNameMask = (element) => {
    return IMask(element, {
        mask: /^[А-Яа-яЁё\s-]*$/,
        prepareChar: (str, masked) => {
            console.log(masked);
            const isFirstLetter =
                masked._value.length === 0 ||
                masked._value.endsWith(" ") ||
                masked._value.endsWith("-");
            return isFirstLetter ? str.toUpperCase() : str.toLowerCase();
        },
        commit: (value) => value,
    });
};

createNameMask(firstName);
createNameMask(lastName);

IMask(age, {
    mask: Number,
    min: 0,
    max: 150,
    autofix: true,
});


IMask(email, {
    mask: () => true,
    commit: (value, masked) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            masked._value = "";
        }
        return value;
    },
});

IMask(phone, {
    mask: '+{998}(000)00-00',
    lazy: false, 
    placeholderChar: '_',
}); 


IMask(dateInput, {
  mask: Date,
  pattern: "d{.}`m{.}`Y",
  autofix: true,
  lazy: false,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
      placeholderChar: "Д",
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
      placeholderChar: "М",
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2050,
      maxLength: 4, 
      placeholderChar: "Г",
    },
  },
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: emailInput.value,
    age: age.value,
    date: dateInput.value,
  };

  fetch("https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка ответа сервера:", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Данные отправлены", data);
    })
    .catch((error) => {
      console.error("Ошибка:", error.message);
    });
});

