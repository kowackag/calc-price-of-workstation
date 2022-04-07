export const validateData =({category, type, model, price}) => {
    let errors = {};
    if (!category) {
        const copyErrors = {category: 'Wybierz Kategorię'};
        errors = {...errors, ...copyErrors};
    }
    if (!price) {
        const copyErrors = {price: 'Uzupełnij cenę produktu'};
        errors = {...errors, ...copyErrors};
    }
    if (price<0) {
        const copyErrors = {price: 'Niewłaściwa cena'};
        errors = {...errors, ...copyErrors};
    }
    if (!model) {
        const copyErrors = {model: 'Wpisz model produkty'};
        errors = {...errors, ...copyErrors};
    }
    if (!type) {
        const copyErrors = {type: 'Wpisz model produkty'};
        errors = {...errors, ...copyErrors};
    }
    return errors;
}