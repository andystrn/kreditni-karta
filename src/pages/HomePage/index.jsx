import CreditForm from '../../Components/CreditForm';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
  return (
    <div className="container pt-5" style={{ maxWidth: "650px" }}>
      <CreditForm />
    </div>
  );
};
