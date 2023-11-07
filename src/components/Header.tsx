'use client'
import styles from '../app/page.module.css'
import {
  Box,
} from '@mui/material';

const Header = ({ children }: any) => {
  return (
    <Box onClick={() => { window.location.href = process.env.MAIN_DOMAIN as string }} className={styles.description} sx={{ cursor: 'pointer' }}>
      {children}
    </Box>
  )
}

export default Header;
