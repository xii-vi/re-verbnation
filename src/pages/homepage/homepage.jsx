import "../../style/layout.css"
import noVideoFound from "../../assest/noVideoFound.svg"
import { useVideo } from "../../context/videoContext"
import { VideoCard } from "../../components/card/videocard"
import { filterFunction } from "../../utilities/helper/filterFunctions"
export const Homepage = ()=>{
    const { videoData,categoryData,VideoDispatch,VideoState:{searchQuery,
    category}} =  useVideo();
    const filteredVideo = filterFunction(videoData, searchQuery, category)
    return(<>
    {filteredVideo.length<=0?
    <div className='text-center py-2 main'>
        <div className="m-2">
            <div className="search-bar-wrapper-sm flex p-2">
            <input type="text" placeholder="Search for Videos" onChange={(e) => VideoDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}/>
            <button><i className="fa fa-search cursor-pointer"></i></button>
            </div>
            </div>
    <img className="img-responsive error-page-img" src={noVideoFound} alt="error-page" />
    <h3 className='py-2'>No video found</h3>
</div>
        :<div className="main p-4">
            <div className="m-2">
            <div className="search-bar-wrapper-sm flex p-2">
            <input type="text" placeholder="Search for Videos" onChange={(e) => VideoDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}/>
            <button><i className="fa fa-search cursor-pointer"></i></button>
            </div>
            </div>
            <div className="flex">
                <span className="btn btn-primary m-2 flex center-flex" onClick={() => VideoDispatch({ type: "FILTER_BY_CATEGORY", payload: "All" })}>All</span>
                {categoryData.map(item=><span className="btn btn-primary m-2" onClick={(e) => VideoDispatch({ type: "FILTER_BY_CATEGORY", payload: e.target.innerText })}>{item.categoryName}</span>)}
            </div>
        <div className="main-display">
            {filteredVideo.map(item=><VideoCard singleVideoCard={item} key={item._id}/>)}
        </div>
        </div>
        }
        </>
    )
}