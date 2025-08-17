export default function StepReview({ values }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Review your information</h3>
      <div className="bg-gray-50 p-4 rounded space-y-2">
        <div><strong>Full name:</strong> {values.firstName} {values.lastName}</div>
        <div><strong>Email:</strong> {values.email}</div>
        <div><strong>Username:</strong> {values.username}</div>
        <div><strong>Qualification:</strong> {values.qualification}</div>
        <div><strong>Gender:</strong> {values.gender}</div>
        <div><strong>Accepted Terms:</strong> {values.terms ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
}
