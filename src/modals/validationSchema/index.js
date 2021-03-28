import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Grocery name is required')
})