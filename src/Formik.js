import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, Title, InputField, Label, Input, ErrorText, SubmitButton } from './formikStyle';

const validationSchema = Yup.object({
    name: Yup.string()
      .required('Nama tidak boleh kosong')
      .min(5, 'Nama harus minimal 5 huruf')
      .max(12, 'Nama harus maksimal 12 huruf'),
    email: Yup.string()
      .required('Email tidak boleh kosong')
      .email('Email tidak valid'),
    password: Yup.string()
      .required('Password tidak boleh kosong')
      .min(6, 'Password harus minimal 6 huruf'),
  });
  
  const SimpleForm = () => {
    return (
      <FormContainer>
        <Title>Formulir Pengguna</Title>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form Data', values);
          }}
        >
          <Form>
            <InputField>
              <Label htmlFor="name">Nama</Label>
              <Field
                as={Input}
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan nama"
              />
              <ErrorMessage name="name" component={ErrorText} />
            </InputField>
  
            <InputField>
              <Label htmlFor="email">Email</Label>
              <Field
                as={Input}
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email"
              />
              <ErrorMessage name="email" component={ErrorText} />
            </InputField>
  
            <InputField>
              <Label htmlFor="password">Password</Label>
              <Field
                as={Input}
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan password"
              />
              <ErrorMessage name="password" component={ErrorText} />
            </InputField>
  
            <SubmitButton type="submit">Kirim</SubmitButton>
          </Form>
        </Formik>
      </FormContainer>
    );
  };
  
  export default SimpleForm;