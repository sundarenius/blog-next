'use client'
import { useState, useEffect } from 'react';
import styles from '../app/page.module.css'
import ArticleList from '@/components/ArticleList';
import {
  Grid,
  Button,
} from '@mui/material';
import { API } from '@/http/http';

const getArticles = async (startIndex: number, setArticles: any, articles: any) => {
  const res = await API.getArticles({
    keyMatch: {
      customerId: [process.env.CUSTOMER_ID as string],
    },
    orderByKey: 'created',
    startIndex,
    max: 11,
  });
  
  setArticles([
    ...articles,
    ...res.data
  ]);
};

const LoadMoreArticles = ({ startIndex }: any) => {
  const [articles, setArticles] = useState([] as any);

  const handleMoreArticles = () => {
    getArticles((startIndex + articles.length), setArticles, articles);
  };

  return (
    <div className={styles.center}>
      <Grid container spacing={2}>

        { articles && articles.length > 0 && (
            articles.map((val: any) => (
              <Grid key={val.articleId} item xs={12} md={4}>
                <ArticleList articleData={val} sm />
              </Grid>
            ))
        )}

        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <Button onClick={handleMoreArticles} variant="contained" color="primary" sx={{ padding: '20px' }}>
            Load more
          </Button>
        </Grid>

      </Grid>
    </div>
  )
}

export default LoadMoreArticles;
