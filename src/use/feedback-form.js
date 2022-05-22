import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'

export function useFeedbackForm() {
  const { handleSubmit, isSubmiting } = useForm()
  const store = useStore()

  const {
    value: name,
    errorMessage: nError,
    handleBlur: nBlur,
  } = useField('name', yup.string().trim().required('Это поле обязательно'))
  const {
    value: company,
    errorMessage: cError,
    handleBlur: cBlur,
  } = useField('company', yup.string().trim().required('Это поле обязательно'))
  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Это поле обязательно')
      .email('Введите корректный адрес почты')
  )
  const {
    value: phone,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField('phone', yup.string().trim())
  const {
    value: moreInfo,
    errorMessage: mError,
    handleBlur: mBlur,
  } = useField('moreInfo', yup.string().trim().required('Это поле обязательно'))

  const onSubmit = handleSubmit(async (values) => {
    await store.dispatch('feedback', values)
    name.value = ''
    company.value = ''
    email.value = ''
    phone.value = ''
    moreInfo.value = ''
  })

  return {
    name,
    nBlur,
    nError,
    company,
    cError,
    cBlur,
    email,
    eBlur,
    eError,
    phone,
    pBlur,
    pError,
    moreInfo,
    mBlur,
    mError,
    onSubmit,
    isSubmiting,
  }
}
