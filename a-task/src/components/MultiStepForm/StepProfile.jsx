import { Field, ErrorMessage } from 'formik';

export default function StepProfile({ errors, touched }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Qualification</label>
        <Field as="select" name="qualification"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.qualification && touched.qualification ? 'border-red-500' : ''}`}
        >
          <option value="">Select qualification</option>
          <option value="matric">Matriculation</option>
          <option value="intermediate">Intermediate</option>
          <option value="bachelors">Bachelors</option>
          <option value="masters">Masters</option>
          <option value="phd">PhD</option>
        </Field>
        <ErrorMessage name="qualification" component="div" className="text-red-600 text-sm mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <Field as="select" name="gender"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.gender && touched.gender ? 'border-red-500' : ''}`}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Field>
        <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-1" />
      </div>
      <div className="flex items-start space-x-2">
        <Field name="terms" type="checkbox" className="h-4 w-4 mt-1" />
        <div>
          <label className="text-sm font-medium text-gray-700">I accept the terms and conditions</label>
          <ErrorMessage name="terms" component="div" className="text-red-600 text-sm mt-1" />
        </div>
      </div>
    </div>
  );
}
