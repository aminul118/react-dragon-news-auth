import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";

import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
  const { data: news } = useLoaderData();
  console.log(news[0]);
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header />
      </header>

      <main className="grid grid-cols-12 gap-4  mx-auto">
        <section className="col-span-9">
          <div className="card bg-base-100  shadow-xl">
            <p>Dragon News</p>
            <figure className="px-10 pt-10">
              <img
                src={news[0]?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news[0]?.title}</h2>
              <p>{news[0]?.details}?</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news[0].category_id}`}
                  className="btn btn-primary"
                >
                  All News in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
