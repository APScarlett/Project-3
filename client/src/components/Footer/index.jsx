import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <div className='bg-primary text-white card'></div>
        <h4>Made by Yusuf Daza, Alexander Scarlett, Alejandro Quiroz</h4>
      </div>
    </footer>
  );
};

export default Footer;
