// src/components/styles/formStyles.js
import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;
export const Title = styled.h1`
text-align:center;
`

export const InputField = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  box-sizing: border-box;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;
