import Image from 'next/image'
import styles from './page.module.css'
import ArticleList from '@/components/ArticleList';
import {
  Grid,
} from '@mui/material';
import LoadMoreArticles from '@/components/LoadMoreArticles';
import { API } from '@/http/http';

const getArticles = async () => {
  const res = await API.getArticles({
    keyMatch: {
      customerId: [process.env.CUSTOMER_ID as string],
    },
    orderByKey: 'created',
    startIndex: 0,
    max: 11,
  });
  return res.data;
};

const Landing = async () => {
  const articles = await getArticles();
  console.log('process.env.CUSTOMER_ID');
  console.log(process.env.CUSTOMER_ID);
  return (
    <div className={styles.center}>
      <Grid container spacing={2}>

        {
          Array.isArray(articles) && articles.slice(0, 2).map((data: any) => (
            <Grid key={data.articleId} item xs={12} md={6}>
              <ArticleList articleData={data} />
            </Grid>
          ))
        }

        {
          Array.isArray(articles) && articles.slice(2, 14).map((data: any) => (
            <Grid key={data.articleId} item xs={12} md={4}>
              <ArticleList articleData={data} sm />
            </Grid>
          ))
        }

        {articles && (
          <Grid item xs={12}>
            <LoadMoreArticles startIndex={articles.length} />
          </Grid>
        )}

      </Grid>

    </div>
  )
}

export default Landing;
