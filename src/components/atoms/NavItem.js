import PropTypes from 'prop-types'
import Link from 'next/link'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const NavItem = ({ title, href, privateRoute = false, openNewTab }) => {
  const { pathname } = useRouter()
  const isActive = pathname === href
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (
    <>
      {privateRoute === isAuthenticated && (
        <Link href={href} key={title} passHref>
          <Button
            component="a"
            target={openNewTab && '_blank'}
            style={{
              margin: 'auto 0',
              color: 'white',
              display: 'block',
              textDecoration: isActive && 'underline',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#3c52b2'
              }
            }}
          >
            {title}
          </Button>
        </Link>
      )}
    </>
  )
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default NavItem
