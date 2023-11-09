'use client'
import { useState, useEffect } from 'react';
import styles from '../app/page.module.css'
import ArticleList from '@/components/ArticleList';
import {
  Grid,
  Button,
} from '@mui/material';
import { API } from '@/http/http';

const maxLength = 11;
const getArticles = async (startIndex: number, setArticles: any, articles: any, setShowMoreBtn: any) => {
  const res = await API.getArticles({
    keyMatch: {
      customerId: [process.env.NEXT_PUBLIC_CUSTOMER_ID as string],
    },
    orderByKey: 'created',
    startIndex,
    max: maxLength,
  });
  
  setArticles([
    ...articles,
    ...res.data
  ]);

  if (res.data.length === 0) {
    setShowMoreBtn(false);
  }
};

const LoadMoreArticles = ({ startIndex }: any) => {
  const [articles, setArticles] = useState([] as any);
  const [showMoreBtn, setShowMoreBtn] = useState(true);

  const handleMoreArticles = () => {
    getArticles((startIndex + articles.length), setArticles, articles, setShowMoreBtn);
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

        {showMoreBtn && (
          <Grid item xs={12} sx={{ marginTop: '20px' }}>
            <Button onClick={handleMoreArticles} variant="contained" color="primary" size="large">
              Load more
            </Button>
          </Grid>
        )}

      </Grid>
    </div>
  )
}

export default LoadMoreArticles;
