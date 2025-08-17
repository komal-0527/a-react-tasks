
import { Field, ErrorMessage } from 'formik';

export default function StepPersonal({ errors, touched }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">First name</label>
        <Field name="firstName" type="text"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.firstName && touched.firstName ? 'border-red-500' : ''}`}
        />
        <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last name</label>
        <Field name="lastName" type="text"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.lastName && touched.lastName ? 'border-red-500' : ''}`}
        />
        <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <Field name="email" type="email"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}
        />
        <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
      </div>
    </div>
  );
}
