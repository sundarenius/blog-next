/* eslint-disable @next/next/no-img-element */
import {
  Typography,
} from '@mui/material';
import Related from '@/components/Related';
import { API } from '@/http/http';
import TextContent from '@/components/TextContent';
import RenderTime from '@/components/RenderTime';

const ArticlePage = async ({ params }: any) => {
  const {
    category,
    title,
    created,
    pictureUrl,
    content,
  } = await getArticleById(params.id);
  return (
    <div style={{
      padding: '0',
      paddingTop: '30px',
      margin: '10px',
      maxWidth: '1000px',
      display: 'flex',
      justifyContent: 'center',
    }}>
        <div>
          <Typography variant="subtitle1" component="h2" sx={{ paddingTop: '5px', color: 'orange' }}>
            Category: {category}
          </Typography>
      
          <Typography variant="h5" component="h3" sx={{ paddingTop: '5px' }}>
            {title}
          </Typography>

          <RenderTime created={created} />

          <img
            src={pictureUrl}
            alt="article-image"
            style={{ maxHeight: '500px', width: '500px', maxWidth: '90vw' }}
          />

          <TextContent content={content} />

          <div style={{ marginTop: '100px' }}>
            <Related articleId={params.id} category={category} />
          </div>
      </div>
    </div>
  );
}

const getArticleById = async (id: string) => {
  const res = await API.getArticle(id);
  const {
    pictureUrl,
    category,
    title,
    created,
    content,
  } = res.data;
  const data = {
    pictureUrl,
    category,
    title,
    created,
    id,
    content
  }
  console.log(data);
  return data;
};

export default ArticlePage;
