import { makeStyles } from "@fluentui/react-components";
import styled from "styled-components";

export const AuthStyles = {
  Auth: styled.main`
    width: 100%;
    min-height: calc(100svh - 81px);

    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
      align-items: center;
    }
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};

export const useAuthFluentStyles = makeStyles({
  Card: {
    paddingRight: "12px",
    paddingLeft: "12px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  Heading: {
    paddingBottom: "18px",
    paddingTop: "18px",
  },
});
