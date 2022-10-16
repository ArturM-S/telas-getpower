import { MdHome } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { FaUniversity } from 'react-icons/fa';
import { AiOutlineDownCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import {
    Container,
    DropDownIcon,
    NavLogo,
    NavLogoBox,
    NavMenu,
    NavMenuItem,
    Picture,
    ProfileEmail,
    ProfileInfos,
    ProfileName,
} from './styles';

export function Sidebar() {
    return (
        <Container>
            <NavLogoBox>
                <NavLogo src="logo.png" alt="logo" />
                academia do sol
            </NavLogoBox>

            <ProfileInfos>
                <Picture />
                <ProfileName>Thiago Abreu</ProfileName>
                <ProfileEmail>folador@folador.com</ProfileEmail>
            </ProfileInfos>
            <NavMenu>
                <NavMenuItem>
                    <MdHome size={20} />
                    Pagina inicial
                </NavMenuItem>
            </NavMenu>
            <NavMenu>
                Cursos
                <NavMenuItem>
                    <ImBooks size={20} />
                    Meus cursos
                </NavMenuItem>
                <NavMenuItem>
                    <FaUniversity size={20} />
                    Todos os cursos
                </NavMenuItem>
            </NavMenu>
            <NavMenu>
                Dimensionamento
                <NavMenuItem>
                    <AiOutlineDownCircle size={20} />
                    Baixa tensão
                    <DropDownIcon>{'>'}</DropDownIcon>
                </NavMenuItem>
                <NavMenuItem>
                    <AiOutlineMinusCircle size={20} />
                    Média tensão
                    <DropDownIcon>{'>'}</DropDownIcon>
                </NavMenuItem>
            </NavMenu>
            <NavMenu>
                crm
                <NavMenuItem>
                    <BsJournalBookmarkFill size={20} />
                    Gerenciar
                </NavMenuItem>
            </NavMenu>
        </Container>
    );
}
