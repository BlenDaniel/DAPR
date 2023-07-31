import AuthService from "../../../services/auth/AuthService";
import { useNavigate } from 'react-router-dom';

interface CoverLetterModel {
  checkCurrentUser: () => void;
}

export default function LogInViewModel(): CoverLetterModel {
  const navigate = useNavigate();



  const checkCurrentUser = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      navigate(`/home/`);
    }
  };

  return {
    checkCurrentUser,
  };
}

