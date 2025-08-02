// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import NewArrivals from './components/Sections/NewArrivals';
import Category from './components/Sections/Categories/Category';
import Content from './data/content.json';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Banner />
      <NewArrivals />
      {Content?.sections && Content?.sections?.map((item, index) => <Category key={item?.title + index} {...item} />)}
      <Footer content={Content.footer} />

      {/* Add other components as needed */}
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
