
// Components
import Bookmark from "../../components/bookmark/Boomark";

// Data
import BookMarksData from "../../static-data/BookMarks";

const Bookmarks = () => {

    return (
        <div className="overflow-y-scroll h-200">
            {
                BookMarksData.map((data, index) => <Bookmark key={index} img={data.img} name={data.name} time={data.time} title={data.title} body={data.body} like_count={data.like} comment_count={data.comment}/>)
            }
        </div>
    )
}

export default Bookmarks;