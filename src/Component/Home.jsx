import TrendingItems from "./TrendingItems";
import CosmeticsSalesSection from "./CosmeticsSalesSection";
import HomeBannerPage from "./HomeBannerPage";
import HomeBrandCompany from "./HomeBrandCompany";
import HomeMainProductSection from "./HomeMainProductSection";
import HomeNewslaterSection from "./HomeNewslaterSection";
import HomeSection1 from "./HomeSection1";
import HomeSection3 from "./HomeSection3";
import TopCategory from "./TopCategory";

function HomePage() {
    return (
        <>
            <HomeSection1 />
            <HomeBannerPage />
            <HomeSection3 />
            <HomeMainProductSection />
            <TopCategory />
            <TrendingItems />
            <CosmeticsSalesSection />
            <HomeBrandCompany />
            <HomeNewslaterSection />

        </>
    );
}
export default HomePage;