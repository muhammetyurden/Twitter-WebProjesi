import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function Homepage() {
  return (
    <Layout>
      <Tweet
        name="Muhammet Yürden"
        slug="muhammet.rdd"
        datetime={new Date('2021-01-13')}
        text={`“İnce düşünen insanların sık yaptığı hata, kişiliği küçük insanlara büyük anlamlar yüklemektir.”

|  Aldous Huxley`}
      />

      <Tweet
        name="Muhammet Yürden"
        slug="muhammet.rdd"
        datetime={new Date('2021-01-13')}
        text={`Peru'da bir mahkeme, Coronavirüs’ü Bill Gates ve Rockefeller ailesininin ürettiğini iddia edip, davaların gecikmesi nedeniyle soruşturma açtı. 

— 20Minitos`}
      />
    </Layout>
  )
}

export default Homepage
