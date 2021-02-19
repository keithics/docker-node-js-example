import {Validator} from '../libraries/Validator';

/**
 * County validator middleware
 */
export const CountValidation = (update: boolean = false) => {
    const rules = [
        Validator.required('key'),
    ];

    return rules;
}

