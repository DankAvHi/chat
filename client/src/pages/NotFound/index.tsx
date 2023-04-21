import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const buttonOnClickHandler = () => navigate("/");
  return (
    <>
      Page not found{" "}
      <button onClick={buttonOnClickHandler}>return to site</button>
    </>
  );
};
