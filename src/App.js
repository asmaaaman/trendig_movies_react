import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SearchMedia from "./components/Search/Search";
import { getMedia, searchMedia } from "./network/api";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Details from "./Pages/Details/Details";
function App() {
  const [moviesList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();
  const [filterTextValue, setFilterTextValue] = useState();
  //SEARCH
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const getSearchData = () => {
    searchMedia(page, searchText)
      .then((res) => {
        setSearchData(res?.data?.results);

        setNumberOfPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchData = (event) => {
    console.log(event);
    setSearchText(event?.target?.value);
    getSearchData(searchData);
  };
  const getData = () => {
    getMedia(page)
      .then((res) => {
        setMovieList(res?.data?.results);
        setNumberOfPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchText === "") {
      getData();
    } else {
      getSearchData();
      // setSearchText("");
    }
  }, [page, searchText]);
  //Filtered Data
  let filteredMediaList = moviesList.filter((media) => {
    if (filterTextValue === "Movie") {
      return media.media_type === "movie";
    } else if (filterTextValue === "TV") return media.media_type === "tv";
    else return moviesList;
  });

  function onFilterValueSelected(filterValue) {
    setFilterTextValue(filterValue);
  }
  const Root = () => {
    return (
      <>
        <SearchMedia
          filterValueSelected={onFilterValueSelected}
          handleSearchData={handleSearchData}
          searchData={searchData}
          searchText={searchText}
          moviesList={filteredMediaList}
          numberOfPages={numberOfPages}
          setPage={setPage}
        />
      </>
    );
  };
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route
            path="details/:id/:media_type"
            element={<Details media={moviesList} />}
          ></Route>
        </Routes>
      </>
      <div></div>
    </>
  );
}

export default App;
