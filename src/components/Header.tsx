'use client'
import styles from '../app/page.module.css'
import {
  Box,
} from '@mui/material';

const Header = ({ children }: any) => {
  return (
    <Box onClick={() => window.location.pathname = '/'} className={styles.description} sx={{ cursor: 'pointer' }}>
      {children}
    </Box>
  )
}

export default Header;
