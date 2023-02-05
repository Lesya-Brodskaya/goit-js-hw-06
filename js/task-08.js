const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();  

    // console.log('не перезагрузилась');

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Не всі поля заповнені');
    } else {
        const formData = new FormData(event.currentTarget);

        console.log(formData);
        }

        return form.reset();
    }
    // const mail = formElements.email.value;
    // const password = formElements.password.value;
    

    // const formData = {
    //     mail,
    //     password,
    // };

    // console.log(formData);   


