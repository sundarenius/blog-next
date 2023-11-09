'use client';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArticleIcon from '@mui/icons-material/Article';

const CategorySideBar = ({ categories, handleCategoryClick }: any) => {
  return (
    <List sx={{
      width: '100%',
      maxWidth: 360,
      padding: '20px',
      bgcolor: 'background.paper',
      marginTop: '65px',
      boxShadow: '1px 1px 1px 2px lightgrey',
    }}>
      <h2 style={{ marginBottom: '5px' }}>Categories:</h2>
      {categories && Array.isArray(categories) && categories.map((c) => (
          <ListItem onClick={() => handleCategoryClick(c)} key={Math.random()}>
            <ListItemAvatar>
              <Avatar>
                <ArticleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={c.text} />
          </ListItem>
        ))
      }
    </List>
  );
}

export default CategorySideBar;