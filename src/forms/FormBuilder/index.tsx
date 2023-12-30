import React, { useImperativeHandle } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';
import { FormComponentProps, FormElementProps, FORMTYPES } from '../types';
import { ScrollView } from 'react-native';
import { styles } from './style';
import { Button, ComponentSeparator, Container, Text } from 'lib_components';
import { FormInput } from 'lib_form_components';

interface FormBuilderProps {
  title?: string;
  submitText?: string;
  schema: AnyObjectSchema;
  formElements: FormElementProps[];
  onSubmit?: (data: FieldValues) => void;
}
// eslint-disable-next-line react/display-name
export const FormBuilder = React.forwardRef((props: FormBuilderProps, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(props.schema),
  });
  useImperativeHandle(ref, () => ({
    validateAndGetData: async () => {
      try {
        const isValid = await trigger(); // Trigger validation
        if (isValid) {
          const formData = await getValues(); // Get form data
          return formData;
        }
        return null; // Form is not valid
      } catch (error) {
        console.error(error);
        return null; // Error occurred during validation
      }
    },
  }));
  return (
    <>
      <ScrollView style={styles.container}>
        {props.title && <Text style={styles.heading}>{props.title}</Text>}
        <ComponentSeparator space={20} style={styles.formContainer}>
          {props.formElements.map((element, index) => {
            let component;
            const error = errors[element.name];
            switch (element.type) {
              case FORMTYPES.INPUT:
                component = FormInput(element);
            }
            return (
              <Container key={index}>
                <Controller
                  control={control}
                  name={element.name}
                  render={component as (field: FormComponentProps) => JSX.Element | undefined}
                />
                {error ? <Text style={styles.error}>{error.message}</Text> : null}
              </Container>
            );
          })}
        </ComponentSeparator>
      </ScrollView>
      {props.onSubmit && (
        <Button text={props.submitText ?? 'Submit'} onPress={handleSubmit(props.onSubmit)} />
      )}
    </>
  );
});
