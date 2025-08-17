
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { steps, initialValues } from './step';
import { validationSchemas } from './validationSchemas';
import StepAccount from './StepAccount';
import StepProfile from './StepProfile';
import StepReview from './StepReview';
import StepPersonal from './StepPersonal';

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const isLastStep = step === steps.length - 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Create an account</h2>
        <p className="text-sm text-gray-500 mb-6">Step {step + 1} of {steps.length} — {steps[step]}</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} ></div>
        </div>
        {submitted && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded">
            Registration submitted successfully! 
          </div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[step]}
          onSubmit={ (values, actions) => {
            if (!isLastStep) {
              setStep(s => s + 1);
              actions.setTouched({});
            } else {
              console.log('Submitted values: ', values);
              setSubmitted(true);
              actions.resetForm();
              setStep(0);
            }
            actions.setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, touched, errors }) => (
            <Form>
              {step === 0 && <StepPersonal errors={errors} touched={touched} />}
              {step === 1 && <StepAccount errors={errors} touched={touched} />}
              {step === 2 && <StepProfile errors={errors} touched={touched} />}
              {step === 3 && <StepReview values={values} />}

              <div className="mt-6 flex items-center justify-between">
                <div>
                  {step > 0 && (
                    <button type="button" onClick={() => setStep(s => s - 1)} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                      Back
                    </button>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  {!isLastStep && (
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      Next
                    </button>
                  )}
                  {isLastStep && (
                    <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
