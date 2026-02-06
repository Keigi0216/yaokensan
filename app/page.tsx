import { ActivityCard } from "./components/ActivityCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { PartnerCard } from "./components/PartnerCard";
import { Section } from "./components/Section";
import { SectionReveal } from "./components/SectionReveal";
import { TextWithImage } from "./components/TextWithImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Hero imageSrc="/images/hozuki.jpg" />

      <SectionReveal>
        <Section id="member" title="メンバーについて" label="About" contentFullWidth>
        <TextWithImage
          imageSide="right"
          imageSrc="/images/syugou.jpg"
          imageAlt="八百研産メンバー集合"
        >
          <p>
            私たちは、
            東京大学・一橋大学・早稲田大学に通う関東の大学生7名で活動しています。
            メンバーは、茨城・千葉・東京・神戸・香川といった
            それぞれ異なる地域的背景を持つ学生で構成されています。
          </p>
          <p>地方にルーツを持つ者もいれば、都市部で育った者もいます。</p>
          <blockquote className="border-l-4 border-[var(--hoozuki-orange)] py-2 pl-6 pr-4 font-sans text-lg italic text-[var(--earth-brown)]">
            だからこそ、
            「地元の当事者の視点」と「外から地域を見る視点」の両方を大切にしながら、
            活動を進めています。
          </blockquote>
          <p>
            そんな出身地も大学も学年も異なる私たちですが、
            共通しているのは、
            「地域の魅力が十分に伝わっていない現状」への問題意識でした。
          </p>
          <blockquote className="border-l-4 border-[var(--hoozuki-orange)] py-2 pl-6 pr-4 font-sans text-lg italic text-[var(--earth-brown)]">
            「都市には何でもある。だけど"その土地にしかないもの"は地方にこそある」
          </blockquote>
          <p>
            地方には魅力的な資源が数多く存在します。
            しかし、その価値はまだ十分に伝えきれていません。
          </p>
          <p>
            農業の画一化や都市への一極集中が進む今だからこそ、
            地方独自の農作物に光を当て、
            その魅力を全国に発信することに意味があると考えています。
          </p>
        </TextWithImage>
      </Section>
      </SectionReveal>

      <SectionReveal>
        <Section
          id="stage"
          title="活動の舞台―茨城県高萩市"
          label="Place"
          bgAlt
          contentFullWidth
        >
        <TextWithImage
          imageSide="left"
          textBackgroundVar="--warm-beige"
          images={[
            { src: "/images/sora.jpg", alt: "高萩市の空" },
            { src: "/images/bench.jpg", alt: "里山の風景" },
            { src: "/images/hanbai.jpg", alt: "高萩市の風景" },
          ]}
        >
          <p>
            私たちの活動の舞台は、
            茨城県北部に位置する高萩市です。
          </p>
          <p>
            人口約2万5千人の小さな町ですが、
            ここには「人のあたたかさ」と「豊かな自然」があります。
          </p>
          <p>
            その象徴ともいえるのが、
            高萩市名産の「花貫フルーツほおずき」です。
          </p>
          <blockquote className="border-l-4 border-[var(--hoozuki-orange)] py-2 pl-6 pr-4 font-sans text-lg italic text-[var(--earth-brown)]">
            私たちは、
            花貫フルーツほおずきを通じて、高萩市の良さを全国に届けたい。
            そんな思いで、活動しています。
          </blockquote>
        </TextWithImage>
      </Section>
      </SectionReveal>

      <SectionReveal>
        <Section id="activity" title="活動内容" label="Activity" contentFullWidth>
        <div className="grid gap-8 md:grid-cols-2">
          <ActivityCard
            number="01"
            title="農作業"
            description="私たちは月に一度ほど茨城県高萩市を訪れ、地元農家さんのもとで食用ほおずきの栽培をお手伝いしています。具体的には、土の耕作、不要な芽を取り除く「芽かき」、支柱立てやマイカ線張り、収穫など、農作業のさまざまな工程に携わっています。"
            imageSrc="/images/nougyou.jpg"
            imageAlt="農作業の様子"
          />
          <ActivityCard
            number="02"
            title="販売会"
            description="水戸駅での生食ほおずきやほおずき製品の販売、さらに高萩市の地域のお祭りでの販売にも参加し、直接消費者の方々にほおずきの魅力を伝えています。"
            imageSrc="/images/hanbaikai.jpg"
            imageAlt="販売会の様子"
          />
        </div>
      </Section>
      </SectionReveal>

      <SectionReveal>
        <Section id="juice" title="今後の目標" subtitle="ほおずきジュースの製作" label="Goal" bgAlt contentFullWidth>
        <TextWithImage
          imageSide="right"
          textBackgroundVar="--warm-beige"
          images={[
            { src: "/images/juice.jpg", alt: "ほおずきジュースの製作" },
            { src: "/images/juice_creation2.jpg", alt: "ジュース製作の様子" },
          ]}
        >
          <p>
            現在、私たちは
            高萩市名産の「花貫フルーツほおずき」を贅沢に使った
            2種類のオリジナルジュースを製作に挑戦しています。
          </p>
          <p>
            「ほおずき」と聞くと、
            観賞用や染料のイメージを持たれる方も多いかもしれません。
          </p>
          <p>
            しかし、高萩市の「花貫フルーツほおずき」は
            食用として開発された、おいしく食べられるほおずきです。
          </p>
          <p>
            甘酸っぱくフルーティーな香り、そしてわずかな苦みが特徴で、
            ビタミン・カルシウムなどの栄養素が豊富。
            近年ではスーパーフードとしても注目されています。
          </p>
          <p>
            この魅力を、
            より手軽に、より多くの人に届けるため、
            私たちはジュースという形を選びました。
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>ほおずき100％使用の500mlタイプ</li>
            <li>梨ジュースとブレンドした180mlタイプ</li>
          </ul>
          <p>
            現在、この2種類のジュースの製作実現に向けて、
            クラウドファンディングを実施しています。
            ぜひご支援よろしくお願いします。
          </p>
          <a
            href="#"
            className="mt-6 inline-block min-h-[44px] rounded-full bg-[var(--hoozuki-orange)] px-8 py-3 font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            クラウドファンディングで支援する
          </a>
        </TextWithImage>
      </Section>
      </SectionReveal>

      <SectionReveal>
        <Section id="vision" title="商品開発で終わらせないために" label="Vision" bgAlt contentFullWidth>
        <p>
          私たちはこのプロジェクトを
          単なる商品開発で終わらせたいとは考えていません。
        </p>
        <div className="space-y-6 pt-4">
          <div>
            <h4 className="font-sans font-semibold text-[var(--earth-brown)]">
              第一歩は、
            </h4>
            <p>「花貫フルーツほおずき」をジュースを通して知ってもらうこと。</p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-[var(--earth-brown)]">
              第二歩は、
            </h4>
            <p>高萩市というまちの魅力そのものを伝えること。</p>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-[var(--earth-brown)]">
              第三歩は、
            </h4>
            <p>
              来年度以降ほおずき酒の製作等に取り組み、
              持続的なほおずき生産の土台を築くことです。
            </p>
          </div>
        </div>
        <p>
          クラウドファンディングの返礼には、
          高萩市の宿泊施設の割引券や現地での農業体験など、
          体験型の内容も用意しています。
        </p>
        <blockquote className="border-l-4 border-[var(--hoozuki-orange)] py-2 pl-6 pr-4 font-sans text-lg italic text-[var(--earth-brown)]">
          モノだけでなく、
          人・農業・まちに触れてもらうこと。
          それが、私たちの目指す地域との関わり方です。
        </blockquote>
      </Section>
      </SectionReveal>

      <SectionReveal>
        <Section id="feature" title="私たちの特徴" label="Feature" contentFullWidth>
        <div className="max-w-prose">
        <p>
          私たちの最大の強みは
          「学生・農家・行政」が手を取り合い、
          高萩市の未来を創る「三位一体」の挑戦であることです。
        </p>
        </div>
      </Section>
      </SectionReveal>

      <SectionReveal>
        <Section id="partners" title="パートナー" label="Partner" bgAlt contentFullWidth>
        <div className="grid gap-6 md:grid-cols-2">
          <PartnerCard
            name="花貫フルーツほおずき倶楽部"
            description="「花貫フルーツほおずき倶楽部」は、茨城県高萩市の新しい名産「花貫フルーツほおずき」を生産、販売する約12名からなる生産者団体です。私たち八百研産は2023年1月から月に一度程高萩市を訪れ、農作業のお手伝いをさせていただいています。農業の知識がない私たちに対しても丁寧に、温かく接してくださり、多くのことを学ばせていただいています。"
            url="https://hananuki-fruitshozuki.com/"
          />
          <PartnerCard
            name="ジュース工房シエスタ様"
            description="ジュース工房シエスタ様は栃木県芳賀郡益子町に位置するジュース工場です。保存料・添加物を一切使用せず、素材本来の味を活かしたジュース加工を行っています。私たちの「学生が主体となって地域を盛り上げたい」という思いに共感し、ほおずきジュースの製作を快諾してくださいました。"
            url="https://juice-siesta.com/"
          />
        </div>
      </Section>
      </SectionReveal>

      <Footer isHome />
    </div>
  );
}
