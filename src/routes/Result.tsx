import { useLocation, useNavigate } from "react-router-dom";
import { getDaysUntilBirthday } from "../utils/getDaysUntilBirthday";
import { useEffect, useState } from "react";
import { getIpAddress } from "../utils/getIpAddress";
import Button from "../components/Button";

function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isValidState, setIsValidState] = useState(false);
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0);
  const [ip, setIp] = useState("");

  useEffect(() => {
    if (!state || !state.firstName || !state.lastName || !state.birthDate) {
      setIsValidState(false);
    } else {
      setIsValidState(true);
      setDaysUntilBirthday(getDaysUntilBirthday(new Date(state.birthDate)));
      getIpAddress()
        .then((response: { ip: string }) => {
          setIp(response.ip);
        })
        .catch(() => {
          console.log("error");
        });
    }
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {isValidState ? (
        <div className="w-full px-4 md:px-0 md:w-auto flex flex-col justify-center gap-4 text-xl">
          <div className="animate-[fadeIn_.6s_ease-in-out_forwards] origin-bottom opacity-0">
            <span className="text-gray-800">Bonjour </span>
            <span className="text-indigo-600 font-semibold">
              {state.firstName} {state.lastName}
            </span>
          </div>
          <div className="animate-[fadeIn_.6s_ease-in-out_.2s_forwards] origin-bottom opacity-0">
            <span className="text-gray-800">Vous êtes né le </span>
            <span className="text-indigo-600 font-semibold">
              {state.birthDate}
            </span>
          </div>
          <div className="animate-[fadeIn_.6s_ease-in-out_.4s_forwards] origin-bottom opacity-0">
            <span className="text-gray-800">Votre anniversaire est dans </span>
            <span className="text-indigo-600 font-semibold">
              {daysUntilBirthday} jours.
            </span>
          </div>
          <div
            id="confetti"
            className="animate-[fadeIn_.6s_ease-in-out_.6s_forwards] origin-bottom opacity-0"
          >
            <span className="text-gray-800">Votre adresse IP est : </span>
            <span className="text-indigo-600 font-semibold">{ip}</span>
          </div>
          <Button text="Retour" handleClick={() => navigate("/")} />
        </div>
      ) : (
        <div className="w-full px-4 md:px-0 md:w-auto flex flex-col justify-center gap-4 text-xl">
          <div className="animate-[fadeIn_.6s_ease-in-out_forwards] origin-bottom opacity-0">
            <span className="text-gray-800">
              Merci de remplir le formulaire sur la page d'accueil.
            </span>
          </div>

          <Button text="Accueil" handleClick={() => navigate("/")} />
        </div>
      )}
    </div>
  );
}

export default Result;
