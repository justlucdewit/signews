<template>
  <div class="home">
    <img
      src="@/assets/homebanner.png"
      id="home-banner"
      alt="Home page banner"
    />

    <div id="title-box">
      <h1>Sig News</h1>
      <h4>Free and opensource programming and technology news</h4>
    </div>

    <Restrictor>
      <br />
      <div class="divider">Featured articles</div>
      <br />

      <div id="primary-articles">
        <div class="primary-article-l article">
          <ArticleLink
            :banner="articles[0].banner"
            :title="articles[0].title"
            :external="articles[0].external"
          />
        </div>

        <div>
          <div class="primary-article-tr article">
            <ArticleLink
              :banner="articles[1].banner"
              :title="articles[1].title"
              :external="articles[1].external"
            />
          </div>

          <div class="primary-article-br article">
            <ArticleLink
              :banner="articles[2].banner"
              :title="articles[2].title"
              :external="articles[2].external"
            />
          </div>
        </div>
      </div>

      <InArticleAdsense
        data-ad-client="ca-pub-3013098600810060"
        data-ad-slot="5222192813"
      />

      <!-- <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3013098600810060"
        crossorigin="anonymous"
      ></script>

      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-3013098600810060"
        data-ad-slot="8454860810"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script> -->

      <br />
      <div class="divider">Other articles</div>
      <br />

      <div id="news-feed">
        <ArticleLink
          v-for="article in otherArticles"
          :key="article.title"
          :banner="article.banner"
          :title="article.title"
          :external="article.external"
          style="margin-bottom: 20px"
        />
      </div>
    </Restrictor>
  </div>
</template>

<script>
import ArticleLink from "@/components/ArticleLink";
import Restrictor from "@/components/Restrictor";

export default {
  components: {
    ArticleLink,
    Restrictor,
  },

  computed: {
    otherArticles() {
      // Return all the articles except the first 3
      return this.articles.slice(3);
    },
  },

  data: () => ({
    articles: [
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: true,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
      {
        banner: "https://www.hardwarezone.com.sg/thumbs/699642/og.jpg",
        title: "Is Google's new 'Lamda' AI sentient?",
        external: false,
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
#home-banner {
  width: 100vw;
  opacity: 0.2;
  height: 300px;
  object-fit: cover;
  position: absolute;
  left: 0px;
}

#title-box {
  margin-top: 60px;
  margin-bottom: 80px;
  text-align: left;
  background: rgba(0, 0, 0, 0.6);
  display: inline-block;
  padding: 20px 40px;
  color: white;
  width: 300px;

  h4 {
    margin-top: -15px;
  }
}

#primary-articles {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 20px;
  padding: 0px 20px;

  .primary-article-l {
    height: 30vw;
    width: 100%;
    max-height: 240px;
  }
}

#news-feed {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  #article {
    width: 250px;
  }
}
</style>
