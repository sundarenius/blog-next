'use client'
import styles from '../app/page.module.css'
import {
  Box,
} from '@mui/material';

const Header = ({ children }: any) => {
  const handleRoute = () => {
    window.location.href = process.env.NEXT_PUBLIC_MAIN_DOMAIN as string;
  };
  return (
    <a href={process.env.NEXT_PUBLIC_MAIN_DOMAIN}>
      <Box className={styles.description} sx={{ cursor: 'pointer' }}>
        {children}
      </Box>
    </a>
  )
}

export default Header;
