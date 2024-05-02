import "./App.css";
import PostCard from "./components/PostCard/PostCard";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <header>
        <Navbar name="Alice" />
        <h2 className="font-bold text-center uppercase text-7xl leading-[5.446rem] border-t border-b border-black">
          The Blog
        </h2>
      </header>
      <main>
        <section className="container p-8 space-y-8">
          <header>
            <h2 className="text-2xl font-semibold leading-8 ">
              Recent blog posts
            </h2>
          </header>
          <article className="space-y-6">
            <img src="src/assets/icons/blog-post-1.png" alt="Blog post" />
            <div className="space-y-6">
              <p>Sunday , 1 Jan 2023</p>
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold">
                  UX review presentations
                </h3>
                <img src="src/assets/icons/visit-icon.png" alt="Arrow icon" />
              </div>
              <p>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="space-x-2">
                <button>Design</button>
                <button>Research</button>
                <button>Presentation</button>
              </div>
            </div>
          </article>

          <PostCard />
        </section>
      </main>
    </>
  );
}

export default App;
