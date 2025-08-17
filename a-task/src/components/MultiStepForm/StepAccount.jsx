

import { Field, ErrorMessage } from 'formik';

export default function StepAccount({ errors, touched }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <Field name="username" type="text"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.username && touched.username ? 'border-red-500' : ''}`}
        />
        <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <Field name="password" type="password"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.password && touched.password ? 'border-red-500' : ''}`}
        />
        <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm password</label>
        <Field name="confirmPassword" type="password"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''}`}
        />
        <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm mt-1" />
      </div>
    </div>
  );
}
