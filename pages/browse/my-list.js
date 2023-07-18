import Head from "next/head";
import NavBar from "@/components/nav/navbar";
import styles from "../../styles/MyList.module.css";
import { redirectUser } from "@/utils/redirectUser";
import { getMyList } from "@/lib/video";

import SectionCards from "@/components/card/sectioncard";


export async function getServerSideProps(context) {
    const { userId, token } = await redirectUser(context);

    if (!userId) {
        return {
          props: {},
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      
    const videos = await getMyList(userId, token);
   
  
    return {
      props: {
        myListVideos: videos,
      },
    };
  }


const MyList = (myListVideos ) => {
    const myvideo =myListVideos.myListVideos;
    
  return (
    <div>
      <Head>
        <title>My list</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.sectionWrapper}>
        <SectionCards
            title="My List"
            videos={myvideo}
            size="small"
            shouldWrap
            shouldScale={false}
          />

        </div>
      </main>
    </div>
  );
};

export default MyList;