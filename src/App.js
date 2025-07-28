// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import NewArrivals from './components/Sections/NewArrivals';
import Category from './components/Sections/Categories/Category';
import Content from './data/content.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <NewArrivals />
      {Content?.categories && Content?.categories?.map((item, index) => <Category key={item?.title + index} {...item} />)}
      {/* <Category title={Content?.categories[0]?.title} data = {Content?.categories[0]?.data}  /> */}

      {/* Add other components as needed */}
      {/* <Footer /> */}
      {/* <Cart /> */}
      {/* <Wishlist /> */}  
      {/* <ProductDetails /> */}
      {/* <Checkout /> */}
      {/* <OrderSummary /> */}
      {/* <UserProfile /> */}
      {/* <SearchResults /> */}
      {/* <CategoryList /> */}
      {/* <ProductList /> */}
      {/* <ProductCard /> */}
      {/* <Pagination /> */}
      {/* <SectionHeading /> */}
      {/* <LoadingSpinner /> */}
      {/* <ErrorBoundary /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs /> */}
      {/* <TermsAndConditions /> */}
      {/* <PrivacyPolicy /> */}
      {/* <FAQ /> */}
      {/* <Blog /> */}
      {/* <NewsletterSignup /> */}
      {/* <SocialMediaLinks /> */}
      {/* <BackToTopButton /> */}
      {/* <SiteMap /> */}
      {/* <AccessibilityFeatures /> */}
      {/* <LanguageSelector /> */}
      {/* <CurrencySelector /> */}
      {/* <UserAuthentication /> */}
      {/* <AdminDashboard /> */}
      {/* <AnalyticsDashboard /> */}
      {/* <ProductComparison /> */}
      {/* <WishlistButton /> */}
      {/* <QuickViewModal /> */}      

    </div>
  ); 
}

export default App;
