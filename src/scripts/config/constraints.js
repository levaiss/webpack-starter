export const name = {
    length: {
        minimum: 2,
        maximum: 26,
        tooShort: '^Слишком коротко(не менее %{count} символов)',
        tooLong: '^Превышен лимин(не более %{count} символов)'
    },
    format: {
        pattern: '^(?:[а-яА-ЯёЁa-zA-Z]+[ -])*[а-яА-ЯёЁa-zA-Z]+$',
        flags: 'i',
        message: '^Невалидный формат имени'
    }
};

export const nickname = {
    length: {
        minimum: 3,
        maximum: 26,
        tooShort: '^Слишком коротко(не менее %{count} символов)',
        tooLong: '^Превышен лимин(не более %{count} символов)'
    },
    format: {
        pattern: '[-_а-яА-ЯёЁa-zA-Z0-9]+',
        flags: 'i',
        message: '^Используйте, только буквы, дефис, символ подчеркивание и цифры 0-9'
    }
};

export const city = {
    length: {
        minimum: 2,
        maximum: 20,
        tooShort: '^Слишком коротко(не менее %{count} символов)',
        tooLong: '^Превышен лимин(не более %{count} символов)'
    },
    format: {
        pattern: '[-а-яА-ЯёЁa-zA-Z]+',
        flags: 'i',
        message: '^Используйте, только буквы и дефис'
    }
};

export const phone = {
    format: {
        pattern: '^[+][7][(]?([0-9]{3})?[)]([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$',
        flags: 'i',
        message: '^Только цифры в формате ХХХХХХХХХХ'
    }
};
export const card_number = {
    format: {
        pattern: '^([0-9]{4})?[ ]?([0-9]{4})[ ]?([0-9]{4})[ ]?([0-9]{4})$',
        flags: 'i',
        message: '^Не соблюден формат'
    }
};

export const valid_age = {
    inclusion: {
        within: [true],
        message: '^Подтвердите свой возраст'
    }
};

export const privacy_policy = {
    inclusion: {
        within: [true],
        message: '^Ознакомьтесь с политикой конфиденциальности'
    }
};