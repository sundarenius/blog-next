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

        { articles.length > 0 && (
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

const getArticleMockData = () => ({
  img: 'https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1200&q=75',
  category: 'Lifestyle',
  title: 'lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum',
  date: 0,
  id: 0,
})

export default LoadMoreArticles;
