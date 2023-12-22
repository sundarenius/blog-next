import {
  Card,
  Typography,
  Box,
} from '@mui/material';
import Link from 'next/link'
import RenderTime from './RenderTime';

interface Props {
  articleData: any
  sm?: boolean
}

const getPath = (id: number) => {
  return `/article/${id}`;
}

const ArticleList = ({ articleData, sm }: Props) => {
  return (
    <Link href={getPath(articleData.articleId)}>
      <Box
        sx={{ padding: '0', margin: '10px', cursor: 'pointer' }}
      >
        <Card sx={{ maxHeight: sm ? '200px' : '' }}>
          <img
            src={articleData.pictureUrl}
            alt={articleData.tag || 'article'}
            style={{ maxHeight: '500px', maxWidth: '100%' }}
          />
        </Card>
  
        <Typography variant="subtitle1" component="h2" sx={{ paddingTop: '5px', color: 'orange' }}>
          Category: {articleData.category}
        </Typography>
  
        <Typography variant="h5" component="h1" sx={{ paddingTop: '5px' }}>
          {articleData.title}
        </Typography>
  
        <RenderTime created={articleData.created} />
      </Box>
    </Link>
  )
}

export default ArticleList;
