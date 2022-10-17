import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineEmail, MdNotificationsNone } from 'react-icons/md';
import { Container, ProfileMenu } from './styles';

export function Header() {
    return (
        <Container>
            <ProfileMenu>
                <MdOutlineEmail size={20} />
                <MdNotificationsNone size={20} />
                <CgProfile size={20} />
                Oi, Thiago Abreu
            </ProfileMenu>
        </Container>
    );
}
