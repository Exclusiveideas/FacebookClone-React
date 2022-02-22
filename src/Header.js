import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{user} , dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                alt="logo"
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>
            <div className='header__center'>
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className='header__right'>
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;