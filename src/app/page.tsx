import styles from './page.module.css'
import ArticleList from '@/components/ArticleList';
import {
  Grid,
} from '@mui/material';
import LoadMoreArticles from '@/components/LoadMoreArticles';
import { API } from '@/http/http';
import CategorySideBar from '@/components/CategorySideBar';

const getArticles = async (extraKeyMatch: any = {}) => {
  const res = await API.getArticles({
    keyMatch: {
      customerId: [process.env.NEXT_PUBLIC_CUSTOMER_ID as string],
      ...extraKeyMatch,
    },
    orderByKey: 'created',
    startIndex: 0,
    max: 11,
  });
  return res.data;
};

// const getCategories = async () => {
//   const res = await API.getCategories();
//   return res.data.map((d: any) => ({
//     text: d,
//   }))
// };


const Landing = async () => {
  const articles = await getArticles();
  // const categories = await getCategories();

  return (
    <div className={styles.center}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <h1>Featured articles</h1>
            </Grid>

            {
              Array.isArray(articles) && articles.slice(0, 2).map((data: any) => (
                <Grid key={data.articleId} item xs={12} md={6}>
                  <ArticleList articleData={data} />
                </Grid>
              ))
            }


            <Grid sx={{ marginTop: '20px' }} item xs={12}>
              <h3>More articles</h3>
            </Grid>

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

        </Grid>

        {/* <Grid item xs={0} md={4}>
          <CategorySideBar handleCategoryClick={handleCategoryClick} categories={categories} />
        </Grid> */}

      </Grid>

    </div>
  )
}

export default Landing;
