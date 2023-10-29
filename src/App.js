import { useEffect, useState } from "react";
import InfiniteScroll from "./components/images";
import { Input } from "./components/input";
import { Gallery } from "react-grid-gallery";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const onChangeQuery = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const onClick = () => {
    setPage(1);
    setImages([]);
  };
  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        const endpoint = query
          ? `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=sEaUiT9kKpMtNLdbSHvaFWlvjlGT-EFN360QOtycPys&per_page=200`
          : `https://api.unsplash.com/photos?page=${page}&client_id=sEaUiT9kKpMtNLdbSHvaFWlvjlGT-EFN360QOtycPys&per_page=200`;
        const response = await (await fetch(endpoint)).json();
        const data = response.results || response;
        setLoading(false);
        setImages([
          ...images,
          ...data.map((item) => {
            return {
              height: item.height,
              width: item.width,
              src: item.urls.regular,
            };
          }),
        ]);
      }, 1000);
    })();
  }, [page]);

  return (
    <div>
      <Input onChange={onChangeQuery} onClick={onClick} />
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <InfiniteScroll
          // loader={<p>Loading...</p>}

          loader={
            <div style={{ textAlign: "center", padding: 30 }}>Loading...</div>
          }
          className="w-[800px] mx-auto my-10"
          fetchMore={() => setPage((prev) => prev + 1)}
          hasMore={true}
          endMessage={<p>You have seen it all</p>}
        >
          {images.length > 0 && <Gallery images={images} rowHeight={700} />}
        </InfiniteScroll>
      )}
    </div>
  );
}

export default App;
