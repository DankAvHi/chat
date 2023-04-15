import { useLocation } from "react-router-dom";
import { userAvatarMock, userContactAvatarMock, userContactName } from "@/entities/user";
import { NavigationStyles as S } from "./Navigation.styles";

export const Navigation = () => {
    const { pathname } = useLocation();
    const isProfilePageOpen = pathname === "/profile";

    return (
        <S.Navigation>
            <S.SwitchPageLink type="link" href={isProfilePageOpen ? "/" : "/profile"}>
                <S.SwitchPageImage src={userAvatarMock} alt="" />
            </S.SwitchPageLink>

            <S.Actions>
                <S.ContactName>{userContactName}</S.ContactName>

                <S.ContactProfileButton type="link" href={isProfilePageOpen ? "/" : "/profile"}>
                    <S.ContactProfileImage src={userContactAvatarMock} alt="" />
                </S.ContactProfileButton>
            </S.Actions>
        </S.Navigation>
    );
};
