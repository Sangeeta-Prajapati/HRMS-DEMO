import { Link } from 'react-router-dom';

function RecruitmentDashboard() {
  return (
    <div>
      <h1>Recruitment Dashboard</h1>
      <Link to="/recruitment/pipeline">Go to Pipeline</Link>
      {/* Add other links or content as needed */}
    </div>
  );
}

export default RecruitmentDashboard;
