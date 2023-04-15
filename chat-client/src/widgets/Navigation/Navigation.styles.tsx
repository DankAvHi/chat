import styled from "styled-components";
import { Button, colors } from "@/shared";

export const NavigationStyles = {
    Navigation: styled.nav`
        position: sticky;
        top: 0;

        border-bottom: 1px solid ${colors.black00};

        padding: 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    SwitchPageLink: styled(Button)`
        width: 32px;
        height: 32px;
    `,
    SwitchPageImage: styled.img`
        border-radius: 100%;

        object-fit: cover;
        width: 100%;
        height: 100%;
    `,

    Actions: styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
    `,

    ContactName: styled.span`
        font-size: 1.25rem;
    `,

    ContactProfileButton: styled(Button)`
        width: 32px;
        height: 32px;
    `,
    ContactProfileImage: styled.img`
        border-radius: 100%;

        object-fit: cover;
        width: 100%;
        height: 100%;
    `,
};
