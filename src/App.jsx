import "./App.css";
import PostCard from "./components/PostCard/PostCard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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

          <section className="grid gap-8">
            <PostCard
              date={new Date()}
              title="UX review presentations"
              postImg="src/assets/icons/blog-post-1.png"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              categories={[
                {
                  category_title: "Design",
                  text_color: "text-purple-600",
                  bg_color: "bg-purple-100",
                },
                {
                  category_title: "Research",
                  text_color: "text-blue-600",
                  bg_color: "bg-blue-100",
                },
                {
                  category_title: "Presentation",
                  text_color: "text-pink-600",
                  bg_color: "bg-pink-100",
                },
              ]}
            />

            <PostCard
              date={new Date()}
              title="UX review presentations"
              postImg="src/assets/icons/blog-post-1.png"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              categories={[
                {
                  category_title: "Design",
                  text_color: "text-purple-600",
                  bg_color: "bg-purple-100",
                },
                {
                  category_title: "Research",
                  text_color: "text-blue-600",
                  bg_color: "bg-blue-100",
                },
                {
                  category_title: "Presentation",
                  text_color: "text-pink-600",
                  bg_color: "bg-pink-100",
                },
              ]}
            />

            <PostCard
              date={new Date()}
              title="UX review presentations"
              postImg="src/assets/icons/blog-post-1.png"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              categories={[
                {
                  category_title: "Design",
                  text_color: "text-purple-600",
                  bg_color: "bg-purple-100",
                },
                {
                  category_title: "Research",
                  text_color: "text-blue-600",
                  bg_color: "bg-blue-100",
                },
                {
                  category_title: "Presentation",
                  text_color: "text-pink-600",
                  bg_color: "bg-pink-100",
                },
              ]}
            />
          </section>
        </section>

        <section className="container p-8 space-y-8 mx-auto ">
          <header className="">
            <h2 className="text-2xl font-semibold leading-8 ">
              All blog posts
            </h2>
          </header>
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-start">
            <PostCard
              date={new Date()}
              title="UX review presentations"
              postImg="src/assets/icons/blog-post-1.png"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              categories={[
                {
                  category_title: "Design",
                  text_color: "text-purple-600",
                  bg_color: "bg-purple-100",
                },
                {
                  category_title: "Research",
                  text_color: "text-blue-600",
                  bg_color: "bg-blue-100",
                },
                {
                  category_title: "Presentation",
                  text_color: "text-pink-600",
                  bg_color: "bg-pink-100",
                },
              ]}
            />

            <PostCard
              date={new Date()}
              title="UX review presentations"
              postImg="src/assets/icons/blog-post-1.png"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              categories={[
                {
                  category_title: "Design",
                  text_color: "text-purple-600",
                  bg_color: "bg-purple-100",
                },
                {
                  category_title: "Research",
                  text_color: "text-blue-600",
                  bg_color: "bg-blue-100",
                },
                {
                  category_title: "Presentation",
                  text_color: "text-pink-600",
                  bg_color: "bg-pink-100",
                },
              ]}
            />

            <PostCard
              date={new Date()}
              title="UX review presentations"
              postImg="src/assets/icons/blog-post-1.png"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              categories={[
                {
                  category_title: "Design",
                  text_color: "text-purple-600",
                  bg_color: "bg-purple-100",
                },
                {
                  category_title: "Research",
                  text_color: "text-blue-600",
                  bg_color: "bg-blue-100",
                },
                {
                  category_title: "Presentation",
                  text_color: "text-pink-600",
                  bg_color: "bg-pink-100",
                },
              ]}
            />
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
