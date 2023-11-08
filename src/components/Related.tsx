'use client'
import { useState, useEffect } from 'react';
import ArticleList from '@/components/ArticleList';
import {
  Grid,
  Typography,
} from '@mui/material';
import { API } from '@/http/http';

const getArticles = async (setArticles: any, articleId: string, category: string) => {
  const res = await API.getArticles({
    keyMatch: {
      customerId: [process.env.CUSTOMER_ID as string],
      category: [category]
    },
    orderByKey: 'created',
    startIndex: 0,
    max: 12,
  });
  
  setArticles(res.data.filter((a: any) => a.articleId !== articleId));
};

const Related = ({ articleId, category }: any) => {
  const [articles, setArticles] = useState([] as any);

  useEffect(() => {
    getArticles(setArticles, articleId, category);
  }, []);

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ paddingBottom: '5px'}}>
            Related articles
          </Typography>
      </Grid>

      {articles && articles.length > 0 && articles.map((a: any) => (
        <Grid key={a.articleId} item xs={12} md={3}>
          <ArticleList articleData={a} sm />
        </Grid>
      ))}

    </Grid>
  )
};

export default Related;
