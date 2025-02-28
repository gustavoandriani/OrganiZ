import { Container, Logo } from "./styled";

import LogoPNG from "../../../public/logo.png";

const Profile = () => {
    return (
        <Container>
            <Logo src={LogoPNG} alt="Logo" />
        </Container>
    )
}

export default Profile;