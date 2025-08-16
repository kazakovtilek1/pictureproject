import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ImageCarousel from "@/components/imageCarousel/ImageCarousel";
import ProjectGoals from "@/components/projectGoals/ProjectGoals";
import Questions from "@/components/questions/Questions";
import TitleSection from "@/components/titleSection/TitleSection";

export default function Page() {
  return (
    <div>
      <Header />
      <TitleSection />
      <ProjectGoals />
      <ImageCarousel />
      <Questions />
      <Footer />
    </div>
  );
}
