import React from 'react';
import { Link } from 'gatsby';
//hooks
import { useSiteConfigQuery} from 'hooks/useSiteConfigQuery';
//styles
import { Wrapper, Logo } from './Header.styles';

const Header = ({ siteTitle = `` }) => {
    const siteConfig = useSiteConfigQuery()

    return (
        <Wrapper>
            <Link to='/'>
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle}/>
            </Link>
        </Wrapper>

    )
}

export default Header